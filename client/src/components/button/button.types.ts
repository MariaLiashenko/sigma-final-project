import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButttonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  readonly variant: "darkFilled" | "lightFilled" | "lightOutline";
  readonly icon?: ReactNode;
}

export type { ButttonProps };
