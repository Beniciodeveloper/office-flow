import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary text-secondary-foreground">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold">Legal</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Soluções operacionais para escritórios contábeis. 
              Delegue a burocracia e foque no crescimento.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/70">
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>contato@legal.com.br</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Brasil</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-bold mb-4">Comece agora</h4>
            <p className="text-sm text-secondary-foreground/70 mb-4">
              Entre em contato e transforme seu escritório.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {new Date().getFullYear()} Legal. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-secondary-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
