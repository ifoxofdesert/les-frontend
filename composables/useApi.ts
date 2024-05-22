import type { IPageEvents, Icard, IlistingPage, Inews } from '~/types/News';
import type { Iroom, IroomList } from '~/types/Room';
import type { Ihome } from '~/types/Home';
import type { IvacancyPage } from '~/types/VacancyPage';
import type { IcontactsPage } from '~/types/Contacts';
import type { IinfoPage, IpageMenu } from '~/types/InfoPages';
import type { IfindMany, IfindPage, Igeneral, Ipage } from '~/types/General';
import type { Itags } from '~/types/FilterTagDate';
import type { IformFeedbackRequests, IresponseStatus } from '~/types/Form';

export default function useApi() {
  const env = useEnv();

  const apiFetch = $fetch.create({
    baseURL: env.API_URL,
    responseType: 'json',
    headers: {
      Authorization: `Bearer ${env.API_TOKEN}`,
    },
  });

  async function getHome() {
    const { data } = await useAsyncData('home', () =>
      apiFetch<Promise<Ihome>>(`/getHome/`, {
        method: 'GET',
      })
    );

    return data?.value;
  }

  async function getPreviewsNews({ page, pageSize, sort, populate, filters }: IfindPage) {
    const { data } = await useAsyncData('previewsNews', () =>
      apiFetch<Promise<IPageEvents<Icard[]>>>(`/getPreviews/`, {
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

    return data?.value;
  }

  async function getGeneral() {
    const { data } = await useAsyncData('general', () =>
      apiFetch<Promise<Igeneral>>(`/getGeneral/`, {
        method: 'GET',
      })
    );

    return data?.value;
  }

  async function getTags() {
    const { data } = await useAsyncData('newsTags', () =>
      apiFetch<Promise<Itags[]>>(`/getTags/`, {
        method: 'GET',
      })
    );

    return data?.value;
  }

  async function getNewsListingPage() {
    const { data } = await useAsyncData('newsListingPage', () =>
      apiFetch<Promise<IlistingPage>>(`/getNewsListingPage/`, {
        method: 'GET',
      })
    );

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

    return data?.value;
  }

  async function getVacancy() {
    const { data } = await useAsyncData('vacancyPage', () =>
      apiFetch<Promise<IvacancyPage>>(`/getVacancyPage/`, {
        method: 'GET',
      })
    );

    return data?.value;
  }

  async function getContacts() {
    const { data } = await useAsyncData('contact', () =>
      apiFetch<Promise<IcontactsPage>>(`/getContact/`, {
        method: 'GET',
      })
    );

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

    return data?.value;
  }

  async function getInfoPageMenu() {
    const { data } = await useAsyncData('settingInfoPage-getMenu', () =>
      apiFetch<Promise<IpageMenu[]>>(`/settingInfoPage-getMenu/`, {
        method: 'GET',
      })
    );

    return data?.value;
  }

  async function sendFeedbackRequests(fields: IformFeedbackRequests) {
    const { data } = await useAsyncData('sendFeedbackRequests', () =>
      apiFetch<Promise<IresponseStatus>>(`/send-feedback-requests/`, {
        method: 'POST',
        body: fields,
      })
    );

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
    sendFeedbackRequests,
  };
}
