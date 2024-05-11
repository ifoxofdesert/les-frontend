import type { IlinkButton, IlinkImage, Iphone } from './General';

export interface Ifooter {
  phones?: Iphone[];
  menu?: IlinkButton[];
  navigation?: IlinkButton[];
  socials?: IlinkButton[];
  payments?: IlinkImage[];
}
