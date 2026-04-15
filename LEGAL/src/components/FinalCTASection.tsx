import { ArrowRight, MessageCircle, Sparkles, CheckCircle } from "lucide-react";

const benefits = [
  "Mais eficiência",
  "Mais agilidade",
  "Mais tranquilidade",
];

const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container-narrow text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Transforme seu escritório</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-foreground">
          Seu escritório merece mais{" "}
          <span className="text-primary">eficiência</span>.<br />
          Seus clientes merecem mais{" "}
          <span className="text-primary">agilidade</span>.<br />
          <span className="text-muted-foreground">E você merece respirar.</span>
        </h2>

        {/* Benefits pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border"
            >
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Value proposition */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          O <span className="font-semibold text-primary">Legal</span> está pronto para elevar o seu nível de entrega e fazer o que toma o seu tempo, com{" "}
          <span className="font-semibold text-foreground">qualidade, precisão e responsabilidade</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a 
            href="#" 
            className="cta-button text-lg md:text-xl w-full sm:w-auto group"
          >
            <span>Quero implementar o Legal no meu escritório</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-medium">Atendimento rápido pelo WhatsApp</span>
        </a>

        {/* Trust badges */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Resposta em minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span>Equipe especializada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
