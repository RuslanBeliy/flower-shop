import { useFetch } from '@/hooks/useFetch.ts';
import { fetchFlowers, FlowersRequestParams } from '@/api/requests/flowers.ts';
import { computed, onMounted, reactive, ref, watch } from 'vue';
import { IFlower, ResponseFlowers } from '@/types/flowers.ts';
import { getSearchParams, setSearchParams } from '@/utils/searchParams.ts';
import { handlerFlowersParams } from '@/utils/handlerFlowersParams.ts';

export const useShop = () => {
  const flowers = ref<IFlower[]>();
  const countPage = ref(0);
  const [requestFlowers, statusRequestFlowers, errorRequestFlowers] =
    useFetch<ResponseFlowers>();
  const requestParams = reactive<FlowersRequestParams>({
    sortBy: 'price-asc',
    page: 1,
  });

  const isShowPagination = computed(
    () => statusRequestFlowers.value !== 'loading' && countPage.value > 1,
  );

  onMounted(async () => {
    const params = handlerFlowersParams(getSearchParams());
    Object.assign(requestParams, params);
    const res = await requestFlowers(() => fetchFlowers(params));
    flowers.value = res?.flowers;
    countPage.value = res ? Math.ceil(res.countItems / 12) : 0;
  });

  watch(
    () => requestParams.page,
    () => {
      scrollTo({ top: 0, behavior: 'smooth' });
    },
  );

  const handleRequest = async (updatedParams: FlowersRequestParams) => {
    Object.assign(requestParams, updatedParams);
    setSearchParams(requestParams);
    const res = await requestFlowers(() => fetchFlowers(requestParams));
    flowers.value = res?.flowers;
    countPage.value = res ? Math.ceil(res.countItems / 12) : 0;
  };

  return {
    flowers,
    errorRequestFlowers,
    statusRequestFlowers,
    requestFlowers,
    countPage,
    requestParams,
    isShowPagination,
    handleRequest,
  };
};
