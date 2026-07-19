import { useSpotlight } from '../hooks/useSpotlight';

export default function SpotlightCard({ children, className = '', as: Component = 'div', ...props }) {
  const ref = useSpotlight();
  return (
    <Component ref={ref} className={`spotlight-card ${className}`} {...props}>
      {children}
    </Component>
  );
}
