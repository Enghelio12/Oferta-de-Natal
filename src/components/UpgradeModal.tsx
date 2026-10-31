import React, { useEffect } from 'react';
import { X, Sparkles, Check, ArrowRight, Gift, ShieldCheck } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAcceptUpgrade: () => void;
  onDeclineUpgrade: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
  onAcceptUpgrade,
  onDeclineUpgrade,
}) => {
  const { upgrade, completo } = LANDING_CONFIG.pricing;

  // Fechar com a tecla ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-[#D7AA58] overflow-hidden my-6 transform animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="upgrade-modal-title"
      >
        {/* Faixa Superior com Botão de Fechar */}
        <div className="bg-[#214D3A] text-white p-4 sm:p-5 text-center relative border-b border-[#D7AA58]/40">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#D7AA58] text-[#173829] text-[11px] font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Condição Especial de Upgrade</span>
          </div>

          <h3 id="upgrade-modal-title" className="text-xl sm:text-2xl font-extrabold font-display leading-tight text-white">
            Leve o Plano Completo por apenas{' '}
            <span className="text-[#D7AA58] underline decoration-2">R$ {upgrade.upgradePrice}!</span>
          </h3>

          <p className="text-xs sm:text-sm text-[#FFF8EC]/90 mt-1 max-w-md mx-auto">
            Por apenas R$ {upgrade.additionalCost} a mais do que o Plano Básico, você desbloqueia a experiência completa com todos os 5 bônus!
          </p>
        </div>

        {/* Corpo do Modal */}
        <div className="p-5 sm:p-7 bg-[#FFF8EC]">
          {/* Quadro Comparativo de Preço */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#D7AA58]/50 shadow-sm mb-5">
            <div className="grid grid-cols-2 gap-3 text-center pb-4 border-b border-[#D7AA58]/20">
              <div className="p-2 rounded-xl bg-neutral-50">
                <span className="text-[11px] text-[#79583E] block font-medium">Preço Normal do Completo</span>
                <span className="text-base sm:text-lg font-bold text-neutral-400 line-through">
                  R$ {upgrade.normalPrice}
                </span>
              </div>
              <div className="p-2 rounded-xl bg-[#214D3A]/5 border border-[#214D3A]/20">
                <span className="text-[11px] text-[#214D3A] block font-bold">Preço Nesta Janela</span>
                <span className="text-xl sm:text-2xl font-black text-[#A92E32] font-display">
                  R$ {upgrade.upgradePrice}
                </span>
              </div>
            </div>

            <div className="pt-3 text-center">
              <span className="inline-block px-3 py-1 rounded-md bg-[#214D3A] text-[#D7AA58] text-xs font-black uppercase tracking-wide">
                Você economiza R$ {upgrade.savings} no total!
              </span>
            </div>
          </div>

          {/* O que você leva no Upgrade */}
          <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-[#214D3A]">
            <p className="font-bold text-xs uppercase tracking-wider text-[#79583E] mb-2">
              Tudo o que você vai desbloquear:
            </p>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-[#214D3A] shrink-0 mt-0.5" />
              <span><strong>Coleção +30 Edificações:</strong> Arquivos A4 com guias de montagem</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#D7AA58] shrink-0 mt-0.5" />
              <span><strong>BÔNUS 01:</strong> 10 Anéis de Guardanapo Natalinos</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#D7AA58] shrink-0 mt-0.5" />
              <span><strong>BÔNUS 02:</strong> 20 Tags para Presentes 'De/Para'</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#D7AA58] shrink-0 mt-0.5" />
              <span><strong>BÔNUS 03:</strong> 10 Marcadores de Lugar para a Ceia</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#D7AA58] shrink-0 mt-0.5" />
              <span><strong>BÔNUS 04:</strong> 3 Modelos de Bandeirinhas 'Feliz Natal'</span>
            </div>
            <div className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-[#D7AA58] shrink-0 mt-0.5" />
              <span><strong>BÔNUS 05:</strong> 10 Cartões de Natal para Presentear</span>
            </div>
          </div>

          {/* Botão de Aceitar Upgrade */}
          <button
            type="button"
            onClick={onAcceptUpgrade}
            className="w-full py-4 px-6 rounded-xl font-extrabold text-sm sm:text-base text-white bg-[#A92E32] hover:bg-[#942529] active:bg-[#7A1D20] border-2 border-[#D7AA58] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] mb-3"
          >
            <Gift className="w-5 h-5 text-[#D7AA58]" />
            <span>SIM, QUERO O PLANO COMPLETO POR R$ {upgrade.upgradePrice}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Opção Visível para Recusar e Continuar com o Básico */}
          <div className="text-center">
            <button
              type="button"
              onClick={onDeclineUpgrade}
              className="text-xs text-[#79583E] hover:text-[#214D3A] underline decoration-1 hover:decoration-2 font-medium py-1 transition-all cursor-pointer inline-block"
            >
              Não, obrigado. Prefiro continuar apenas com o Plano Básico por R$ 10,00
            </button>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="bg-white px-5 py-3 border-t border-[#D7AA58]/20 flex items-center justify-center gap-2 text-[11px] text-[#79583E]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#214D3A]" />
          <span>Garantia incondicional · Acesso seguro e imediato</span>
        </div>
      </div>
    </div>
  );
};
