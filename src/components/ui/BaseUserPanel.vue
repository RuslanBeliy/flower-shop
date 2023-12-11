<script setup lang="ts"></script>

<template>
  <section class="base-panel">
    <div class="header">
      <slot name="header" />
    </div>

    <div class="content">
      <slot />
    </div>
  </section>
</template>

<style scoped lang="scss">
.base-panel {
  border-left: 1px solid var(--third-color);
  height: 100%;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 40px;
  border-bottom: 1px solid var(--third-color);

  @media (max-width: 576px) {
    flex-direction: column;
    //align-items: end;
  }
}

.content {
  padding: 20px 40px;
}
</style>
