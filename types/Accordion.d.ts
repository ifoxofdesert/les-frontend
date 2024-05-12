export interface Iaccordion {
  title: string;
  text?: string;
  active?: boolean;
}

export type ChangeAccardion = (accordion: Iaccordion) => void;

export interface IquestionsBlock {
  title: string;
  secondTitle: string;
  thirdTitle: string;
  accordion: Iaccordion[];
}
