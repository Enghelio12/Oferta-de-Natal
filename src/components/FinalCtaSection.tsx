import React from 'react';
import { ArrowRight, Sparkles, Gift } from 'lucide-react';

interface FinalCtaSectionProps {
  onCtaClick?: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onCtaClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCtaClick) {
      onCtaClick();
      return;
    }
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#214D3A] to-[#173829] text-white relative overflow-hidden">
      {/* Detalhe de iluminação festiva */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(215,170,88,0.15),_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#D7AA58] text-xs font-bold uppercase tracking-wider mb-5 border border-white/15">
          <Sparkles className="w-4 h-4" />
          <span>Neste Natal, crie algo verdadeiramente inesquecível</span>
          <Sparkles className="w-4 h-4" />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-tight mb-5 max-w-3xl mx-auto">
          Dê Vida à Sua Própria Vila de Natal 3D e Surpreenda Quem Você Ama!
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#FFF8EC]/90 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Receba os moldes agora mesmo, imprima no conforto da sua casa e prepare-se para viver momentos de pura magia e alegria neste fim de ano.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#planos"
            onClick={handleClick}
            className="w-full sm:w-auto px-8 py-4 sm:py-5 text-base sm:text-lg font-extrabold text-white bg-[#A92E32] hover:bg-[#942529] active:bg-[#7A1D20] rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#D7AA58] flex items-center justify-center gap-3 cursor-pointer"
          >
            <Gift className="w-5 h-5 text-[#D7AA58]" />
            <span>QUERO MONTAR MINHA VILA DE NATAL</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-[#FFF8EC]/70 mt-4">
          Acesso digital imediato · Arquivos em PDF de alta qualidade · 24 páginas A4
        </p>
      </div>
    </section>
  );
};
