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

export function ActiveParagraph({
  textInput = '',
  textLine = '',
  lineIndex = 0,
}) {
  const lineRef = React.useRef<any>(null);

  React.useEffect(() => {
    // const calculatedLeft = 16 + textInput.length * 16 + 'px';
    let indicatorLine: any = document.querySelector('#indicator-' + lineIndex);
    indicatorLine = indicatorLine?.getBoundingClientRect();

    let calculatedLeft = 0;
    for (let txt of textInput) {
      calculatedLeft += getWidthOfCharacter(txt + '');
    }

    if (lineRef?.current) {
      lineRef.current.style.left = indicatorLine.width - 4 + 'px';
      lineRef.current.style.top = indicatorLine.height - 28 + 'px';
    }
  }, [textInput]);

  const replacedText = textInput.replaceAll(' ', '/');
  const test = textInput.split(' ');
  console.log('🚀 ~ TextLine ~ test:', textLine.split(' '));

  return (
    <>
      <div
        className="text-slate-500 leading-7 relative tracking-wide flex font-mono text-[18px] hover:border hover:border-gray-200 rounded-lg border border-transparent"
        id={'line-' + lineIndex}
      >
        <span className="text-slate-700 mr-2">{lineIndex + 1}</span>

        <div className="relative">
          <div
            ref={lineRef}
            className={`w-[2px] h-6 rounded-lg absolute top-0 transition-all duration-100 ease-out`}
          />
          <div className="flex flex-wrap">
            {textLine
              .trim()
              .split(' ')
              .map((word, wordIdx) => (
                <>
                  <span
                    key={'word-' + lineIndex + wordIdx}
                    // id={'indicator-' + lineIndex}
                    className="block"
                  >
                    {`${word}`}
                  </span>
                  &nbsp;
                </>
              ))}
          </div>

          {/* <span className="opacity-30 text-justify">
            {textLine.replaceAll('—', '-')}
          </span> */}

          <div className="absolute top-0 left-0 text-red-500">
            <div className="flex flex-wrap ">
              {replacedText.split('/').map((word, wordIdx) => (
                <span id={'indicator-' + lineIndex} className="block">
                  {wordIdx + 1 === replacedText.split('/').length
                    ? word
                    : word + '/'}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* <span className="text-slate-700 mr-2">{lineIndex + 1}.</span>
        <span>{replacedText}</span> */}
      </div>

      {/* <div
        className="leading-7 inline-block tracking-wide font-mono text-[18px] hover:border hover:border-gray-200 rounded-lg border border-transparent"
        id={'indicator-' + lineIndex}
      >
        <span className="text-slate-700 mr-2">{lineIndex + 1}.</span>
        <span>{replacedText}</span>
      </div> */}
    </>
  );
}
