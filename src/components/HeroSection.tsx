import { ArrowRight, Shield, Clock, TrendingUp } from "lucide-react";
const heroImage = "/foto-rodrigo.jpg";

const WA_NUMBER = "5571983753052";
const WA_MSG = encodeURIComponent("Olá, gostaria de obter mais informações");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const FEATURES = [
  { icon: Clock,       text: "Economia de tempo real" },
  { icon: Shield,      text: "Processos 100% seguros" },
  { icon: TrendingUp,  text: "Escala operacional" },
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center pt-28 pb-16 md:pt-32 md:pb-20 px-6 overflow-hidden min-h-[100svh]">
      {/* Subtle glow orbs */}
      <div className="pointer-events-none absolute top-0 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px]
                      bg-primary/15 rounded-full blur-[100px] opacity-50" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 w-64 h-64 md:w-[400px] md:h-[400px]
                      bg-primary/8 rounded-full blur-[80px] opacity-30" />

      {/* Watermark */}
      <span className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
        LEGAL
      </span>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Text (always first) ── */}
          <div className="order-1 text-center lg:text-left space-y-6">

            <div className="badge-premium inline-flex">
              <Shield className="w-3 h-3 shrink-0" />
              <span>Braço operacional do seu escritório</span>
            </div>

            <h1 className="text-[2rem] sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] text-white">
              A sobrecarga legal<br />
              não pode{" "}
              <span className="text-primary italic">limitar</span>
              {" "}o seu<br />
              escritório
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
              O <span className="text-white font-semibold">Legal</span> cuida de toda a burocracia,
              regularização, licenças e alvarás para você focar no que realmente importa:{" "}
              <span className="text-primary">clientes e estratégia.</span>
            </p>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button w-full sm:w-auto group"
            >
              Quero implementar agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Feature pills */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5">
              {FEATURES.map((f, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <f.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-wider leading-tight text-center lg:text-left">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-white/30">
              ✓ Por demanda ou contrato fixo &nbsp;·&nbsp; ✓ Atendimento nacional
            </p>
          </div>

          {/* ── Image ── */}
          <div className="order-2 relative max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
            {/* Outer glow */}
            <div className="absolute -inset-6 bg-primary/15 blur-3xl rounded-full opacity-40" />

            <div className="relative glass-card p-2 overflow-visible">
              <div className="rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={heroImage}
                  alt="Profissional no escritório Legal"
                  className="w-full h-full object-cover scale-[1.02] hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl" />
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-6 -right-4 md:-right-8 glass-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-black text-white leading-none">+40%</p>
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest">Eficiência</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
