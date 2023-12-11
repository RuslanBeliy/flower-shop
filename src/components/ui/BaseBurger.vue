<script setup lang="ts">
interface Props {
  value: boolean;
}

defineProps<Props>();
const emits = defineEmits(['is-open']);
</script>

<template>
  <input
    @change="emits('is-open', ($event.target as HTMLInputElement).checked)"
    type="checkbox"
    id="burger-checkbox"
    class="burger-checkbox"
    :checked="value"
  />
  <label class="burger" for="burger-checkbox"></label>
</template>

<style scoped lang="scss">
.burger-checkbox {
  position: absolute;
  visibility: hidden;
}
.burger {
  cursor: pointer;
  display: none;
  position: relative;
  border: none;
  background: transparent;
  width: 30px;
  height: 26px;

  @media (max-width: 576px) {
    display: block;
  }
}
.burger::before,
.burger::after {
  content: '';
  left: 0;
  position: absolute;
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 10px;
  background: var(--primary-color);
}
.burger::before {
  top: 0;
  box-shadow: 0 11px 0 var(--primary-color);
  transition:
    box-shadow 0.3s 0.15s,
    top 0.3s 0.15s,
    transform 0.3s;
}
.burger::after {
  bottom: 0;
  transition:
    bottom 0.3s 0.15s,
    transform 0.3s;
}
.burger-checkbox:checked + .burger::before {
  top: 11px;
  transform: rotate(45deg);
  box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
  transition:
    box-shadow 0.15s,
    top 0.3s,
    transform 0.3s 0.15s;
}
.burger-checkbox:checked + .burger::after {
  bottom: 11px;
  transform: rotate(-45deg);
  transition:
    bottom 0.3s,
    transform 0.3s 0.15s;
}
</style>
