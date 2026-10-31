import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { LANDING_CONFIG, FaqItem } from '../config/landingConfig';

export const FaqSection: React.FC = () => {
  const { faq } = LANDING_CONFIG;
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-y border-[#D7AA58]/20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="w-10 h-10 rounded-full bg-[#214D3A]/10 text-[#214D3A] flex items-center justify-center mx-auto mb-3">
            <HelpCircle className="w-5 h-5 text-[#A92E32]" />
          </div>
          <span className="text-[#A92E32] font-bold text-xs sm:text-sm tracking-widest uppercase mb-1 block">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#214D3A] tracking-tight mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-[#79583E] text-sm sm:text-base">
            Tudo o que você precisa saber sobre a Minha Vila de Natal 3D antes de começar.
          </p>
        </div>

        {/* Acordeão do FAQ */}
        <div className="space-y-3.5">
          {faq.map((item: FaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FFF8EC] rounded-2xl border border-[#D7AA58]/35 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8F1E3] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-[#214D3A] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#D7AA58]/40 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#214D3A] text-white border-transparent' : 'text-[#79583E]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#79583E] leading-relaxed border-t border-[#D7AA58]/20 pt-3.5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
