import { FlowersRequestParams } from '@/api/requests/flowers.ts';

export const handlerFlowersParams = (obj: Record<string, unknown>) => {
  const res: FlowersRequestParams = {};

  if (obj.page && typeof obj.page === 'string') res.page = +obj.page;
  if (obj.search && typeof obj.search === 'string') res.search = obj.search;
  if (obj.category && typeof obj.category === 'string')
    res.category = obj.category;
  if (obj.sortBy && typeof obj.sortBy === 'string') res.sortBy = obj.sortBy;

  return res;
};
