import React from 'react';
import { Gift } from 'lucide-react';

export const HeaderNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#FFF8EC]/95 backdrop-blur-md border-b border-[#D7AA58]/20 transition-all">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-6">
        {/* Zone 1: Brand Wordmark (Compacto no celular) */}
        <a 
          href="#" 
          className="flex items-center gap-2 font-display font-extrabold text-sm sm:text-lg md:text-xl text-[#214D3A] tracking-tight whitespace-nowrap min-w-0 hover:text-[#A92E32] transition-colors"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#A92E32] flex items-center justify-center text-[#D7AA58] shadow-xs shrink-0">
            <Gift className="w-4 h-4" />
          </div>
          <span className="truncate">Minha Vila de Natal 3D</span>
        </a>

        {/* Zone 2: Nav Links no Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#79583E]">
          <a href="#resultado" className="hover:text-[#A92E32] transition-colors whitespace-nowrap">
            O Resultado
          </a>
          <a href="#como-funciona" className="hover:text-[#A92E32] transition-colors whitespace-nowrap">
            Como Funciona
          </a>
          <a href="#casinhas" className="hover:text-[#A92E32] transition-colors whitespace-nowrap">
            As 8 Casinhas
          </a>
          <a href="#bonus" className="hover:text-[#A92E32] transition-colors whitespace-nowrap">
            Bônus
          </a>
          <a href="#planos" className="hover:text-[#A92E32] transition-colors whitespace-nowrap">
            Planos
          </a>
          <a href="#faq" className="hover:text-[#A92E32] transition-colors whitespace-nowrap">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: Botão de Ação (Ajustado para evitar qualquer corte no mobile) */}
        <div className="flex items-center shrink-0">
          <a
            href="#planos"
            className="px-2.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-sm font-bold text-white bg-[#214D3A] hover:bg-[#173829] rounded-lg transition-colors whitespace-nowrap shadow-xs hover:shadow"
          >
            <span className="sm:hidden">Ver planos</span>
            <span className="hidden sm:inline">Quero Minha Vila</span>
          </a>
        </div>
      </div>
    </header>
  );
};
