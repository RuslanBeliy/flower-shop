<script setup lang="ts">
import FilterIcon from '@/components/icons/FilterIcon.vue';
import SortIcon from '@/components/icons/SortIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import { filterFlowers } from '@/constants';
import { ref, computed, watch } from 'vue';
import { debounce } from '@/utils/debounce.ts';

interface Props {
  sortBy?: string;
  search?: string;
  category?: string;
}

const props = defineProps<Props>();
const emits = defineEmits(['get-search', 'set-sort', 'set-category']);

const showFilter = ref(false);

const textSortButton = computed(() =>
  props.sortBy === 'price-asc' ? 'Дешевые' : 'Дорогие',
);

const currentFilter = computed(() => {
  return filterFlowers.find((el) => el.category === props.category)?.label;
});

const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};

const setSearch = debounce((val: string) => {
  if (val.length < 1) {
    emits('get-search');
    return;
  }

  emits('get-search', val.trim());
}, 500);

const setSort = () => {
  const sortBy = props.sortBy === 'price-asc' ? 'price-desc' : 'price-asc';
  emits('set-sort', sortBy);
};

const setCategory = (category?: string) => {
  emits('set-category', category);
  toggleFilter();
};

watch(showFilter, (newValue) => {
  if (newValue) {
    document.body.addEventListener('click', toggleFilter);
    return;
  }
  document.body.removeEventListener('click', toggleFilter);
});
</script>

<template>
  <div class="control">
    <div class="filter">
      <BaseButton @click.stop="toggleFilter" mode="flat" class="filter__btn">
        <FilterIcon />
        <span>{{ currentFilter }}</span>
      </BaseButton>
      <Transition>
        <div v-if="showFilter" class="filter__backdrop">
          <BaseButton
            v-for="el in filterFlowers"
            :key="el.label"
            @click="setCategory(el.category)"
            mode="flat"
            :class="{ active: category === el.category }"
          >
            {{ el.label }}
          </BaseButton>
        </div>
      </Transition>
    </div>

    <div class="search">
      <input
        type="text"
        placeholder="Поиск..."
        :value="search"
        @input="setSearch(($event.target as HTMLInputElement).value)"
      />
      <SearchIcon />
    </div>

    <BaseButton @click="setSort" mode="flat" class="sort">
      <SortIcon :orientation="sortBy === 'price-asc' ? 'up' : undefined" />
      <span>{{ textSortButton }}</span>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  background: var(--white-color);
  border-radius: 5px;
  color: var(--black-color);
  font-size: 18px;
  line-height: normal;
}

.filter {
  position: relative;
  width: 150px;
  &__btn {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__backdrop {
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 50;
    border-radius: 10px;
    background: var(--white-color);
    box-shadow: var(--shadow);

    button {
      font-size: 20px;
      color: var(--black-color);
      padding: 20px;
      width: 100%;
      text-align: left;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: var(--primary-color);
        background: rgba(254, 95, 30, 0.1);
      }

      &.active {
        color: var(--primary-color);
        background: rgba(254, 95, 30, 0.1);
      }
    }
  }
}

.search {
  position: relative;
  width: 490px;

  input {
    width: 100%;
    height: 100%;
    padding: 17px 60px 17px 30px;
    border: 1px solid var(--third-color);
    border-radius: 5px;
    color: var(--secondary-color);
    font-family: Roboto, sans-serif;
    font-size: 18px;
  }

  svg {
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.sort {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
  width: 150px;
}

.v-enter-active {
  animation: backdrop 0.3s ease-in-out;
}

.v-leave-active {
  animation: backdrop 0.3s ease-in-out reverse;
}

@keyframes backdrop {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
