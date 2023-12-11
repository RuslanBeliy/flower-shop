import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { useFetch } from '@/hooks/useFetch.ts';
import { addComment, fetchFlowerById } from '@/api/requests/flowers.ts';
import { IFlower } from '@/types/flowers.ts';

export const useFullInfoShop = () => {
  const flower = ref<IFlower>();
  const comment = ref('');

  const [requestFlower, statusRequestFlower, errorRequestFlower] =
    useFetch<IFlower>();
  const [requestComment, statusRequestComment] = useFetch<IFlower>();

  const { params } = useRoute();
  const id = params.id as string;

  onMounted(async () => {
    flower.value = await requestFlower(() => fetchFlowerById(id));
  });

  const rules = {
    comment: {
      required,
    },
  };

  const v$ = useVuelidate(rules, { comment });

  const onSubmit = async () => {
    if (v$.value.$error) return;

    const res = await requestComment(() => addComment(id, comment.value));

    if (statusRequestComment.value === 'error') return;

    comment.value = '';
    flower.value = res;
  };

  return {
    flower,
    errorRequestFlower,
    statusRequestFlower,
    statusRequestComment,
    comment,
    onSubmit,
  };
};
