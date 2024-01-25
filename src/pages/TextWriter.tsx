'use client';

import { ActiveParagraph } from '@/components/ActiveParagraph';
import React from 'react';

const text = [
  'O menino louro deixou-se escorregar ao pé da rocha e avançou rumo à lagoa.',
  ' Havia tirado o suéter da escola e o carregava agora na mão, mas a camisa cinza estava colada no seu corpo e os cabelos aderiam à sua testa.',
  ' Em torno dele, um banho de calor: a ampla cicatriz aberta na selva. Avançou com dificuldade por entre trepadeiras e troncos quebrados.',
  ' Foi quando um pássaro, uma visão de vermelho e amarelo, faiscou, subindo, com um grito de bruxo. Grito que foi ecoado por outro.',
  '— Ei! — dizia. — Espere um pouco!',
  'Os arbustos rasteiros se agitaram, ao lado da escarpa; caiu uma multidão de gotas de chuva, tamborilantes.',
  '— Espere um pouco — a voz repetiu. — Fiquei preso. O menino louro parou e puxou as meias com um gesto automático, e a selva, por um instante, fez-se um lugar muito familiar.',
];

export function TextWriter() {
  const [textWritten, setTextWritten] = React.useState('');
  const [paragraph, setParagraph] = React.useState(0);
  console.log('🚀 ~ TextWriter ~ paragraph:', paragraph);

  function selectLine(idx: number) {
    document.getElementById('text-getter')?.focus();
    setParagraph(idx);
  }

  return (
    <div className="w-full max-w-4xl p-4 bg-stone-900 rounded-lg mx-auto mt-20">
      <textarea
        name="text-getter"
        id="text-getter"
        className="sr-only"
        onChange={(e: any) => setTextWritten(e.target.value)}
        value={textWritten}
      />

      <h1 className="text-2xl">Cap. 1</h1>

      <div className="flex flex-col gap-2 mt-3">
        {text.map((line, idx) => {
          if (idx !== paragraph) {
            return (
              <div
                onClick={() => selectLine(idx)}
                className="text-slate-500 leading-7 relative tracking-wide flex font-mono text-[18px] hover:border hover:border-gray-200 rounded-lg border border-transparent"
              >
                <span className="mr-2">{idx + 1}</span>
                <span>{line}</span>
              </div>
            );
          }

          return (
            <label key={idx} htmlFor="text-getter">
              <ActiveParagraph
                textInput={textWritten}
                textLine={line}
                lineIndex={idx}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
}
