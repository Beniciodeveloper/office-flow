import { 
  Send, 
  Settings, 
  Eye, 
  Trophy,
  ArrowRight
} from "lucide-react";

const WA_NUMBER = "5571983750521";
const WA_MSG = encodeURIComponent("Olá, gostaria de saber como funciona o fluxo do Legal");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const steps = [
  { number: 1, icon: Send,     title: "Você encaminha a demanda", description: "Via WhatsApp ou sistema proprietário" },
  { number: 2, icon: Settings, title: "O Legal assume o fluxo",   description: "Validamos documentos e iniciamos o trâmite" },
  { number: 3, icon: Eye,      title: "Monitoramento 360°",      description: "Transparência total em cada etapa do órgão" },
  { number: 4, icon: Trophy,   title: "Entrega e Excelência",    description: "Protocolo finalizado e cliente satisfeito" },
];

const ProcessSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-premium inline-flex">
            <Settings className="w-3 h-3 shrink-0" />
            <span>Fluxo de Trabalho</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Como funciona a operação <span className="text-primary italic">Legal</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Uma esteira de produção otimizada para que você nunca mais se preocupe com prazos ou burocracias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="glass-card p-8 group hover:border-primary/20 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
              <span className="absolute -top-4 -right-2 text-7xl font-black text-white/[0.03] group-hover:text-primary/[0.05] transition-colors tabular-nums">
                {step.number}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <step.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button group"
          >
            Implementar esse fluxo no meu escritório
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
