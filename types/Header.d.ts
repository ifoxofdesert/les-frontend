import type { Iimage, IlinkButton, Iphone } from './General';

export interface Iheader {
  phone?: Iphone;
  menu?: IlinkButton[];
  socials?: IlinkButton[];
  logo?: Iimage;
  burgerBackground?: Iimage;
}
