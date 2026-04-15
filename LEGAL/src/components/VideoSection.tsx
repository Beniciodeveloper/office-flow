import { Play, Sparkles } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container-narrow">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Veja como funciona</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Conheça o <span className="text-primary">Legal</span> em ação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assista ao vídeo e entenda como o Legal pode transformar a operação do seu escritório contábil
          </p>
        </div>

        {/* Video embed */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative border glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30 rounded-3xl blur-sm" />
          
          <div className="relative bg-card rounded-2xl overflow-hidden border border-border shadow-2xl">
            <div className="aspect-video">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dmxryzsgf&public_id=IMG_1446_dntfut&controls=true&autoplay=false"
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Vídeo explicativo sobre o Legal"
              />
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -bottom-4 -right-4 md:-right-8 bg-card rounded-xl p-4 border border-border shadow-lg animate-float hidden md:flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Simples e rápido</p>
              <p className="text-xs text-muted-foreground">Sem burocracia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
