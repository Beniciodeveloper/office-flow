import { ArrowRight, MessageCircle, Shield, Clock, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-office.jpg";

const HeroSection = () => {
  return (
    <section className="section-padding pt-24 md:pt-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl -z-10" />
      
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-8 animate-fade-up">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Parceiro operacional de escritórios contábeis</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6 animate-fade-up stagger-1 text-balance text-foreground">
              A sobrecarga de demandas legais pode estar{" "}
              <span className="text-primary relative">
                prejudicando
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="hsl(102, 62%, 45%)" strokeWidth="3" strokeLinecap="round" className="animate-draw" />
                </svg>
              </span>{" "}
              o crescimento do seu escritório
            </h1>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up stagger-2 leading-relaxed">
              O <span className="font-semibold text-primary">Legal</span> assume toda a burocracia de regularização, licenças, alvarás e trâmites jurídicos operacionais para você focar no estratégico e entregar mais valor.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-6 animate-fade-up stagger-3">
              <a href="#" className="cta-button text-base w-full sm:w-auto">
                Quero implementar o Legal
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#" className="cta-button-outline text-base w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground animate-fade-up stagger-4">
              ✓ Atendimento rápido &nbsp; ✓ Sem compromisso &nbsp; ✓ Resultados comprovados
            </p>
          </div>

          {/* Right: Image */}
          <div className="animate-fade-up stagger-3 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Escritório contábil organizado com documentos e licenças" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-lg border border-border animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">+40%</p>
                  <p className="text-xs text-muted-foreground">eficiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-16 animate-fade-up stagger-5">
          {[
            { icon: Clock, text: "Economia de tempo" },
            { icon: Shield, text: "Processos seguros" },
            { icon: TrendingUp, text: "Mais crescimento" },
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-5 py-3 bg-card rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
