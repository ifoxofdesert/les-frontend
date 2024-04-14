export default function useFormating() {
  function formatingNumber(number: number): string | number {
    return number > 9 ? number : `0${number}`;
  }

  return {
    formatingNumber,
  };
}
