export interface Iimage {
  src: string;
  alt: string;
}

export interface IvideoSources {
  src: string;
  type: string;
}

export interface Ivideo {
  poster: string;
  sources: IvideoSources[];
}
