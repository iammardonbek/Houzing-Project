function useReplace(value, name) {
  let url = new URL(window.location.href);
  url.searchParams.set(value, name);
  if (!value) {
    url.searchParams.delete(value);
  }
  return url.search;
}
export default useReplace;
