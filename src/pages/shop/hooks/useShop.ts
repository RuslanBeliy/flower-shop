import { useFetch } from '@/hooks/useFetch.ts';
import { fetchFlowers, FlowersRequestParams } from '@/api/requests/flowers.ts';
import { computed, onMounted, reactive, watch } from 'vue';
import { ResponseFlowers } from '@/types/flowers.ts';
import { getSearchParams, setSearchParams } from '@/utils/searchParams.ts';
import { handlerFlowersParams } from '@/utils/handlerFlowersParams.ts';

export const useShop = () => {
  const { data, request, error, status } = useFetch<ResponseFlowers>(
    'Ошибка при загрузке списка цветов',
  );
  const requestParams = reactive<FlowersRequestParams>({
    sortBy: 'price-asc',
    page: 1,
  });

  const flowers = computed(() => data.value?.flowers);
  const countPage = computed(() => {
    if (!data.value) return 0;
    return Math.ceil(data.value.countItems / 12);
  });
  const isShowPagination = computed(
    () => !!flowers.value?.length && countPage.value > 1,
  );

  onMounted(async () => {
    const params = handlerFlowersParams(getSearchParams());
    Object.assign(requestParams, params);
    await request(() => fetchFlowers(params));
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
    await request(() => fetchFlowers(requestParams));
  };

  return {
    flowers,
    error,
    status,
    request,
    countPage,
    requestParams,
    isShowPagination,
    handleRequest,
  };
};
