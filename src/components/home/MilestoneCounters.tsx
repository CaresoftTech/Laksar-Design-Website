import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const Counter = ({ end, suffix = '', label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
        {count}{suffix}
      </div>
      <div className="text-primary-foreground/80 text-sm md:text-base font-medium">
        {label}
      </div>
    </div>
  );
};

const MilestoneCounters = () => {
  const milestones = [
    { end: 15, suffix: '+', label: 'Years of Excellence' },
    { end: 500, suffix: '+', label: 'Projects Completed' },
    { end: 50, suffix: '+', label: 'Expert Engineers' },
    { end: 200, suffix: '+', label: 'Happy Clients' },
  ];

  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container-max px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {milestones.map((milestone, index) => (
            <Counter
              key={index}
              end={milestone.end}
              suffix={milestone.suffix}
              label={milestone.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestoneCounters;
