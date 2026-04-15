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
    <div className="alert-banner py-3 px-4">
      <div className="container-narrow flex items-center justify-center gap-3">
        <div className="relative">
          <Sparkles className="w-5 h-5 text-primary" />
          <div className="absolute inset-0 animate-pulse-ring">
            <Sparkles className="w-5 h-5 text-primary opacity-50" />
          </div>
        </div>
        <p 
          className={`text-sm md:text-base font-medium text-foreground transition-all duration-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          {alerts[currentAlert]}
        </p>
        <ArrowRight className="w-4 h-4 text-primary hidden sm:block" />
      </div>
    </div>
  );
};

export default AlertBanner;
