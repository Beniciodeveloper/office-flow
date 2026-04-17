import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const WA_NUMBER = "5571983753052";
const WA_MSG = encodeURIComponent("Olá, gostaria de obter mais informações");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container-narrow relative z-10 text-center">

        <div className="badge-premium inline-flex">
          <Sparkles className="w-3 h-3 shrink-0" />
          <span>Transformação operacional</span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
          Seu escritório merece{" "}
          <span className="text-primary italic">eficiência</span>.<br />
          Você merece{" "}
          <span className="underline decoration-primary decoration-2 underline-offset-4">liberdade</span>.
        </h2>

        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
          O <span className="text-white font-semibold">Legal</span> está pronto para elevar a entrega
          do seu escritório. Delegue o que trava o seu dia e foque no que constrói o seu futuro.
        </p>

        {/* Main CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="premium-button w-full sm:w-auto mb-6 group"
        >
          Quero implementar agora
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Trust bullets */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-muted-foreground">
          {["Sem taxas de setup", "Suporte VIP dedicado", "Especialistas técnicos"].map((t, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-primary" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
