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
