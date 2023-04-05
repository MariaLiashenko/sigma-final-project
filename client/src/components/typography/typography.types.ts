import { ReactNode } from "react";

interface TypographyProps {
  readonly type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  readonly children: ReactNode;
}

export type { TypographyProps };
