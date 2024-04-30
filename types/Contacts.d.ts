import type { Emails, Iphone } from './General';

export interface Icontacts {
  phones?: Iphone[];
  emails?: Emails;
}

export interface IcontactsPage {
  pagetitle?: string;
  pageDescription?: string;
  title?: string;
  lastUpdate?: string;
  reservations?: Icontacts;
  banquets?: Icontacts;
  address?: string;
  llcName?: string;
  ogrn?: number;
  inn?: number;
  kpp?: number;
  legalAddress?: string;
}
