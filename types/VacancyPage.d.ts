export interface Ivacancies {
  active: boolean;
  title: string;
  experience: string;
  employment: string;
  salary: string;
  responsibilities: string[];
  conditions: string[];
}

export interface IvacancyPage {
  pagetitle: string;
  pageDescription: string;
  title: string;
  lastUpdate: string;
  vacancies: Ivacancies[];
}
