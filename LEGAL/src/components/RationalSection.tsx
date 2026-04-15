import { CheckCircle2, Quote, Star, Users, FileCheck, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { 
    icon: FileCheck, 
    value: 300, 
    suffix: "+", 
    label: "processos concluídos",
    prefix: ""
  },
  { 
    icon: Star, 
    value: 92, 
    suffix: "%", 
    label: "de satisfação",
    prefix: ""
  },
  { 
    icon: TrendingDown, 
    value: 40, 
    suffix: "%", 
    label: "redução operacional",
    prefix: "até "
  },
];

const AnimatedCounter = ({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};

const RationalSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-card">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Resultados Comprovados</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Provas de que funciona
          </h2>
          <p className="text-lg text-muted-foreground">
            Números reais de escritórios que confiam no Legal
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card bg-card border border-border"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team badge */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-primary" />
          </div>
          <p className="text-lg font-medium text-foreground">
            Equipe especializada em legislação empresarial
          </p>
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-10 shadow-2xl">
            {/* Quote icon */}
            <div className="absolute -top-5 left-8">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 pt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
              "O Legal salvou nosso tempo e nossa reputação. Hoje nossos clientes recebem tudo{" "}
              <span className="font-bold text-primary">muito mais rápido</span>."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center">
                <span className="text-xl font-bold text-primary">C</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Carlos</p>
                <p className="text-sm text-muted-foreground">Proprietário de escritório contábil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RationalSection;
