import { useReveal } from '../hooks/useReveal';

// Scroll-reveal wrapper with optional stagger delay (ms).
export default function Reveal({ as: Tag = 'div', delay = 0, children, ...rest }) {
  const ref = useReveal(delay);
  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
