import { TyperContainer } from '@/components/TyperContainer';
import { readFileSync } from 'fs';
import pdf from 'pdf-parse';
import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  useEffect,
} from 'react';

export default function Home() {
  // useEffect(async () => {
  //   let dataBuffer = await readFileSync('/lord-of-the-flies.pdf');

  //   const pdfText = await pdf(dataBuffer);
  //   console.log('🚀 ~ Home ~ pdfText:', pdfText);
  // }, []);

  return <TyperContainer />;
}
