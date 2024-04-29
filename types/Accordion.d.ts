export interface Iaccordion {
  title: string;
  text?: string;
  active: boolean;
}

export type ChangeAccardion = (accordion: Iaccordion) => void;
