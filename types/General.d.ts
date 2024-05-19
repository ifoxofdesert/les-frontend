import type { Ifooter } from './Footer';
import type { Iheader } from './Header';

export interface IfindMany {
  start?: number;
  limit?: number;
  sort?: object | string;
  populate?: string;
  filters?: object;
}

export interface IfindPage {
  pageSize?: number;
  page?: number;
  sort?: object;
  populate?: string;
  filters?: object;
}

export interface Iimage {
  src?: string;
  alt?: string;
}

export interface IlinkImage extends Iimage {
  url?: string;
}

export interface IvideoSources {
  src?: string;
  type?: string;
}

export interface Ivideo {
  poster?: string;
  sources?: IvideoSources[];
}

export interface ItitleCustom {
  first?: string;
  second?: string;
}

export interface Iphone {
  text?: string;
  url?: string;
  mission?: string;
}

export interface IlinkButton {
  text?: string;
  url?: string;
}

export interface Icoordinate {
  latitude?: string;
  longitude?: string;
}

export interface Ipagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Ipage<result> {
  result: result;
  pagination: Ipagination;
}

export type Emails = string[];

export interface Igeneral {
  address?: string;
  policyUrl?: string;
  footer?: Ifooter;
  header?: Iheader;
}
