import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const WA_NUMBER = "5571983753052";
const WA_MSG = encodeURIComponent("Olá, gostaria de obter mais informações");
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Light frosted backdrop so the dark-green logo is visible */}
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div
          className="
            mt-4 rounded-2xl flex items-center justify-between h-16 px-5
            bg-[#f5f5f0]/90 backdrop-blur-lg
            border border-black/5 shadow-lg
          "
        >
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/legal - Logo.png"
              alt="Legal Logo"
              className="h-9 w-auto hover:opacity-80 transition-opacity"
            />
          </a>

          {/* Desktop CTA */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                       bg-primary text-white shadow-[0_2px_12px_rgba(80,180,50,0.35)]
                       hover:shadow-[0_4px_18px_rgba(80,180,50,0.5)] hover:-translate-y-0.5
                       transition-all duration-200 group"
          >
            Fale com nossa equipe
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-black/5 transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-[#f5f5f0]/95 backdrop-blur-lg border border-black/5 shadow-lg p-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                         bg-primary text-white text-sm font-semibold group"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale com nossa equipe
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
