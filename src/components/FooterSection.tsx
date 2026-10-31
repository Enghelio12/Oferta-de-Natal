import React from 'react';
import { Gift, Shield } from 'lucide-react';

export const FooterSection: React.FC = () => {
  return (
    <footer className="bg-[#173829] text-[#FFF8EC]/70 text-xs py-12 border-t border-[#D7AA58]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          <div className="flex items-center gap-2 text-white font-display font-extrabold text-base">
            <div className="w-7 h-7 rounded-md bg-[#A92E32] flex items-center justify-center text-[#D7AA58]">
              <Gift className="w-4 h-4" />
            </div>
            <span>Minha Vila de Natal 3D</span>
          </div>

          <p className="text-xs text-[#FFF8EC]/60 max-w-md text-center md:text-right">
            Produto digital em formato PDF para impressão própria. As casinhas devem ser montadas pelo comprador seguindo os moldes e guias ilustrados fornecidos.
          </p>
        </div>

        <div className="pt-8 space-y-4 text-center text-[11px] leading-relaxed text-[#FFF8EC]/50 max-w-4xl mx-auto">
          <p>
            Copyright © {new Date().getFullYear()} — Minha Vila de Natal 3D. Todos os direitos reservados nos termos da Lei nº 9.610/98 (Lei de Direitos Autorais).
          </p>
          <p>
            É estritamente proibida a reprodução não autorizada, compartilhamento em massa, distribuição digital pública ou comercialização dos moldes sem expressa autorização por escrito dos detentores da obra.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 text-[#D7AA58]/80">
            <span>Privacidade & Termos</span>
            <span>·</span>
            <span>Acesso Digital Seguro</span>
            <span>·</span>
            <span>Suporte ao Cliente</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
