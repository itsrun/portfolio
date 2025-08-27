import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={`break-inside-avoid ${className}`}>
      {children}
    </section>
  );
}
