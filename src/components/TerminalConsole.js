import { useState, useEffect } from 'react';

const fullTexts = [
  '"role": "Senior Front-End Developer",',
  '"experience": "6+ years",',
  '"coreFocus": ["Next.js", "TypeScript", "Core Web Vitals"],',
  '"architecture": "Clean Code & Scalability",',
  '"performanceTarget": 100'
];

export default function TerminalConsole() {
  const [lines, setLines] = useState([
    { text: '', typed: false },
    { text: '', typed: false },
    { text: '', typed: false },
    { text: '', typed: false },
    { text: '', typed: false },
  ]);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    if (activeLine >= fullTexts.length) return;

    let charIndex = 0;
    const interval = setInterval(() => {
      setLines((prev) => {
        const next = [...prev];
        next[activeLine] = {
          text: fullTexts[activeLine].slice(0, charIndex + 1),
          typed: charIndex + 1 === fullTexts[activeLine].length
        };
        return next;
      });

      charIndex++;
      if (charIndex >= fullTexts[activeLine].length) {
        clearInterval(interval);
        setTimeout(() => {
          setActiveLine((prev) => prev + 1);
        }, 120); // Pause between lines
      }
    }, 18); // Fast typing speed

    return () => clearInterval(interval);
  }, [activeLine]);

  const renderValue = (val) => {
    if (val.startsWith('"') && val.endsWith('",')) {
      return (
        <>
          <span className="text-accent">{val.slice(0, -1)}</span>
          <span className="text-gray-400">,</span>
        </>
      );
    }
    if (val.startsWith('"') && val.endsWith('"')) {
      return <span className="text-accent">{val}</span>;
    }
    if (val.startsWith('[')) {
      return <span className="text-indigo-300">{val}</span>;
    }
    if (val === '100') {
      return <span className="text-green-400">{val}</span>;
    }
    return <span className="text-gray-300">{val}</span>;
  };

  const renderLine = (text, index) => {
    if (!text) return <p key={index} className="min-h-[1.5rem]" />;

    // Match '"key": value' pattern
    const keyMatch = text.match(/^("[a-zA-Z]+"):\s*(.*)/);
    if (keyMatch) {
      const key = keyMatch[1];
      const val = keyMatch[2];

      return (
        <p key={index} className="min-h-[1.5rem] flex items-center">
          <span className="text-pink-400">{key}</span>
          <span className="text-gray-400">: &nbsp;</span>
          {renderValue(val)}
          {activeLine === index && (
            <span className="animate-pulse text-accent ml-1 font-bold">▋</span>
          )}
        </p>
      );
    }

    return (
      <p key={index} className="min-h-[1.5rem] flex items-center">
        {text}
        {activeLine === index && (
          <span className="animate-pulse text-accent ml-1 font-bold">▋</span>
        )}
      </p>
    );
  };

  return (
    <div className="font-mono text-gray-300 space-y-1.5 leading-relaxed select-none" style={{ fontSize: '11px' }}>
      {lines.map((line, idx) => {
        if (idx <= activeLine) {
          return renderLine(line.text, idx);
        }
        return <p key={idx} className="min-h-[1.5rem]" />;
      })}
    </div>
  );
}
