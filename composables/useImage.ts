export default function useImage(path: string | undefined) {
  const env = useEnv();

  if (path) {
    return env.MEDIA_URL + path;
  } else {
    return '';
  }
}
