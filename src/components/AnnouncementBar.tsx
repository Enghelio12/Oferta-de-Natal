import React from 'react';
import { Sparkles } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#A92E32] text-white py-1.5 px-3 text-center tracking-wide flex items-center justify-center gap-1.5 shadow-xs">
      <Sparkles className="w-3 h-3 text-[#D7AA58] shrink-0" />
      <span className="text-[11px] sm:text-xs font-bold leading-tight">
        <span className="sm:hidden">OFERTA DE NATAL · ACESSO IMEDIATO AOS MOLDES</span>
        <span className="hidden sm:inline">OFERTA ESPECIAL DE NATAL · ACESSO IMEDIATO AOS MOLDES DIGITAIS</span>
      </span>
      <Sparkles className="w-3 h-3 text-[#D7AA58] shrink-0 hidden xs:inline" />
    </div>
  );
};
