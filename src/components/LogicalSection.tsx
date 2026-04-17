import { 
  FileText, 
  ClipboardCheck, 
  Building, 
  MessageSquare, 
  Zap,
  ArrowRight,
  Send,
  Settings,
  Eye,
  Trophy
} from "lucide-react";

const WA_NUMBER = "5571983753052";
const WA_MSG = encodeURIComponent("Olá, gostaria de obter mais informações");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const services = [
  { icon: FileText,      text: "Assume aberturas, alterações, licenças e alvarás" },
  { icon: ClipboardCheck,text: "Gerencia prazos, protocolos e atualizações" },
  { icon: Building,      text: "Resolve demandas com órgãos municipais e estaduais" },
  { icon: MessageSquare, text: "Mantém comunicação clara com o cliente e com o líder da empresa" },
  { icon: Zap,           text: "Entrega processos mais rápidos e organizados" },
];

const steps = [
  { number: 1, icon: Send,     title: "Encaminha a demanda",    description: "Via WhatsApp ou sistema" },
  { number: 2, icon: Settings, title: "O Legal assume o fluxo", description: "Cuidamos de tudo" },
  { number: 3, icon: Eye,      title: "Acompanhamos do início ao fim", description: "Transparência total" },
  { number: 4, icon: Trophy,   title: "Entrega com excelência", description: "Seu cliente satisfeito" },
];

const LogicalSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">

        {/* ── Header ── */}
        <div className="mb-12">
          <div className="badge-premium inline-flex">
            <ClipboardCheck className="w-3 h-3 shrink-0" />
            <span>Solução de Ponta a Ponta</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            O que o Legal faz pelo seu escritório
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl">
            Delegue o operacional e foque em escalar o seu negócio.
          </p>
        </div>

        {/* ── Two-column ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12">
          {/* Services list */}
          <div className="space-y-3">
            {services.map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 glass-card group hover:border-primary/20 transition-all duration-200">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-200">
                  <s.icon className="w-4 h-4 text-primary group-hover:text-white" />
                </div>
                <span className="text-sm text-white/80 font-medium group-hover:text-white transition-colors">{s.text}</span>
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="glass-card p-5 group hover:border-primary/20 transition-all duration-200">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black text-white/10 group-hover:text-primary/30 transition-colors tabular-nums">
                    0{step.number}
                  </span>
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                      <step.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wide">{step.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section CTA ── */}
        <div className="glass-card p-6 md:p-8 border-primary/15 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Pronto para liberar o potencial do seu escritório?</h3>
            <p className="text-sm text-muted-foreground mt-1">Implementação rápida, sem burocracia.</p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="premium-button shrink-0 w-full sm:w-auto group"
          >
            Fale com um especialista
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogicalSection;
