import news from '~/src/news.json';
import type { Icard, Inews } from '~/types/News.d.ts';

export default defineNuxtPlugin(async () => {
  async function getNews(): Promise<Icard[]> {
    return news.listingNews;
  }

  async function searchNews(slug: string): Promise<Inews | undefined> {
    return news.news.find((item) => item.slug === slug);
  }

  return {
    provide: {
      getNews,
      searchNews,
    },
  };
});
