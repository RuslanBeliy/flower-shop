<script setup lang="ts">
import FilterIcon from '@/components/icons/FilterIcon.vue';
import SortIcon from '@/components/icons/SortIcon.vue';
import SearchIcon from '@/components/icons/SearchIcon.vue';
</script>

<template>
  <div class="filter">
    <BaseButton mode="flat" class="filter__handler">
      <FilterIcon />
      <span>Filtering</span>
    </BaseButton>
    <div class="filter__search">
      <input type="text" placeholder="Search..." />
      <SearchIcon />
    </div>
    <BaseButton mode="flat" class="filter__handler">
      <SortIcon />
      <span>Cheep</span>
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
.filter {
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

  &__search {
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

  &__handler {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
