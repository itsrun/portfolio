import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export default function Section({ children, className = "", ...props }: SectionProps) {
  return (
    <section
      {...props}
      className={`break-inside-avoid cursor-default ${className}`}
    >
      {children}
    </section>
  );
}
