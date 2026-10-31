import React from 'react';
import { ShieldCheck, Lock, RefreshCcw } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

export const WarrantySection: React.FC = () => {
  const { warranty } = LANDING_CONFIG;

  return (
    <section className="py-14 sm:py-20 bg-[#FFF8EC] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#D7AA58]/40 shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          {/* Selo Visual de Garantia */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#214D3A] text-[#D7AA58] flex flex-col items-center justify-center p-3 text-center shrink-0 border-2 border-[#D7AA58] shadow-md">
            <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 mb-1" />
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-white leading-tight">
              Garantia 100%
            </span>
            <span className="text-[9px] text-[#D7AA58] font-bold">Satisfação</span>
          </div>

          {/* Texto Oficial */}
          <div className="text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#214D3A]/10 text-[#214D3A] text-xs font-bold uppercase tracking-wider mb-2">
              <Lock className="w-3.5 h-3.5 text-[#D7AA58]" />
              <span>{warranty.badgeText}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#214D3A] mb-3">
              {warranty.title}
            </h2>
            <p className="text-sm text-[#79583E] leading-relaxed mb-4">
              {warranty.text}
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#214D3A] font-semibold">
              <span className="flex items-center gap-1">
                <RefreshCcw className="w-3.5 h-3.5 text-[#A92E32]" /> Reembolso Simplificado
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-[#A92E32]" /> Ambiente Criptografado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
