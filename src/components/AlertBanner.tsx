import { Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const alerts = [
  "Seu escritório contábil merece o melhor",
  "Seu escritório contábil um passo à frente dos outros",
];

const AlertBanner = () => {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentAlert((prev) => (prev + 1) % alerts.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#050507] py-2.5 px-4 border-b border-white/5 relative z-[60]">
      <div className="container-wide flex items-center justify-center gap-4">
        <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
        <p 
          className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/60 transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          {alerts[currentAlert]}
        </p>
        <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
      </div>
    </div>
  );
};

export default AlertBanner;
