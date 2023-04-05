import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

type WrapperProps = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;

export type { WrapperProps };
