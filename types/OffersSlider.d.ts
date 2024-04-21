import type { Iimage } from './General';

export interface IoffersSlide {
  title: string;
  img: Iimage;
  markText: string;
  expired: boolean;
}

export interface IoffersSlider {
  slideTitle?: string;
  slideSecondTitle?: string;
  slideDescription?: string;
  slids: IoffersSlide[];
}
