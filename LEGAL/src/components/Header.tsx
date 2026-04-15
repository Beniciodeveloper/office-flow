import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container-narrow flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-lg">L</span>
          </div>
          <span className="text-xl font-bold text-foreground">Legal</span>
        </div>
        
        {/* Desktop CTA */}
        <a 
          href="#" 
          className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
        >
          Falar no WhatsApp
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-card border-b border-border p-4 animate-fade-in">
          <a 
            href="#" 
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-sm"
          >
            Falar no WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
