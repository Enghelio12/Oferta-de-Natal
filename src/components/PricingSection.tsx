import React from 'react';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

interface PricingSectionProps {
  onSelectBasico: () => void;
  onSelectCompleto: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectBasico,
  onSelectCompleto,
}) => {
  const { basico, completo } = LANDING_CONFIG.pricing;

  return (
    <section id="planos" className="py-16 sm:py-24 bg-white border-y border-[#D7AA58]/20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[#A92E32] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Escolha seu Acesso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#214D3A] tracking-tight mb-4">
            Escolha a Melhor Opção Para Seu Natal
          </h2>
          <p className="text-[#79583E] text-base sm:text-lg leading-relaxed">
            Acesso digital imediato a todos os moldes e instruções para imprimir quantas vezes desejar.
          </p>
        </div>

        {/* Grade de Comparação de Preços */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Card: Plano Básico (R$ 10,00) */}
          <div className="bg-[#FFF8EC] rounded-3xl p-7 sm:p-9 border border-[#D7AA58]/40 shadow-sm flex flex-col justify-between relative hover:border-[#D7AA58] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#214D3A]/10 text-[#214D3A] text-xs font-bold uppercase tracking-wider">
                  {basico.name}
                </span>
                <span className="text-xs text-[#79583E] font-medium">Acesso Completo às Casinhas</span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#214D3A] mb-2 font-display">
                Vila Essencial
              </h3>
              <p className="text-xs sm:text-sm text-[#79583E] mb-6 leading-relaxed">
                {basico.headline}
              </p>

              {/* Preço Básico */}
              <div className="mb-6 pb-6 border-b border-[#D7AA58]/30">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-[#79583E]">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-[#214D3A] font-display tracking-tight">
                    {basico.price}
                  </span>
                  <span className="text-xs text-[#79583E] font-medium ml-1">/ pagamento único</span>
                </div>
                <p className="text-xs text-[#79583E] mt-1">
                  Sem mensalidades · Acesso vitalício aos PDFs
                </p>
              </div>

              {/* Lista de Itens do Básico */}
              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#214D3A]">
                {basico.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#214D3A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
                {basico.notIncluded?.map((item, idx) => (
                  <li key={`not-${idx}`} className="flex items-start gap-2.5 text-[#79583E]/70 line-through">
                    <X className="w-4 h-4 text-[#A92E32]/70 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão de Compra Básico -> Dispara o Popup de Upgrade */}
            <div>
              <button
                type="button"
                onClick={onSelectBasico}
                className="w-full py-4 px-6 rounded-xl font-extrabold text-sm sm:text-base text-[#214D3A] bg-white hover:bg-[#FFF8EC] border-2 border-[#214D3A] transition-all shadow-xs hover:shadow flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <span>QUERO O PLANO BÁSICO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-[#79583E] mt-2 font-medium">
                Edificações e guias de montagem (sem os bônus)
              </p>
            </div>
          </div>

          {/* Card: Plano Completo (R$ 29,90) — MAIS VANTAJOSO */}
          <div className="bg-gradient-to-b from-[#214D3A] to-[#173829] text-white rounded-3xl p-7 sm:p-9 border-2 border-[#D7AA58] shadow-xl flex flex-col justify-between relative transform lg:-translate-y-2">
            {/* Badge de Destaque Superior */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D7AA58] text-[#173829] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>OFERTA MAIS VANTAJOSA</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-[#D7AA58] text-xs font-bold uppercase tracking-wider">
                  {completo.name}
                </span>
                <span className="text-xs text-[#FFF8EC]/80 font-medium">Experiência Natalina Total</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-2 font-display">
                Vila Completa + 5 Bônus
              </h3>
              <p className="text-xs sm:text-sm text-[#FFF8EC]/90 mb-6 leading-relaxed">
                {completo.headline}
              </p>

              {/* Preço Completo */}
              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-white/60 line-through">De R$ {completo.originalPrice}</span>
                  <span className="text-[10px] bg-[#A92E32] text-white px-2 py-0.5 rounded font-bold">50% OFF</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-[#D7AA58]">R$</span>
                  <span className="text-4xl sm:text-5xl font-black text-white font-display tracking-tight">
                    {completo.price}
                  </span>
                  <span className="text-xs text-[#FFF8EC]/80 font-medium ml-1">/ pagamento único</span>
                </div>
                <p className="text-xs text-[#D7AA58] mt-1 font-semibold">
                  Melhor custo-benefício · Inclui todos os kits futuros
                </p>
              </div>

              {/* Lista de Itens do Completo */}
              <ul className="space-y-3 mb-8 text-xs sm:text-sm text-[#FFF8EC]">
                {completo.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#D7AA58] shrink-0 mt-0.5" />
                    <span className={item.includes('BÔNUS') ? 'font-bold text-[#D7AA58]' : ''}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Botão de Compra Completo -> Checkout Direto de R$ 29,90 */}
            <div>
              <button
                type="button"
                onClick={onSelectCompleto}
                className="w-full py-4 px-6 rounded-xl font-extrabold text-sm sm:text-base text-white bg-[#A92E32] hover:bg-[#942529] active:bg-[#7A1D20] border-2 border-[#D7AA58] transition-all shadow-lg hover:shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>QUERO O PLANO COMPLETO</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#FFF8EC]/80 mt-2 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D7AA58]" />
                <span>Garantia incondicional · Pagamento 100% seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
