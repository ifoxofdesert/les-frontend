import type { IquestionsBlock } from './Accordion';
import type { Icoordinate, Iimage, ItitleCustom, Ivideo } from './General';
import type { IoffersSlider } from './OffersSlider';
import type { IreviewSlider } from './Review';
import type { IroomList } from './Room';

export interface ImainBlock {
  mainImage?: Iimage;
  mainTitle?: ItitleCustom;
  coordinate?: Icoordinate;
}

export interface IroomsListBlock {
  title: string;
  description?: string;
}

export interface IafishaEvents {
  titleCustom: ItitleCustom;
  description?: string;
}

export interface Ihome {
  pagetitle?: string;
  pageDescription?: string;
  mainBlock?: ImainBlock;
  offersSlider?: IoffersSlider;
  video?: Ivideo;
  questions?: IquestionsBlock;
  roomsListBlock?: IroomsListBlock;
  reviewSlider?: IreviewSlider;
  afishaEvents?: IafishaEvents;
}
