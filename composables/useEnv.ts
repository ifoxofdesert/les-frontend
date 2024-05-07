export default function useEnv() {
  const config = useRuntimeConfig();

  return config.public;
}
