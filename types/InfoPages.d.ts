export interface Inavigations {
  title: string;
  key: string | number;
  active?: boolean;
}

export interface IpageMenu {
  title: string;
  url: string;
}

export interface IinfoPage {
  slug: string;
  pagetitle?: string;
  pageDescription?: string;
  title?: string;
  lastUpdate?: string;
  text?: string;
}
