import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

export const BonusesSection: React.FC = () => {
  const { bonuses } = LANDING_CONFIG;

  const handleScrollToPlans = (e: React.MouseEvent) => {
    e.preventDefault();
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Enquadramento individual para destacar o produto de cada mockup
  const getImagePosition = (id: number) => {
    switch (id) {
      case 1:
        return 'object-[center_35%]'; // Foco nos anéis de guardanapo
      case 2:
        return 'object-center'; // Foco nas tags de presentes
      case 3:
        return 'object-[center_60%]'; // Foco nos cartões marcadores de lugar
      case 4:
        return 'object-[center_45%]'; // Foco nas bandeirinhas Feliz Natal
      case 5:
        return 'object-[center_45%]'; // Foco nos cartões abertos
      default:
        return 'object-center';
    }
  };

  return (
    <section id="bonus" className="pt-7 pb-10 sm:pt-9 sm:pb-14 bg-[#FFF8EC] border-y border-[#D7AA58]/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* CABEÇALHO DA SEÇÃO (8PX ENTRE TEXTOS E 16PX ATÉ O PRIMEIRO CARD) */}
        <div className="text-center max-w-xl mx-auto mb-4">
          <h2 className="text-[24px] sm:text-3xl font-black text-[#214D3A] tracking-tight leading-[1.2] font-display text-balance mb-2">
            🎁 Ganhe estes bônus inteiramente{' '}
            <span className="text-[#A92E32]">GRÁTIS!</span>
          </h2>
          <p className="text-[14px] sm:text-base text-[#79583E] leading-relaxed text-balance font-medium">
            5 kits natalinos com valor total estimado de <strong className="font-bold text-[#2D2A26]">R$49,50</strong>, sem custo adicional.
          </p>
        </div>

        {/* LISTA VERTICAL DE 5 CARDS COMPACTOS (12PX ENTRE CARDS) */}
        <div className="max-w-[640px] mx-auto flex flex-col gap-3">
          {bonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="w-full bg-white rounded-2xl border border-[#D7AA58]/40 shadow-xs overflow-hidden flex flex-col transition-shadow hover:shadow-sm"
            >
              {/* 1. IMAGEM COM ALTURA COMPACTA (~125PX NO MOBILE) */}
              <div className="w-full h-[125px] sm:h-[160px] relative overflow-hidden bg-[#FFF8EC]">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={448}
                  className={`w-full h-full object-cover ${getImagePosition(bonus.id)}`}
                />
                
                {/* 2. ETIQUETA CENTRALIZADA SOBRE A IMAGEM */}
                <div className="absolute top-2.5 inset-x-0 flex justify-center pointer-events-none">
                  <span className="bg-[#A92E32] text-white px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xs select-none text-center whitespace-nowrap pointer-events-auto">
                    {bonus.tag}
                  </span>
                </div>
              </div>

              {/* CORPO DO CARD 100% CENTRALIZADO */}
              <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-center items-center text-center w-full">
                {/* 3. TÍTULO CENTRALIZADO (18PX, ENTRELINHA 1.2, 6PX DE ESPAÇAMENTO) */}
                <h3 className="font-serif font-black text-[18px] text-[#214D3A] leading-[1.2] mb-[6px] text-center w-full">
                  {bonus.title}
                </h3>

                {/* 4. DESCRIÇÃO CENTRALIZADA (14PX, ENTRELINHA 1.4) */}
                <p className="font-sans text-[14px] text-[#79583E] leading-[1.4] text-center w-full max-w-md mx-auto">
                  {bonus.description}
                </p>
              </div>

              {/* 5. FAIXA DE VALOR CENTRALIZADA EM TRÊS LINHAS */}
              <div className="bg-[#EBF7EE] border-t border-[#D7AA58]/20 py-[10px] px-3 flex flex-col items-center justify-center gap-1 text-center">
                {/* Linha 1: “VALOR ESTIMADO” (ou “DE” se confirmado) — 11 px */}
                <span className="text-[11px] leading-none text-[#52796F] font-bold uppercase tracking-wider block">
                  {bonus.confirmedSalePrice ? 'DE' : 'VALOR ESTIMADO'}
                </span>

                {/* Linha 2: “R$9,90” — 20 px (com line-through apenas se venda avulsa confirmada) */}
                <span
                  className={`text-[20px] font-black font-display leading-none block ${
                    bonus.confirmedSalePrice ? 'text-[#79583E] line-through' : 'text-[#214D3A]'
                  }`}
                >
                  R${bonus.confirmedSalePrice || bonus.estimatedPrice}
                </span>

                {/* Linha 3: “GRÁTIS” — 28 px, negrito, verde-escuro (nunca riscado) */}
                <span className="text-[28px] font-black text-[#1B4D2E] font-display leading-none block">
                  GRÁTIS
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FECHAMENTO DA SEÇÃO SIMPLIFICADO */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#D7AA58]/40 shadow-xs text-center max-w-[640px] mx-auto flex flex-col items-center">
          {/* 1. Valor R$49,50 riscado, em cinza e com fonte de 22 px */}
          <span className="text-[22px] font-bold text-neutral-400 line-through leading-none mb-[10px] block select-none">
            R$49,50
          </span>

          {/* 2. Botão verde com o texto exato: QUERO TODOS OS BÔNUS */}
          <a
            href="#planos"
            onClick={handleScrollToPlans}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-black text-white bg-[#25A244] hover:bg-[#1E8A38] active:bg-[#16702D] shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <span>QUERO TODOS OS BÔNUS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
