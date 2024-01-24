'use client';

import { TextLine } from '@/components/TextLine';
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

  return (
    <div className="w-full max-w-4xl p-4 bg-stone-900 rounded-lg mx-auto mt-20">
      <textarea
        name="text-getter"
        id="text-getter"
        onChange={(e: any) => setTextWritten(e.target.value)}
        value={textWritten}
      />

      <h1>Cap. 1</h1>
      <h1 className="font-sans text-4xl">O homem carequinha</h1>
      <h1 className="font-body text-4xl">O homem carequinha</h1>
      <h1 className="font-mono ">O homem carequinha</h1>

      <div className="flex flex-col gap-2">
        {text.map((line, idx) => (
          <label key={idx} htmlFor="text-getter">
            <TextLine textInput={textWritten} textLine={line} lineIndex={idx} />
          </label>
        ))}
      </div>
    </div>
  );
}
