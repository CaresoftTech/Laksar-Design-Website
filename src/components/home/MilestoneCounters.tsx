import { useEffect, useState, useRef } from "react";
import { Briefcase, Users, Award, Smile } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

const Counter = ({ end, suffix = "", label, icon }: CounterProps) => {
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

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const steps = 60;
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
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, end]);

  return (
    <div
      ref={ref}
      className="
        group relative rounded-2xl p-6 md:p-8
        bg-white/10 backdrop-blur-xl
        border border-white/20
        shadow-lg hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-2
      "
    >
      {/* Icon */}
      <div
        className="
          w-14 h-14 mx-auto mb-4
          flex items-center justify-center
          rounded-xl
          bg-gradient-to-br from-[#38e8f8]  to-[#74c165]
          text-white
          group-hover:scale-110 transition-transform duration-300
        "
      >
        {icon}
      </div>

      {/* Count */}
      <div className="text-center">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          {count}
          <span className="text-highlight">{suffix}</span>
        </div>

        <p className="mt-2 text-xs sm:text-sm tracking-wide text-white/70">
          {label}
        </p>
      </div>
    </div>
  );
};

const MilestoneCounters = () => {
  const milestones = [
    {
      end: 15,
      suffix: "+",
      label: "Years of Excellence",
      icon: <Award size={28} />,
    },
    {
      end: 500,
      suffix: "+",
      label: "Projects Completed",
      icon: <Briefcase size={28} />,
    },
    {
      end: 50,
      suffix: "+",
      label: "Expert Engineers",
      icon: <Users size={28} />,
    },
    {
      end: 200,
      suffix: "+",
      label: "Happy Clients",
      icon: <Smile size={28} />,
    },
  ];

  return (
    <section
      className="
        relative overflow-hidden
        bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
        py-16 sm:py-20
      "
    >
      {/* Background blur blobs */}
      

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {milestones.map((item, index) => (
            <Counter
              key={index}
              end={item.end}
              suffix={item.suffix}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilestoneCounters;
