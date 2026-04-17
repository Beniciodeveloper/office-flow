import { MessageCircle, Mail } from "lucide-react";

const WA_NUMBER = "5571983753052";
const WA_MSG = encodeURIComponent("Olá, gostaria de obter mais informações sobre o Legal");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 px-4 md:px-6 bg-[#060608] border-t border-white/5">
      <div className="container-wide">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/L - Logo.png" alt="Legal" className="h-8 w-auto" />
              
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Potencializando escritórios contábeis através de inteligência operacional e desburocratização.
            </p>
            <div className="flex gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white/50" />
              </a>
              <a
                href="mailto:legal.rodrigosouza@gmail.com"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-4 h-4 text-white/50" />
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest">Contato</h4>
            <a
              href="mailto:legal.rodrigosouza@gmail.com"
              className="flex flex-col gap-0.5 group"
            >
              <span className="text-xs text-muted-foreground font-semibold">E-mail</span>
              <span className="text-sm text-white group-hover:text-primary transition-colors">
                legal.rodrigosouza@gmail.com
              </span>
            </a>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-muted-foreground font-semibold">Localização</span>
              <span className="text-sm text-white">Atendimento em todo o Brasil</span>
            </div>
          </div>

         
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Legal. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-xs font-semibold text-white/25">
            <a href="#" className="hover:text-white/60 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
