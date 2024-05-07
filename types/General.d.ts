export interface IfindMany {
  start?: number;
  limit?: number;
  sort?: object;
  populate?: string;
  filters?: string;
}

export interface IfindPage {
  pageSize?: number;
  page?: number;
  sort?: object;
  populate?: string;
  filters?: string;
}

export interface Iimage {
  src?: string;
  alt?: string;
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
