import type { Iaccordion } from './Accordion';
import type { Iimage, ItitleCustom, Ivideo } from './General';
import type { IoffersSlider } from './OffersSlider';

export interface IaboutRoom {
  title?: string;
  firstText?: string;
  secondText?: string;
}

export interface IroomWelcome {
  title?: string;
  secondTitle?: string;
  initialLetter?: string;
  text?: string;
  markText?: string;
  subText?: string;
}

export interface IroomList {
  title?: string;
  area?: string;
  persons?: string;
  img?: Iimage;
  description?: string;
  active?: boolean;
  slug?: string;
}

interface Iroom {
  title?: string;
  slug?: string;
  area?: string;
  persons?: string;
  viewRoom?: string;
  img?: Iimage;
  pagetitle?: string;
  pageDescription?: string;
  description?: string;
  travelId?: string;
  video?: Ivideo;
  aboutRoom?: IaboutRoom;
  accorionTitle?: ItitleCustom;
  accorionDescription?: string;
  accordion?: Iaccordion[];
  gallaryTitle?: string;
  gallaryDescription?: string;
  gallary?: Iimage[];
  roomWelcome?: IroomWelcome;
  offersSlider?: IoffersSlider;
  roomListTitle?: ItitleCustom;
  roomListDescription?: string;
  roomList?: IroomList[];
}
