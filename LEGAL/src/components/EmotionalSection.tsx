import { Phone, Clock, Building2, AlertCircle, HeartHandshake } from "lucide-react";

const painPoints = [
  { icon: Phone, text: "Telefone tocando sem parar" },
  { icon: Clock, text: "Cliente cobrando prazo" },
  { icon: Building2, text: "Protocolo travado na prefeitura" },
  { icon: AlertCircle, text: "Órgão público sem retorno" },
];

const EmotionalSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent -z-10" />
      
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Pain points */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {painPoints.map((pain, index) => (
                <div 
                  key={index}
                  className="card-elevated flex flex-col items-center text-center p-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="icon-box mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <pain.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{pain.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Emotional text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 mb-6">
              <HeartHandshake className="w-4 h-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">Nós entendemos você</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-foreground">
              Você sabe como é a rotina de um{" "}
              <span className="text-primary">escritório contábil</span>
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Telefone tocando, cliente cobrando, protocolo travado, prefeitura sem retorno...
              </p>
               <p>
                E no fim do dia, o que realmente importa, como <span className="font-semibold text-foreground">estratégia, expansão e novos clientes</span>, fica sempre pra depois.
              </p>
              <p className="text-foreground font-medium pt-4 border-t border-border">
                O <span className="text-primary font-bold">Legal</span> existe pra aliviar o seu peso e devolver{" "}
                <span className="underline decoration-primary decoration-2 underline-offset-4">tempo, paz e qualidade</span> ao seu atendimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
