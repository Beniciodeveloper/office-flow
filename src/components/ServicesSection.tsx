import { 
  FileText, 
  ClipboardCheck, 
  Building, 
  MessageSquare, 
  Zap,
  ArrowRight
} from "lucide-react";

const WA_NUMBER = "5571983750521";
const WA_MSG = encodeURIComponent("Olá, gostaria de obter mais informações sobre os serviços do Legal");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const services = [
  { icon: FileText,      text: "Assume aberturas, alterações, licenças e alvarás" },
  { icon: ClipboardCheck,text: "Gerencia prazos, protocolos e atualizações" },
  { icon: Building,      text: "Resolve demandas com órgãos municipais e estaduais" },
  { icon: MessageSquare, text: "Mantém comunicação clara com o cliente e com o líder da empresa" },
  { icon: Zap,           text: "Entrega processos mais rápidos e organizados" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="badge-premium inline-flex">
              <ClipboardCheck className="w-3 h-3 shrink-0" />
              <span>Solução de Ponta a Ponta</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6">
              O que o Legal faz pelo seu escritório
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              Delegue o operacional burocrático e foque em escalar seu negócio com segurança jurídica e administrativa. Nossa equipe especializada cuida de todo o fluxo.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button hidden lg:inline-flex group"
            >
              Consultar disponibilidade
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="space-y-3">
            {services.map((s, i) => (
              <div key={i} className="flex items-center gap-4 p-4 glass-card group hover:border-primary/20 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm md:text-base text-white/80 font-medium group-hover:text-white transition-colors">
                  {s.text}
                </span>
              </div>
            ))}
            <div className="pt-6 block lg:hidden">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-button w-full group"
              >
                Falar com especialista
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
