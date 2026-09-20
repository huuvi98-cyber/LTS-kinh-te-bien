import React, { useEffect, useRef, useState } from 'react';
import { WaveIntensity, WaveSpeed } from '../types';
import { Pen } from 'lucide-react';

interface WavingTextProps {
  intensity: WaveIntensity;
  speed: WaveSpeed;
  fontSize: 'normal' | 'large' | 'xlarge';
  onWordHover?: (word: string) => void;
}

export const WavingText: React.FC<WavingTextProps> = ({
  intensity,
  speed,
  fontSize,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const endWordTextRef = useRef<HTMLSpanElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const animIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(performance.now());
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [lineWidth, setLineWidth] = useState<number>(360);
  const [animKey, setAnimKey] = useState<number>(0);

  // Speed multiplier - relaxed, calm wave frequency
  const speedFactor = speed === 'slow' ? 0.0012 : speed === 'fast' ? 0.0028 : 0.0018;

  // Max amplitude in pixels - ultra-gentle whisper motion ("động nhẹ hơn nữa")
  const maxAmplitude =
    intensity === 'static'
      ? 0
      : intensity === 'subtle'
      ? 0.6
      : intensity === 'gentle'
      ? 1.1
      : 1.8;

  // Text structured into words, ONLY bolding: Tuyến bài: “Mạnh về biển, phát triển bền vững từ biển” (5 kỳ)
  const rawSegments = [
    { text: 'LTS:', isLts: true, bold: false },
    { text: 'Vươn', bold: false },
    { text: 'ra', bold: false },
    { text: 'biển', bold: false },
    { text: 'lớn', bold: false },
    { text: 'là', bold: false },
    { text: 'khát', bold: false },
    { text: 'vọng', bold: false },
    { text: 'phát', bold: false },
    { text: 'triển', bold: false },
    { text: 'và', bold: false },
    { text: 'khẳng', bold: false },
    { text: 'định', bold: false },
    { text: 'vị', bold: false },
    { text: 'thế', bold: false },
    { text: 'Việt', bold: false },
    { text: 'Nam.', bold: false },
    { text: 'Khát', bold: false },
    { text: 'vọng', bold: false },
    { text: 'ấy', bold: false },
    { text: 'đòi', bold: false },
    { text: 'hỏi', bold: false },
    { text: 'năng', bold: false },
    { text: 'lực', bold: false },
    { text: 'tổ', bold: false },
    { text: 'chức', bold: false },
    { text: 'không', bold: false },
    { text: 'gian', bold: false },
    { text: 'biển,', bold: false },
    { text: 'làm', bold: false },
    { text: 'chủ', bold: false },
    { text: 'công', bold: false },
    { text: 'nghệ,', bold: false },
    { text: 'kết', bold: false },
    { text: 'nối', bold: false },
    { text: 'thương', bold: false },
    { text: 'mại', bold: false },
    { text: 'toàn', bold: false },
    { text: 'cầu,', bold: false },
    { text: 'đồng', bold: false },
    { text: 'thời', bold: false },
    { text: 'gìn', bold: false },
    { text: 'giữ', bold: false },
    { text: 'tài', bold: false },
    { text: 'nguyên', bold: false },
    { text: 'và', bold: false },
    { text: 'bảo', bold: false },
    { text: 'vệ', bold: false },
    { text: 'vững', bold: false },
    { text: 'chắc', bold: false },
    { text: 'chủ', bold: false },
    { text: 'quyền', bold: false },
    { text: 'biển,', bold: false },
    { text: 'đảo.', bold: false },
    { text: 'Nghị', bold: false },
    { text: 'quyết', bold: false },
    { text: '20-NQ/TW', bold: false },
    { text: 'về', bold: false },
    { text: 'xây', bold: false },
    { text: 'dựng', bold: false },
    { text: 'và', bold: false },
    { text: 'phát', bold: false },
    { text: 'triển', bold: false },
    { text: 'Việt', bold: false },
    { text: 'Nam', bold: false },
    { text: 'trở', bold: false },
    { text: 'thành', bold: false },
    { text: 'quốc', bold: false },
    { text: 'gia', bold: false },
    { text: 'biển', bold: false },
    { text: 'mạnh', bold: false },
    { text: 'xác', bold: false },
    { text: 'lập', bold: false },
    { text: 'tầm', bold: false },
    { text: 'nhìn', bold: false },
    { text: 'chiến', bold: false },
    { text: 'lược;', bold: false },
    { text: 'Nghị', bold: false },
    { text: 'quyết', bold: false },
    { text: '218/NQ-CP', bold: false },
    { text: 'ban', bold: false },
    { text: 'hành', bold: false },
    { text: 'Chương', bold: false },
    { text: 'trình', bold: false },
    { text: 'hành', bold: false },
    { text: 'động', bold: false },
    { text: 'của', bold: false },
    { text: 'Chính', bold: false },
    { text: 'phủ', bold: false },
    { text: 'để', bold: false },
    { text: 'hiện', bold: false },
    { text: 'thực', bold: false },
    { text: 'hóa', bold: false },
    { text: 'tầm', bold: false },
    { text: 'nhìn', bold: false },
    { text: 'ấy.', bold: false },
    { text: 'Yêu', bold: false },
    { text: 'cầu', bold: false },
    { text: 'đặt', bold: false },
    { text: 'ra', bold: false },
    { text: 'là', bold: false },
    { text: 'chuyển', bold: false },
    { text: 'lợi', bold: false },
    { text: 'thế', bold: false },
    { text: 'biển', bold: false },
    { text: 'thành', bold: false },
    { text: 'sức', bold: false },
    { text: 'mạnh', bold: false },
    { text: 'kinh', bold: false },
    { text: 'tế,', bold: false },
    { text: 'tạo', bold: false },
    { text: 'cơ', bold: false },
    { text: 'hội', bold: false },
    { text: 'để', bold: false },
    { text: 'người', bold: false },
    { text: 'dân', bold: false },
    { text: 'và', bold: false },
    { text: 'doanh', bold: false },
    { text: 'nghiệp', bold: false },
    { text: 'làm', bold: false },
    { text: 'giàu', bold: false },
    { text: 'bền', bold: false },
    { text: 'vững.', bold: false },
    { text: 'Tuyến', bold: true },
    { text: 'bài:', bold: true },
    { text: '“Mạnh', bold: true },
    { text: 'về', bold: true },
    { text: 'biển,', bold: true },
    { text: 'phát', bold: true },
    { text: 'triển', bold: true },
    { text: 'bền', bold: true },
    { text: 'vững', bold: true },
    { text: 'từ', bold: true },
    { text: 'biển”', bold: true },
    { text: '(5', bold: true },
    { text: 'kỳ)', bold: true },
    { text: 'tìm', bold: false },
    { text: 'lời', bold: false },
    { text: 'giải', bold: false },
    { text: 'từ', bold: false },
    { text: 'thực', bold: false },
    { text: 'tiễn:', bold: false },
    { text: 'nâng', bold: false },
    { text: 'giá', bold: false },
    { text: 'trị', bold: false },
    { text: 'sản', bold: false },
    { text: 'vật,', bold: false },
    { text: 'hiện', bold: false },
    { text: 'đại', bold: false },
    { text: 'hóa', bold: false },
    { text: 'nuôi', bold: false },
    { text: 'biển,', bold: false },
    { text: 'phát', bold: false },
    { text: 'triển', bold: false },
    { text: 'hệ', bold: false },
    { text: 'sinh', bold: false },
    { text: 'thái', bold: false },
    { text: 'công', bold: false },
    { text: 'nghiệp,', bold: false },
    { text: 'cảng', bold: false },
    { text: 'biển,', bold: false },
    { text: 'năng', bold: false },
    { text: 'lượng', bold: false },
    { text: 'sạch', bold: false },
    { text: 'và', bold: false },
    { text: 'bảo', bold: false },
    { text: 'tồn.', bold: false },
    { text: 'Từ', bold: false },
    { text: 'các', bold: false },
    { text: 'địa', bold: false },
    { text: 'phương', bold: false },
    { text: 'ven', bold: false },
    { text: 'biển', bold: false },
    { text: 'đến', bold: false },
    { text: 'triển', bold: false },
    { text: 'vọng', bold: false },
    { text: 'trung', bold: false },
    { text: 'tâm', bold: false },
    { text: 'hàng', bold: false },
    { text: 'hải', bold: false },
    { text: 'quốc', bold: false },
    { text: 'tế', bold: false },
    { text: 'tại', bold: false },
    { text: 'TPHCM,', bold: false },
    { text: 'tuyến', bold: false },
    { text: 'bài', bold: false },
    { text: 'gợi', bold: false },
    { text: 'mở', bold: false },
    { text: 'những', bold: false },
    { text: 'lựa', bold: false },
    { text: 'chọn', bold: false },
    { text: 'về', bold: false },
    { text: 'thể', bold: false },
    { text: 'chế', bold: false },
    { text: 'và', bold: false },
    { text: 'quản', bold: false },
    { text: 'trị', bold: false },
    { text: 'để', bold: false },
    { text: 'Việt', bold: false },
    { text: 'Nam', bold: false },
    { text: 'vươn', bold: false },
    { text: 'tầm', bold: false },
    { text: 'từ', bold: false },
    { text: 'biển.', bold: false, isEnd: true }
  ];

  // Continuous gentle wave animation using requestAnimationFrame
  useEffect(() => {
    if (maxAmplitude === 0) {
      // Reset transforms
      wordRefs.current.forEach((el) => {
        if (el) {
          el.style.transform = 'translate3d(0, 0, 0)';
        }
      });
      return;
    }

    const animate = (timestamp: number) => {
      const elapsed = (timestamp - startTimeRef.current) * speedFactor;

      wordRefs.current.forEach((el, index) => {
        if (!el) return;

        // Spatial wavelength parameter - wave crest passes every ~14 words
        const waveSpatialPhase = index * 0.24;
        
        // Harmonic ocean wave function: primary swell + subtle micro-ripple
        const primaryWave = Math.sin(elapsed - waveSpatialPhase);
        const secondaryWave = 0.2 * Math.sin(elapsed * 1.3 - waveSpatialPhase * 1.8);
        const combinedWave = (primaryWave + secondaryWave) / 1.2;

        // Wave elevation in pixels (whisper-soft 1px motion)
        const yOffset = combinedWave * maxAmplitude;

        // Extra delicate hover boost
        const isHovered = hoveredIdx === index;
        const extraLift = isHovered ? -1.0 : 0;

        el.style.transform = `translate3d(0px, ${(yOffset + extraLift).toFixed(2)}px, 0px)`;
      });

      animIdRef.current = requestAnimationFrame(animate);
    };

    animIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
      }
    };
  }, [maxAmplitude, speedFactor, hoveredIdx]);

  // Dynamically calculate the exact remaining width on the last line to reach the right margin of the paragraph
  useEffect(() => {
    const updateLineWidth = () => {
      if (paragraphRef.current && endWordTextRef.current) {
        const pRect = paragraphRef.current.getBoundingClientRect();
        const wordRect = endWordTextRef.current.getBoundingClientRect();
        // Distance from the end of word "biển." to the right edge of the text paragraph
        // minus 10px margin and 16px pen width, so the pen tip reaches the right boundary exactly
        const available = pRect.right - wordRect.right - 10 - 16;
        setLineWidth(Math.max(60, Math.floor(available)));
      }
    };

    // Calculate immediately and also after next frame when layout stabilizes
    updateLineWidth();
    const frameId = requestAnimationFrame(updateLineWidth);
    const ro = new ResizeObserver(updateLineWidth);
    if (paragraphRef.current) ro.observe(paragraphRef.current);
    window.addEventListener('resize', updateLineWidth);

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      window.removeEventListener('resize', updateLineWidth);
    };
  }, [fontSize]);

  const handleReplayDraw = () => {
    setAnimKey((prev) => prev + 1);
  };

  // Typography size class mapping - slightly smaller font ("chữ nhỏ hơn xíu") and balanced line spacing
  const sizeClasses = {
    normal: 'text-[14.5px] sm:text-[15.5px] md:text-[16.5px] lg:text-[1.08rem] leading-[1.58] sm:leading-[1.62] md:leading-[1.66]',
    large: 'text-base sm:text-lg md:text-xl lg:text-[1.22rem] leading-[1.6] sm:leading-[1.64] md:leading-[1.68]',
    xlarge: 'text-lg sm:text-xl md:text-2xl lg:text-[1.38rem] leading-[1.62] sm:leading-[1.66] md:leading-[1.7]'
  };

  return (
    <div
      ref={containerRef}
      id="editorial-waving-text-container"
      className="w-full max-w-[700px] mx-auto bg-white select-text"
    >
      {/* Main waving paragraph with clean sans-serif chân phương, 700px width and left alignment */}
      <p
        ref={paragraphRef}
        className={`font-sans-editorial text-slate-800 tracking-normal ${sizeClasses[fontSize]} text-left`}
        style={{
          textAlign: 'left'
        }}
      >
        {rawSegments.map((item, idx) => {
          // Special styling for LTS without underline
          if (item.isLts) {
            return (
              <React.Fragment key={idx}>
                <span
                  ref={(el) => { wordRefs.current[idx] = el; }}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="inline-flex items-center align-baseline will-change-transform cursor-default select-none"
                  style={{
                    display: 'inline-flex',
                    backfaceVisibility: 'hidden',
                    WebkitFontSmoothing: 'antialiased'
                  }}
                >
                  <span className="font-semibold text-slate-900 tracking-tight">
                    LTS:
                  </span>
                </span>
                {' '}
              </React.Fragment>
            );
          }

          // Only bold: Tuyến bài: “Mạnh về biển, phát triển bền vững từ biển” (5 kỳ)
          const extraClass = item.bold
            ? 'font-bold text-slate-950'
            : 'font-normal text-slate-800';

          // End of text: pen drawing the line in motion across, reaching the full width of the text block
          if (item.isEnd) {
            return (
              <span
                key={idx}
                ref={(el) => { wordRefs.current[idx] = el; }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="inline-flex items-center align-baseline will-change-transform cursor-default select-none"
                style={{
                  display: 'inline-flex',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                <span
                  ref={endWordTextRef}
                  className={`${extraClass} ${hoveredIdx === idx ? 'text-cyan-800' : ''}`}
                >
                  {item.text}
                </span>

                {/* Animated pen drawing the line horizontally across to the right margin */}
                <span
                  key={animKey}
                  onClick={handleReplayDraw}
                  title="Nhấp để xem lại chuyển động vẽ line"
                  className="relative inline-block align-middle ml-2.5 h-5 cursor-pointer group select-none"
                  style={{ width: `${lineWidth}px` }}
                >
                  {/* The expanding drawing container with trailing line and pen nib at the tip */}
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center animate-pen-draw"
                    style={{ height: '1.5px', overflow: 'visible' }}
                  >
                    {/* The drawn line running horizontally */}
                    <span className="h-full bg-slate-300 rounded-full flex-1 min-w-0" />

                    {/* Pen at the line tip with subtle wobble motion */}
                    <span className="flex-shrink-0 text-slate-700 -ml-[1px] animate-pen-wobble group-hover:text-cyan-800 transition-colors">
                      <Pen className="w-4 h-4 stroke-[1.8] drop-shadow-2xs" />
                    </span>
                  </span>
                </span>
              </span>
            );
          }

          return (
            <React.Fragment key={idx}>
              <span
                ref={(el) => { wordRefs.current[idx] = el; }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`inline-block transition-colors duration-150 will-change-transform cursor-default ${extraClass} ${
                  hoveredIdx === idx ? 'text-cyan-800' : ''
                }`}
                style={{
                  display: 'inline-block',
                  backfaceVisibility: 'hidden',
                  WebkitFontSmoothing: 'antialiased'
                }}
              >
                {item.text}
              </span>
              {' '}
            </React.Fragment>
          );
        })}
      </p>
    </div>
  );
};
