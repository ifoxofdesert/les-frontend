import type { Iaccordion } from './Accordion';
import type { Iimage } from './General';

export interface IlistingPage {
  title?: string;
  description?: string;
  pagetitle?: string;
  pageDescription?: string;
  defaultFilter?: string;
}

export interface Icard {
  image?: Iimage;
  date?: string;
  position?: string;
  title?: string;
  description?: string;
  type?: string;
  slug?: string;
  main?: boolean;
}

export interface Inews {
  slug: string;
  id: string;
  type: string;
  pagetitle?: string;
  pageDescription?: string;
  title?: string;
  image?: Iimage;
  markText?: string;
  introText?: string;
  textBefore?: string;
  buttonBeforeActive: boolean;
  accordion?: Iaccordion[];
  textAfter?: string;
  buttonAfterActive: boolean;
  slideTitle?: string;
  slideText?: string;
  slideItem?: Icard[];
}
