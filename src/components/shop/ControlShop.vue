<script setup lang="ts">
import FilterIcon from '@/components/icons/FilterIcon.vue';
import SortIcon from '@/components/icons/SortIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
import { ref } from 'vue';
import BaseButton from '@/components/ui/BaseButton.vue';

const showFilter = ref(false);
const toggleFilter = () => {
  showFilter.value = !showFilter.value;
};
</script>

<template>
  <div class="control">
    <div class="filter">
      <BaseButton @click="toggleFilter" mode="flat" class="filter__btn">
        <FilterIcon />
        <span>Filtering</span>
      </BaseButton>
      <Transition>
        <div v-if="showFilter" class="filter__backdrop">
          <BaseButton mode="flat">Тюльпаны</BaseButton>
          <BaseButton mode="flat">Розы</BaseButton>
          <BaseButton mode="flat">Архидеи</BaseButton>
        </div>
      </Transition>
    </div>

    <div class="search">
      <input type="text" placeholder="Search..." />
      <SearchIcon />
    </div>

    <BaseButton mode="flat" class="sort">
      <SortIcon />
      <span>Cheep</span>
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
  gap: 5px;
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
