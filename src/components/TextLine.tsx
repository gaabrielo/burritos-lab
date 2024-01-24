'use client';

import React from 'react';

// function getWidthOfCharacter(character: string) {
//   var testElement = document.createElement('span');
//   // testElement.style.font = font || 'inherit';
//   testElement.textContent = character;
//   document.body.appendChild(testElement);
//   var width = testElement.offsetWidth;
//   document.body.removeChild(testElement);
//   return width;
// }

function getWidthOfCharacter(character: string) {
  var testElement = document.createElement('span');
  // testElement.style.font = font || 'inherit';

  // Adicione um caractere não visível (espaço) ao conteúdo do elemento de teste
  testElement.textContent = character || ' ';
  document.body.appendChild(testElement);

  // Se o caractere for um espaço, defina explicitamente a largura
  var width;
  if (character === ' ') {
    width = 6; // Valor de exemplo, ajuste conforme necessário
  } else {
    width = testElement.offsetWidth;
  }

  document.body.removeChild(testElement);
  return width;
}

export function TextLine({ textInput = '', textLine = '', lineIndex = 0 }) {
  const lineRef = React.useRef<any>(null);

  React.useEffect(() => {
    // const calculatedLeft = 16 + textInput.length * 16 + 'px';

    let calculatedLeft = 0;
    for (let txt of textInput) {
      calculatedLeft += getWidthOfCharacter(txt + '');
    }

    console.log('🚀 ~ React.useEffect ~ calculatedLeft:', calculatedLeft);
    if (lineRef?.current) {
      lineRef.current.style.left = 18 + calculatedLeft + 'px';
    }
  }, [textInput]);

  return (
    <div className="text-gray-400 leading-7 relative flex gap-2 font-body text-[18px]">
      <div
        ref={lineRef}
        className={`w-[2px] h-6 rounded-lg bg-slate-100 absolute top-0 transition-all`}
      ></div>
      <span className="text-slate-700 font-normal">{lineIndex + 1}.</span>
      <span>{textLine}</span>
    </div>
  );
}
