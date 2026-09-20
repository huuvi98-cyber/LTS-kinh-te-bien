import React, { useState } from 'react';
import { SERIES_PARTS, KEY_POLICY_DOCUMENTS } from '../data/seriesData';
import { SeriesPart } from '../types';
import { Fish, Waves, Anchor, Wind, Compass, ChevronRight, FileText, Sparkles } from 'lucide-react';

export const SeriesEpisodes: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<SeriesPart | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Fish':
        return <Fish className="w-5 h-5 text-cyan-700" />;
      case 'Waves':
        return <Waves className="w-5 h-5 text-sky-700" />;
      case 'Anchor':
        return <Anchor className="w-5 h-5 text-blue-700" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-teal-700" />;
      case 'Compass':
      default:
        return <Compass className="w-5 h-5 text-indigo-700" />;
    }
  };

  return (
    <section id="series-5-episodes" className="mt-14 space-y-8 font-sans-editorial">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-800 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-700" />
            Tuyến bài chuyên đề 5 kỳ
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900 tracking-tight">
            “Mạnh về biển, phát triển bền vững từ biển”
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          Lời giải thực tiễn từ bờ bãi địa phương tới trung tâm kết nối hàng hải quốc tế, mở lối quản trị tương lai.
        </p>
      </div>

      {/* Grid of 5 episodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERIES_PARTS.map((part) => {
          const isSelected = selectedPart?.id === part.id;

          return (
            <div
              key={part.id}
              id={`series-card-part-${part.id}`}
              onClick={() => setSelectedPart(isSelected ? null : part)}
              className={`group relative bg-white rounded-xl border p-5 cursor-pointer transition-all duration-200 hover:shadow-md ${
                isSelected
                  ? 'border-cyan-600 ring-2 ring-cyan-500/20 shadow-md'
                  : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              {/* Card top row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-bold tracking-wide">
                    {part.roman}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {part.pillar}
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 group-hover:bg-cyan-50 group-hover:border-cyan-100 transition-colors">
                  {getIcon(part.iconName)}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-serif-editorial font-bold text-slate-900 group-hover:text-cyan-900 transition-colors mb-1.5">
                {part.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 mb-4 leading-relaxed">
                {part.subtitle}
              </p>

              {/* Summary text */}
              <p className="text-xs text-slate-600 bg-slate-50/70 p-3 rounded-lg border border-slate-100 leading-relaxed mb-3">
                {part.summary}
              </p>

              {/* Tags / Highlights */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {part.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-block text-[11px] font-medium bg-white text-slate-600 px-2 py-0.5 rounded border border-slate-200"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Read hint */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-cyan-800 font-medium">
                <span>{isSelected ? 'Thu gọn' : 'Xem trọng tâm kỳ này'}</span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-cyan-700' : 'group-hover:translate-x-0.5'}`} />
              </div>
            </div>
          );
        })}

        {/* 6th Card: Institutional Vision card */}
        <div className="bg-gradient-to-br from-slate-50 via-white to-sky-50/30 rounded-xl border border-sky-200/60 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-900 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              Tầm nhìn thể chế biển
            </div>
            <h3 className="text-base font-serif-editorial font-bold text-slate-900 mb-2">
              Chuyển hóa tiềm năng thành sức mạnh kinh tế
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mục tiêu bao trùm là hiện thực hóa khát vọng phát triển, bảo đảm lợi ích của người dân ven biển và nâng tầm sức cạnh tranh của các doanh nghiệp Việt Nam trên hải trình thế giới.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-sky-100 text-xs text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Phát triển bền vững • Bảo vệ chủ quyền</span>
          </div>
        </div>
      </div>

      {/* Strategic Policies reference box */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
          <FileText className="w-4 h-4 text-cyan-700" />
          Căn cứ chiến lược được trích dẫn trong lời tòa soạn
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {KEY_POLICY_DOCUMENTS.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-4 border border-slate-200 shadow-2xs"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-bold text-sm text-cyan-950 font-sans-editorial">
                  {doc.code}
                </span>
                <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {doc.level}
                </span>
              </div>
              <h4 className="text-xs font-medium text-slate-800 mb-2 leading-snug">
                {doc.title}
              </h4>
              <p className="text-xs text-slate-500 italic border-l-2 border-cyan-600/40 pl-2 leading-relaxed">
                "{doc.coreGoal}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
