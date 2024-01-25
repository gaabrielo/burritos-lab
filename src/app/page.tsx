import { readFileSync } from 'fs';
import pdf from 'pdf-parse';
import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  useEffect,
} from 'react';

import { TextWriter } from '@/pages/TextWriter';

export default function Home() {
  // useEffect(async () => {
  //   let dataBuffer = await readFileSync('/lord-of-the-flies.pdf');

  //   const pdfText = await pdf(dataBuffer);
  //   console.log('🚀 ~ Home ~ pdfText:', pdfText);
  // }, []);

  return <TextWriter />;
}
