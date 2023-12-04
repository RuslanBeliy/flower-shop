<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  tag?: 'h1' | 'h2' | 'h3';
  size?: 'm' | 'l';
  line?: boolean;
  center?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h3',
  size: 'm',
  line: false,
  center: false,
});

const classes = computed(() => {
  return [
    `title size-${props.size}`,
    { line: props.line, center: props.center },
  ];
});
</script>

<template>
  <Component :is="tag" :class="classes">
    <slot />
  </Component>
</template>

<style scoped lang="scss">
.title {
  position: relative;
  color: var(--black-color);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.line {
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 165px;
    height: 2px;
    background: var(--third-color);
  }

  &::after {
    transform: translate(30px, 15px);
  }

  &::before {
    transform: translate(-200px, 15px);
  }
}

.center {
  text-align: center;
}

.size-m {
  font-size: 22px;
}

.size-l {
  font-size: 32px;
}
</style>
