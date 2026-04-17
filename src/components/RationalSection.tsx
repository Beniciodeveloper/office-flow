import { CheckCircle2, Star, Users, FileCheck, TrendingDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const WA_NUMBER = "5571983753052";
const WA_MSG = encodeURIComponent("Olá, gostaria de obter mais informações");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const stats = [
  { icon: FileCheck,   value: 300, suffix: "+", prefix: "",      label: "Processos concluídos" },
  { icon: Star,        value: 96,  suffix: "%", prefix: "",      label: "Taxa de satisfação"   },
  { icon: TrendingDown,value: 40,  suffix: "%", prefix: "até ", label: "Redução operacional"   },
];

const AnimatedCounter = ({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const steps = 50;
    const inc = value / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{prefix}{count}{suffix}</span>;
};

const TESTIMONIALS = [
  {
    initial: "C",
    name: "Carlos A.",
    role: "Proprietário de Escritório",
    quote: "O Legal salvou nosso tempo e nossa reputação. Nossos clientes recebem tudo muito mais rápido.",
  },
  {
    initial: "D",
    name: "Danilo P.",
    role: "Líder de Operações",
    quote: "A agilidade nos processos mudou nosso patamar de entrega. Atendimento estratégico e impecável.",
  },
];

const RationalSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="badge-premium inline-flex">
            <CheckCircle2 className="w-3 h-3 shrink-0" />
            <span>Resultados reais</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Escritórios que escalam com <span className="text-primary italic">segurança</span>
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Dados reais da transformação operacional dos nossos parceiros.
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <s.icon className="w-5 h-5 text-primary group-hover:text-white" />
              </div>
              <p className="text-4xl font-black text-white tabular-nums mb-1">
                <AnimatedCounter value={s.value} suffix={s.suffix} prefix={s.prefix} />
              </p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── Team banner ── */}
        <div className="glass-card p-6 border-primary/15 bg-primary/5 flex flex-col sm:flex-row items-center gap-5 mb-12 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Users className="w-6 h-6 text-white" />
          </div>
          <p className="text-base font-semibold text-white">
            Equipe especializada em regularização empresarial com atendimento em{" "}
            <span className="text-primary underline underline-offset-4 decoration-1">todo o Brasil</span>
          </p>
        </div>

        {/* ── Testimonials ── */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="glass-card p-6 md:p-8 flex flex-col justify-between hover:border-white/10 transition-colors duration-300">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-base text-white/80 leading-relaxed">
                  "{t.quote}"
                </blockquote>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-black text-sm shrink-0">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RationalSection;
