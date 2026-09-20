/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WavingText } from './components/WavingText';

export default function App() {
  return (
    <div
      id="app-root"
      className="min-h-screen bg-white text-slate-900 flex items-center justify-center p-4 sm:p-8 md:p-10 lg:p-12 selection:bg-cyan-100 selection:text-cyan-950"
    >
      <main className="w-full max-w-[1000px] mx-auto bg-white">
        {/* The Waving Editorial Paragraph: Nền trắng, chữ động đậy 1 xíu (giống có sóng) */}
        <WavingText
          intensity="gentle"
          speed="normal"
          fontSize="normal"
        />
      </main>
    </div>
  );
}
