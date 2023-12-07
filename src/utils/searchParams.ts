export const setSearchParams = (params: Record<string, unknown>) => {
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);

  Object.entries(params).forEach(([key, val]) => {
    if (typeof val === 'string') searchParams.set(key, val);
    if (typeof val === 'number') searchParams.set(key, val.toString());
    if (typeof val === 'undefined') searchParams.delete(key);
  });
  url.search = searchParams.toString();
  window.history.pushState({ path: url.href }, '', url.href);
};

export const getSearchParams = () => {
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  return [...searchParams].reduce<Record<string, any>>((acc, [key, val]) => {
    acc[key] = val;
    return acc;
  }, {});
};
