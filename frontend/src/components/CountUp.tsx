import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  value: string;       // e.g. "+500", "12+", "100%", "2"
  className?: string;
  duration?: number;   // ms
}

function parseNumber(raw: string): { prefix: string; num: number; suffix: string } {
  const match = raw.match(/^([^0-9]*)(\d+)([^0-9]*)$/);
  if (!match) return { prefix: '', num: 0, suffix: raw };
  return { prefix: match[1], num: parseInt(match[2], 10), suffix: match[3] };
}

export function CountUp({ value, className, duration = 1800 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [display, setDisplay] = useState('0');
  const { prefix, num, suffix } = parseNumber(value);

  useEffect(() => {
    if (!isInView || num === 0) {
      setDisplay(value);
      return;
    }

    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, num, prefix, suffix, duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
