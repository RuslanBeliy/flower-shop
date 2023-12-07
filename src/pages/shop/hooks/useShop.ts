import { useFetch } from '@/hooks/useFetch.ts';
import { fetchFlowers, FlowersRequestParams } from '@/api/requests/flowers.ts';
import { computed, onMounted, reactive, watch } from 'vue';
import { ResponseFlowers } from '@/types/flowers.ts';
import { getSearchParams, setSearchParams } from '@/utils/searchParams.ts';
import { handlerFlowersParams } from '@/utils/handlerFlowersParams.ts';

export const useShop = () => {
  const { data, request, error, status } = useFetch<
    ResponseFlowers,
    FlowersRequestParams
  >('Ошибка при загрузке списка цветов');
  const requestParams = reactive<FlowersRequestParams>({
    sortBy: 'price-asc',
    page: 1,
  });

  onMounted(async () => {
    const params = handlerFlowersParams(getSearchParams());
    Object.assign(requestParams, params);
    await request(() => fetchFlowers(params));
  });

  const handleRequest = async (updatedParams: FlowersRequestParams) => {
    Object.assign(requestParams, updatedParams);
    setSearchParams(requestParams);
    await request(() => fetchFlowers(requestParams));
  };

  const flowers = computed(() => data.value?.flowers);
  const countPage = computed(() => {
    if (!data.value) return 0;
    return Math.ceil(data.value.countItems / 12);
  });

  watch(
    () => requestParams.page,
    () => {
      scrollTo({ top: 0, behavior: 'smooth' });
    },
  );

  return {
    flowers,
    error,
    status,
    request,
    countPage,
    handleRequest,
    requestParams,
  };
};
