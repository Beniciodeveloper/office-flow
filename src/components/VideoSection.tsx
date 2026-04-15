import { Play, Sparkles } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container-narrow">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="badge-premium inline-flex">
            <Play className="w-3 h-3 shrink-0" />
            <span>Demonstração ao vivo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Conheça o <span className="text-primary italic">Legal</span> em ação
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
            Veja como transformamos a gestão de demandas do seu escritório.
          </p>
        </div>

        {/* Video */}
        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute -inset-px bg-gradient-to-r from-primary/20 via-transparent to-primary/20
                          rounded-2xl opacity-40 group-hover:opacity-80 blur-md transition-opacity duration-500" />
          <div className="relative glass-card p-2 overflow-hidden">
            <div className="rounded-xl overflow-hidden aspect-video bg-black">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dmxryzsgf&public_id=IMG_1446_dntfut&controls=true&autoplay=false"
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Vídeo explicativo sobre o Legal"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="absolute -bottom-5 -right-3 md:-right-5 glass-card px-4 py-3 animate-float hidden md:flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-black text-white uppercase tracking-wider">Simples e ágil</p>
              <p className="text-[10px] text-primary font-semibold">Sem burocracia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
