import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { LANDING_CONFIG } from '../config/landingConfig';

export const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { videoUrl, posterUrl, title } = LANDING_CONFIG.video;

  // Função para identificar e formatar URL de embed (YouTube, Vimeo, Panda, VTurb, etc.)
  const getEmbedInfo = (url: string) => {
    if (!url) return { isEmbed: false, src: '' };

    // YouTube (Shorts, Watch ou Embed)
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|watch\?.+&v=))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return {
        isEmbed: true,
        src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0&modestbranding=1`,
      };
    }

    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
      return {
        isEmbed: true,
        src: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
      };
    }

    // Já é um link de embed ou iframe genérico (Panda, VTurb, etc.)
    if (url.includes('/embed/') || url.includes('player.') || url.includes('iframe.')) {
      const separator = url.includes('?') ? '&' : '?';
      return {
        isEmbed: true,
        src: `${url}${separator}autoplay=1`,
      };
    }

    // Caso padrão: arquivo direto de vídeo (mp4, webm, etc.)
    return { isEmbed: false, src: url };
  };

  const embedInfo = getEmbedInfo(videoUrl);

  const startPlayback = () => {
    setIsPlaying(true);
    setHasStarted(true);
    if (!embedInfo.isEmbed && videoRef.current) {
      videoRef.current.play().catch((err) => console.warn('Play prevented:', err));
    }
  };

  const togglePlay = () => {
    if (embedInfo.isEmbed) return;
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Play prevented:', err);
      });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullScreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div className="w-[240px] sm:w-[300px] max-w-[calc(100vw-32px)] mx-auto flex flex-col items-center">
      {/* Container vertical formato 9:16 (Reels/Shorts) */}
      <div 
        className="relative aspect-[9/16] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-[#173829] border-2 border-[#D7AA58]/50 group cursor-pointer"
        onClick={!hasStarted ? startPlayback : (!embedInfo.isEmbed ? togglePlay : undefined)}
      >
        {/* Caso 1: Embed (YouTube / Vimeo / Panda / VTurb) após o clique */}
        {hasStarted && embedInfo.isEmbed ? (
          <iframe
            src={embedInfo.src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : (
          /* Caso 2: Vídeo HTML5 (MP4) */
          <video
            ref={videoRef}
            src={embedInfo.src}
            poster={posterUrl}
            preload="metadata"
            playsInline
            muted={isMuted}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />
        )}

        {/* Capa com Botão Central de Play (antes do início) */}
        {!hasStarted && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex flex-col items-center justify-center p-3 transition-all group-hover:bg-black/20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                startPlayback();
              }}
              aria-label="Reproduzir vídeo"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#A92E32] hover:bg-[#942529] text-white flex items-center justify-center shadow-xl transform group-hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-[#D7AA58] cursor-pointer"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current translate-x-0.5 text-white" />
            </button>

            <p className="mt-3 text-white text-[11px] sm:text-xs font-semibold tracking-wide drop-shadow-md bg-black/50 px-3 py-1 rounded-full border border-white/10 text-center">
              Assistir demonstração
            </p>
          </div>
        )}

        {/* Controles para arquivo MP4 nativo em reprodução */}
        {hasStarted && !embedInfo.isEmbed && (
          <div 
            className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2.5 sm:p-3 flex items-center justify-between transition-opacity duration-300 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current translate-x-0.5" />}
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
                className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

            <button
              type="button"
              onClick={toggleFullScreen}
              aria-label="Tela cheia"
              className="w-8 h-8 rounded-lg bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
