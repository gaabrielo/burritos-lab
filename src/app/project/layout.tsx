import { ReactNode } from 'react';

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>Meus projetos</header>
      <div>{children}</div>
    </div>
  );
}
