import type { Icard, IlistingPage, Inews } from '~/types/News';
import type { Iroom, IroomList } from '~/types/Room';
import type { Ihome } from '~/types/Home';
import type { IvacancyPage } from '~/types/VacancyPage';
import type { IcontactsPage } from '~/types/Contacts';
import type { IinfoPage, IpageMenu } from '~/types/InfoPages';
import type { IfindMany, IfindPage, Igeneral, Ipage } from '~/types/General';
import type { Itags } from '~/types/FilterTagDate';

export default function useApi() {
  const env = useEnv();

  const apiFetch = $fetch.create({
    baseURL: env.API_URL,
    responseType: 'json',
    headers: {
      Authorization: `Bearer ${env.API_TOKEN}`,
    },

    async onResponseError({ response }) {
      console.log(response);
    },
  });

  async function getHome() {
    const { data } = await useAsyncData('home', () =>
      apiFetch<Promise<Ihome>>(`/getHome/`, {
        method: 'GET',
      })
    );
    console.log('home', data);

    return data?.value;
  }

  async function getPreviewsNews({ page, pageSize, sort, populate, filters }: IfindPage) {
    const { data } = await useAsyncData('previewsNews', () =>
      apiFetch<Promise<Ipage<Icard[]>>>(`/getPreviews/`, {
        method: 'GET',
        params: {
          page,
          pageSize,
          sort,
          populate,
          filters: JSON.stringify(filters || undefined),
        },
      })
    );
    console.log('previewsNews', data);

    return data?.value;
  }

  async function getGeneral() {
    const { data } = await useAsyncData('general', () =>
      apiFetch<Promise<Igeneral>>(`/getGeneral/`, {
        method: 'GET',
      })
    );
    console.log('general', data);

    return data?.value;
  }

  async function getTags() {
    const { data } = await useAsyncData('newsTags', () =>
      apiFetch<Promise<Itags[]>>(`/getTags/`, {
        method: 'GET',
      })
    );
    console.log('newsTags', data);

    return data?.value;
  }

  async function getNewsListingPage() {
    const { data } = await useAsyncData('newsListingPage', () =>
      apiFetch<Promise<IlistingPage>>(`/getNewsListingPage/`, {
        method: 'GET',
      })
    );
    console.log('newsListingPage', data);

    return data?.value;
  }

  async function searchNews({ limit, start, sort, populate, filters }: IfindMany) {
    const { data } = await useAsyncData('newsPage', () =>
      apiFetch<Promise<Inews>>(`/getNewsPage/`, {
        method: 'GET',
        params: {
          start,
          limit,
          sort,
          populate,
          filters: JSON.stringify(filters || undefined),
        },
      })
    );
    console.log('searchNews', data);

    return data?.value;
  }

  async function getRoomPage({ limit, start, sort, populate, filters }: IfindMany) {
    const { data } = await useAsyncData('roomPage', () =>
      apiFetch<Promise<Iroom>>(`/getRoomPage/`, {
        method: 'GET',
        params: {
          start,
          limit,
          sort,
          populate,
          filters: JSON.stringify(filters || undefined),
        },
      })
    );
    console.log('roomPage', data);

    return data?.value;
  }

  async function getPreviewsRoom({ start, limit, sort, populate, filters }: IfindMany) {
    const { data } = await useAsyncData('previewsRoom', () =>
      apiFetch<Promise<IroomList[]>>(`/getPreviewsRoom/`, {
        method: 'GET',
        params: {
          start,
          limit,
          sort,
          populate,
          filters: JSON.stringify(filters || undefined),
        },
      })
    );
    console.log('listRoom', data);

    return data?.value;
  }

  async function getVacancy() {
    const { data } = await useAsyncData('vacancyPage', () =>
      apiFetch<Promise<IvacancyPage>>(`/getVacancyPage/`, {
        method: 'GET',
      })
    );
    console.log('vacancyPage', data);

    return data?.value;
  }

  async function getContacts() {
    const { data } = await useAsyncData('contact', () =>
      apiFetch<Promise<IcontactsPage>>(`/getContact/`, {
        method: 'GET',
      })
    );
    console.log('contact', data);

    return data?.value;
  }

  async function getInfoPage({ populate, filters }: IfindMany) {
    const { data } = await useAsyncData('infoPage', () =>
      apiFetch<Promise<IinfoPage>>(`/getInfoPage/`, {
        method: 'GET',
        params: {
          populate,
          filters: JSON.stringify(filters || undefined),
        },
      })
    );
    console.log('infoPage', data);

    return data?.value;
  }

  async function getInfoPageMenu() {
    const { data } = await useAsyncData('settingInfoPage-getMenu', () =>
      apiFetch<Promise<IpageMenu[]>>(`/settingInfoPage-getMenu/`, {
        method: 'GET',
      })
    );
    console.log('settingInfoPage-getMenu', data);

    return data?.value;
  }

  return {
    getGeneral,
    getHome,
    getPreviewsNews,
    getTags,
    searchNews,
    getNewsListingPage,
    getRoomPage,
    getPreviewsRoom,
    getVacancy,
    getContacts,
    getInfoPage,
    getInfoPageMenu,
  };
}
