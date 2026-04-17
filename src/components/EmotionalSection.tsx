import { Phone, Clock, Building2, AlertCircle, HeartHandshake, CheckCircle2 } from "lucide-react";

const WA_NUMBER = "5571983753052";
const WA_MSG = encodeURIComponent("Olá, gostaria de obter mais informações");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const PAINS = [
  { icon: Phone,       text: "Telefone tocando sem parar" },
  { icon: Clock,       text: "Cliente cobrando prazo" },
  { icon: Building2,   text: "Protocolo travado na prefeitura" },
  { icon: AlertCircle, text: "Órgão público sem retorno" },
];

const EmotionalSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Right: Text (on mobile comes first) ── */}
          <div className="order-1 lg:order-2 space-y-6">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              A rotina de um{" "}
              <span className="text-primary italic">escritório contábil</span>{" "}
              não deveria ser um{" "}
              <span className="text-destructive">caos operacional</span>
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Telefone tocando, cliente cobrando, protocolo travado, prefeitura sem retorno...
              </p>
              <p className="text-white/80 font-medium">
                E no fim do dia, o que mais importa: {" "}
                <span className="text-primary">estratégia, expansão e novos clientes </span>
                acaba ficando para depois.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/5">
              {[
                "Tempo recuperado para o estratégico",
                "Paz na gestão de demandas",
              ].map((txt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">{txt}</span>
                </div>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button w-full sm:w-auto group"
            >
              Quero resolver isso agora
            </a>
          </div>

          {/* ── Left: Pain cards ── */}
          <div className="order-2 lg:order-1 flex flex-col space-y-6">
            <div className="badge-premium inline-flex self-start">
              <HeartHandshake className="w-3 h-3 shrink-0" />
              <span>Nós entendemos você</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
            {PAINS.map((pain, i) => (
              <div
                key={i}
                className="glass-card p-5 group hover:border-destructive/20 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-destructive/10 flex items-center justify-center mb-4
                                animate-vibrate group-hover:bg-destructive transition-colors duration-300">
                  <pain.icon className="w-5 h-5 text-destructive group-hover:text-white transition-colors" />
                </div>
                <p className="text-sm font-bold text-destructive/90 leading-snug">{pain.text}</p>
              </div>
            ))}
            </div>

            <p className="text-sm bg-primary/5 p-4 rounded-xl border border-primary/15 text-white/60 italic">
              O <span className="text-primary font-bold">Legal</span> existe para aliviar esse peso
              e devolver qualidade ao seu atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
