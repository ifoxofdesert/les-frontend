import news from '~/src/news.json';
import room from '~/src/rooms.json';
import home from '~/src/home.json';
import vacancy from '~/src/vacancy.json';
import contacts from '~/src/contacts.json';
import infoPage from '~/src/infoPage.json';
import type { Icard, Inews } from '~/types/News';
import type { Iroom } from '~/types/Room';
import type { Ihome } from '~/types/Home';
import type { IvacancyPage } from '~/types/VacancyPage';
import type { IcontactsPage } from '~/types/Contacts';
import type { IinfoPage } from '~/types/InfoPages';

export default function useApi() {
  async function getHome(): Promise<Ihome> {
    return home;
  }

  async function getNews(): Promise<Icard[]> {
    return news.listingNews;
  }

  async function searchNews(slug: string): Promise<Inews | undefined> {
    return news.news.find((item) => item.slug === slug);
  }

  async function getRoom(): Promise<Iroom> {
    return room;
  }

  async function getVacancy(): Promise<IvacancyPage> {
    return vacancy;
  }

  async function getContacts(): Promise<IcontactsPage> {
    return contacts;
  }

  async function getInfoPage(): Promise<IinfoPage> {
    return infoPage;
  }

  return {
    getHome,
    getNews,
    searchNews,
    getRoom,
    getVacancy,
    getContacts,
    getInfoPage,
  };
}
