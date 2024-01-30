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

function wordCutter(string: string, index: number) {
  // Extrair a parte da string a partir do índice especificado
  let parteString = string.substring(index);

  // Dividir a parte da string em um array de caracteres
  let arrayLetras = parteString.split('');

  return arrayLetras;
}

interface Props {
  textInput: string;
  paragraph: string;
  paragraphIndex: number;
  nextParagraph: (n: number) => void;
}

export function ActiveParagraph({
  textInput = '',
  paragraph = '',
  paragraphIndex = 0,
  nextParagraph,
}: Props) {
  const lineRef = React.useRef<any>(null);
  // const [words, setWords] = React.useState<string[]>([]);
  // let words: string[] = paragraph.split('');

  const [words, setWords] = React.useState(paragraph.split(''));

  // for (let c = 0; c < paragraph.length; c++) {
  //   // setWords((state) => [...state, paragraph[c]]);
  //   words.push(paragraph[c]);
  // }

  React.useEffect(() => {
    if (
      textInput.length === words.length
      // && textInput[textInput.length - 1] === ' '
    ) {
      return nextParagraph(paragraphIndex + 1);
    }

    // add color based on written words
    for (let c = 0; c < textInput.length; c++) {
      const selector = document.querySelector(`#word-${paragraphIndex}${c}`);

      if (words[c] === textInput[c]) {
        // @ts-ignore
        selector.style.color = '#16a34a';
      } else if (words[c] !== textInput[c]) {
        // @ts-ignore
        selector.style.color = '#ef4444';
      }
    }

    if (
      words[textInput.length - 1] === ' ' &&
      textInput[textInput.length - 1] !== ' '
    ) {
      // const test = [...words].splice(
      //   textInput.length,
      //   0,
      //   ...wordCutter(paragraph, textInput.length - 1)
      // );

      // increasedWords.push({
      //   idx: textInput.length - 1,
      //   words: textInput.split('').slice(textInput.length - 1, -1),
      // });

      const newArray = [...words];
      // .splice(5, 0, 'a');
      newArray.splice(textInput.length - 1, 0, textInput[textInput.length - 1]);
      setWords(newArray);

      console.log('🚀 ~ React.useEffect ~ words:', words);
    }

    // remove color of unwritten words
    for (let c = textInput.length; c < words.length; c++) {
      const selector = document.querySelector(`#word-${paragraphIndex}${c}`);

      // @ts-ignore
      selector.style.color = 'unset';
    }

    // let indicatorLine: any = document.querySelector(
    //   '#indicator-' + paragraphIndex
    // );
    // indicatorLine = indicatorLine?.getBoundingClientRect();

    // let calculatedLeft = 0;
    // for (let txt of textInput) {
    //   calculatedLeft += getWidthOfCharacter(txt + '');
    // }

    // if (indicatorLine) {
    //   lineRef.current.style.left = indicatorLine.width - 4 + 'px';
    //   lineRef.current.style.top = indicatorLine.height - 28 + 'px';
    // }
  }, [textInput]);

  return (
    <>
      <div
        className="text-slate-500 leading-8 relative tracking-wide flex font-mono text-[18px] rounded-lg border border-transparent"
        id={'paragraph-' + paragraphIndex}
      >
        <span className="mr-2">{paragraphIndex + 1}</span>

        <div className="relative">
          <div
            ref={lineRef}
            className={`w-[2px] h-6 rounded-lg absolute top-0 transition-all duration-100 ease-out`}
          />
          <div className="flex flex-wrap">
            {words.map((word, wordIdx) => (
              <span
                key={'word-' + paragraphIndex + wordIdx}
                id={'word-' + paragraphIndex + wordIdx}
                className="block"
              >
                {word === ' ' ? <>&nbsp;</> : `${word}`}
              </span>
            ))}
          </div>

          {/* <div className="absolute top-0 left-0 text-red-500">
            <div className="flex flex-wrap ">
              {replacedText.split('/').map((word, wordIdx) => (
                <span id={'indicator-' + lineIndex} className="block">
                  {wordIdx + 1 === replacedText.split('/').length ? (
                    word
                  ) : (
                    <>{word}&nbsp;</>
                  )}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
