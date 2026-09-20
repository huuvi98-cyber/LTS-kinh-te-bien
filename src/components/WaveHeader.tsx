import React from 'react';
import { Compass, Sparkles, Navigation } from 'lucide-react';

export const WaveHeader: React.FC = () => {
  return (
    <header className="mb-10 text-center font-sans-editorial">
      {/* Top micro badges */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-semibold text-slate-700 tracking-wide mb-5">
        <Compass className="w-3.5 h-3.5 text-cyan-700 animate-[spin_16s_linear_infinite]" />
        <span>HẢI TRÌNH VIỆT NAM • CHIẾN LƯỢC KINH TẾ BIỂN 2030 - 2045</span>
      </div>

      {/* Main Editorial Masthead */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-editorial font-black text-slate-900 tracking-tight mb-4 leading-[1.15]">
        Vươn Ra Biển Lớn
      </h1>

      <div className="flex items-center justify-center gap-3 text-slate-400 mb-4">
        <span className="h-px w-12 bg-slate-300" />
        <span className="text-xs uppercase tracking-widest font-sans-editorial font-bold text-cyan-800">
          Tuyến bài đặc biệt 5 kỳ
        </span>
        <span className="h-px w-12 bg-slate-300" />
      </div>

      <p className="font-serif-editorial text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto italic leading-relaxed">
        “Mạnh về biển, phát triển bền vững từ biển — Tìm lời giải từ thực tiễn và khát vọng khẳng định vị thế đất nước”
      </p>

      {/* Meta navigation info */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 font-sans-editorial border-t border-b border-slate-100 py-2.5 max-w-xl mx-auto">
        <div className="flex items-center gap-1.5">
          <Navigation className="w-3.5 h-3.5 text-cyan-600" />
          <span>Không gian biển Việt Nam</span>
        </div>
        <span className="text-slate-300">•</span>
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Kinh tế xanh & Đột phá thể chế</span>
        </div>
        <span className="text-slate-300">•</span>
        <div>TP. Hồ Chí Minh & Các tỉnh ven biển</div>
      </div>
    </header>
  );
};
