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

export interface ItitleCutom {
  first?: string;
  second?: string;
}

export interface Iphone {
  text?: string;
  url?: string;
}

export type Emails = string[];
