import news from '~/src/news.json';
import room from '~/src/rooms.json';
import roomsListing from '~/src/roomsListing.json';
// import home from '~/src/home.json';
import vacancy from '~/src/vacancy.json';
import contacts from '~/src/contacts.json';
import infoPage from '~/src/infoPage.json';
import type { Icard, Inews } from '~/types/News';
import type { Iroom, IroomList } from '~/types/Room';
import type { Ihome } from '~/types/Home';
import type { IvacancyPage } from '~/types/VacancyPage';
import type { IcontactsPage } from '~/types/Contacts';
import type { IinfoPage } from '~/types/InfoPages';

import menu from '~/src/infoPageMenu.json';
import type { IfindMany } from '~/types/General';

const apiFetch = $fetch.create({
  baseURL: 'http://localhost:1337/api',
  responseType: 'json',
  headers: {
    Authorization:
      'Bearer 06e73a277e180040bb5c30dd5a09ee9c1d858eb1471c27185c2f34862998866d703c800cf50fe022287e439101ca7b91112dfbe53bcd523ebf0b384d11b4bcec263bcdfcb32f7e85d022e7b2358adc5987d117d358a0d1470eeffb749c5fde0ed24c9eceaf4b5c00f99550347cfb2e537cde0b2f051b08baa430bfe52ac00c11',
  },

  async onResponseError({ response }) {
    console.log(response);
  },
});

export default function useApi() {
  async function getHome(): Promise<Ihome | null> {
    const { data } = await useAsyncData<Ihome>('home', () =>
      apiFetch(`/getHome/`, {
        method: 'GET',
      })
    );
    console.log('home', data);

    return data?.value;
  }

  async function getPreviewsNews({ start, limit, sort, populate, filters }: IfindMany): Promise<Icard[] | null> {
    const { data } = await useAsyncData<Icard[]>('previewsNews', () =>
      apiFetch(`/getPreviews/`, {
        method: 'GET',
        params: {
          start,
          limit,
          sort,
          populate,
          filters,
        },
      })
    );
    console.log('previewsNews', data);

    return data?.value;
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

  async function getRooms(): Promise<IroomList[]> {
    return roomsListing;
  }

  async function getPreviewsRoom({ start, limit, sort, populate, filters }: IfindMany): Promise<IroomList[] | null> {
    const { data } = await useAsyncData<Icard[]>('previewsRoom', () =>
      apiFetch(`/getPreviewsRoom/`, {
        method: 'GET',
        params: {
          start,
          limit,
          sort,
          populate,
          filters,
        },
      })
    );
    console.log('listRoom', data);

    return data?.value;
  }

  async function getVacancy(): Promise<IvacancyPage> {
    return vacancy;
  }

  async function getContacts(): Promise<IcontactsPage> {
    return contacts;
  }

  async function getInfoPage(slug: string): Promise<IinfoPage> {
    console.log(slug);

    if (menu.some((item) => item.url == `/${slug}`)) {
      return infoPage;
    } else {
      return {};
    }
  }

  return {
    getHome,
    getNews,
    getPreviewsNews,
    searchNews,
    getRoom,
    getRooms,
    getPreviewsRoom,
    getVacancy,
    getContacts,
    getInfoPage,
  };
}
