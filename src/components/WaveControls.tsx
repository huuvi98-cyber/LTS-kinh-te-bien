import React, { useState } from 'react';
import { WaveIntensity, WaveSpeed } from '../types';
import { oceanAudio } from '../utils/oceanAudio';
import { Volume2, VolumeX, Copy, Check, Waves, Play, Pause, ZoomIn, ZoomOut } from 'lucide-react';
import { EDITORIAL_RAW_TEXT } from '../data/seriesData';

interface WaveControlsProps {
  intensity: WaveIntensity;
  setIntensity: (val: WaveIntensity) => void;
  speed: WaveSpeed;
  setSpeed: (val: WaveSpeed) => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (val: 'normal' | 'large' | 'xlarge') => void;
}

export const WaveControls: React.FC<WaveControlsProps> = ({
  intensity,
  setIntensity,
  speed,
  setSpeed,
  fontSize,
  setFontSize,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleOceanAudio = async () => {
    if (isPlayingAudio) {
      oceanAudio.stop();
      setIsPlayingAudio(false);
    } else {
      const ok = await oceanAudio.start();
      if (ok) {
        setIsPlayingAudio(true);
      }
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(EDITORIAL_RAW_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div
      id="wave-controls-panel"
      className="bg-white/95 backdrop-blur-sm border border-slate-200/80 rounded-2xl shadow-sm p-4 sm:p-5 font-sans-editorial transition-all"
    >
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Wave Intensity Presets */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mr-1">
            <Waves className="w-3.5 h-3.5 text-cyan-600" />
            Nhịp sóng:
          </span>

          <div className="inline-flex rounded-xl p-1 bg-slate-100 border border-slate-200/70 text-xs">
            <button
              id="wave-intensity-gentle"
              onClick={() => setIntensity('gentle')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                intensity === 'gentle'
                  ? 'bg-white text-cyan-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Êm dịu (chuẩn)
            </button>
            <button
              id="wave-intensity-subtle"
              onClick={() => setIntensity('subtle')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                intensity === 'subtle'
                  ? 'bg-white text-cyan-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lăn tăn
            </button>
            <button
              id="wave-intensity-moderate"
              onClick={() => setIntensity('moderate')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                intensity === 'moderate'
                  ? 'bg-white text-cyan-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dập dềnh
            </button>
            <button
              id="wave-intensity-static"
              onClick={() => setIntensity('static')}
              className={`px-2.5 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all ${
                intensity === 'static'
                  ? 'bg-white text-rose-700 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {intensity === 'static' ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              Đứng yên
            </button>
          </div>
        </div>

        {/* Speed & Audio & Font controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Speed selector */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400 mr-1 text-[11px]">Tốc độ:</span>
            {(['slow', 'normal', 'fast'] as WaveSpeed[]).map((s) => (
              <button
                key={s}
                onClick={() => setSpeed(s)}
                className={`px-2.5 py-1 rounded-md text-xs transition-colors ${
                  speed === s
                    ? 'bg-slate-900 text-white font-medium'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s === 'slow' ? 'Chậm' : s === 'normal' ? 'Vừa' : 'Nhanh'}
              </button>
            ))}
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          {/* Text Size */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5 border border-slate-200/60">
            <button
              id="font-size-decrease"
              title="Thu nhỏ cỡ chữ"
              onClick={() => {
                if (fontSize === 'xlarge') setFontSize('large');
                else if (fontSize === 'large') setFontSize('normal');
              }}
              disabled={fontSize === 'normal'}
              className="p-1.5 rounded text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-600"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-semibold text-slate-600 px-1 min-w-[20px] text-center">
              {fontSize === 'normal' ? '1x' : fontSize === 'large' ? '1.2x' : '1.4x'}
            </span>
            <button
              id="font-size-increase"
              title="Phóng to cỡ chữ"
              onClick={() => {
                if (fontSize === 'normal') setFontSize('large');
                else if (fontSize === 'large') setFontSize('xlarge');
              }}
              disabled={fontSize === 'xlarge'}
              className="p-1.5 rounded text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:hover:text-slate-600"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          {/* Ocean Ambient Sound Synthesizer */}
          <button
            id="toggle-ocean-sound"
            onClick={toggleOceanAudio}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isPlayingAudio
                ? 'bg-cyan-600 text-white shadow-xs animate-pulse'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
            title={isPlayingAudio ? 'Tắt tiếng sóng biển' : 'Bật tiếng sóng biển thư giãn'}
          >
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
            <span>{isPlayingAudio ? 'Sóng biển đang phát' : 'Âm thanh sóng biển'}</span>
          </button>

          {/* Copy Full Text */}
          <button
            id="copy-editorial-text"
            onClick={handleCopyText}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              copied
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Đã sao chép</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Sao chép chữ</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
