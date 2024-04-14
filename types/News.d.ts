import type { Iimage } from './General';

export interface Icard {
  image?: Iimage;
  date?: string;
  position?: string;
  title?: string;
  description?: string;
  type?: string;
  url?: string;
}

export interface Inews {
  id: string;
  type: string;
  pagetitle?: string;
  pageDescription?: string;
  title?: string;
  image?: Iimage;
  markText?: string;
  introText?: string;
  text?: string;
  slideTitle?: string;
  slideText?: string;
  slideItem?: Icard[];
}
