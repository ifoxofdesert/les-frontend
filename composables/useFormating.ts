import type { formatingDateTime } from '~/types/formating';

export default function useFormating() {
  function formatingNumber(number: number): string | number {
    return number > 9 ? number : `0${number}`;
  }

  function formatingDateTime(dateTime: string, options?: formatingDateTime) {
    if (dateTime) {
      const date = new Date(Date.parse(dateTime)).toLocaleString('ru', {
        timeZone: 'Europe/Moscow',
        month: 'long',
        day: 'numeric',
        year: options?.onYear ? 'numeric' : undefined,
      });

      const time =
        /:/.test(dateTime) && !/00:00/.test(dateTime)
          ? `в ${new Date(Date.parse(dateTime)).toLocaleString('ru', {
              timeZone: 'Europe/Moscow',
              hour: 'numeric',
              minute: 'numeric',
            })}`
          : '';

      return `${date} ${time}`;
    } else {
      return '';
    }
  }

  return {
    formatingNumber,
    formatingDateTime,
  };
}
