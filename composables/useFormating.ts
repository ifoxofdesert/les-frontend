export default function useFormating() {
  function formatingNumber(number: number): string | number {
    return number > 9 ? number : `0${number}`;
  }

  function formatingDateTime(dateTime: string) {
    if (dateTime) {
      const date = new Date(Date.parse(dateTime)).toLocaleString('ru', {
        timeZone: 'Europe/Moscow',
        month: 'long',
        day: 'numeric',
      });

      const time = /:/.test(dateTime)
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
