import news from '~/src/news.json';
import room from '~/src/rooms.json';
import home from '~/src/home.json';
import type { Icard, Inews } from '~/types/News';
import type { Iroom } from '~/types/Room';
import type { Ihome } from '~/types/Home';

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

  return {
    getHome,
    getNews,
    searchNews,
    getRoom,
  };
}
