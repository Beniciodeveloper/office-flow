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

const services = [
  { icon: FileText, text: "Assume aberturas, alterações, licenças e alvarás" },
  { icon: ClipboardCheck, text: "Gerencia prazos, protocolos e atualizações" },
  { icon: Building, text: "Resolve demandas com órgãos municipais e estaduais" },
  { icon: MessageSquare, text: "Mantém comunicação clara com o cliente final" },
  { icon: Zap, text: "Entrega processos mais rápidos e organizados" },
];

const steps = [
  { number: 1, icon: Send, title: "Você encaminha a demanda", description: "Envie pelo WhatsApp ou sistema" },
  { number: 2, icon: Settings, title: "O Legal assume o fluxo", description: "Cuidamos de todo o processo" },
  { number: 3, icon: Eye, title: "Acompanhamos do início ao fim", description: "Transparência total" },
  { number: 4, icon: Trophy, title: "Entrega com excelência", description: "Seu cliente satisfeito" },
];

const LogicalSection = () => {
  return (
    <section className="section-padding bg-muted/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-wide">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent mb-6">
            <ClipboardCheck className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Solução Completa</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            O que o Legal faz pelo seu escritório
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma solução completa para você delegar o operacional e focar no estratégico
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="icon-box-primary shrink-0 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-medium text-foreground">{service.text}</span>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Como funciona</h3>
            <p className="text-muted-foreground">Simples, rápido e sem burocracia para você</p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-background rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 step-badge group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  <div className="pt-4">
                    <div className="icon-box mb-4 group-hover:bg-primary transition-colors">
                      <step.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogicalSection;
