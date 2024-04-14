import news from '~/src/news.json';
import type { Icard, Inews } from '~/types/News.d.ts';

export default defineNuxtPlugin(async () => {
  async function getNews(): Promise<Icard[]> {
    return news.listingNews;
  }

  async function searchNews(): Promise<Inews> {
    return news.news;
  }

  return {
    provide: {
      getNews,
      searchNews,
    },
  };
});
