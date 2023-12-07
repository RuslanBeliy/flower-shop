<script setup lang="ts">
import BaseButton from '@/components/ui/BaseButton.vue';
import { routes } from '@/router.ts';
</script>

<template>
  <section class="hero">
    <div class="hero__left">
      <h1 class="hero__title">Цветы 🌻 это то, что нужно миру</h1>
      <p class="hero__descr">
        Наша миссия – сделать покупку цветов простой и приятной, для того, что
        бы дарить улыбки и радость получателю и заказчику
      </p>
      <BaseButton :to="{ name: routes.shop }">Заказать</BaseButton>
    </div>
    <div class="hero__right">
      <div class="img">
        <img src="/hero/1.png" alt="" />
      </div>
      <div class="img">
        <img src="/hero/2.png" alt="" />
      </div>
      <div class="img">
        <img src="/hero/3.png" alt="" />
      </div>
      <div class="img">
        <img src="/hero/4.png" alt="" />
      </div>
      <div class="img">
        <img src="/hero/5.png" alt="" />
      </div>
      <div class="img">
        <img src="/hero/6.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  padding: 70px 0 100px;
  display: flex;

  &__left {
    max-width: 550px;
    margin-right: auto;
  }

  &__title {
    color: var(--black-color);

    font-size: 60px;
    font-weight: 400;
    line-height: normal;

    margin-bottom: 35px;
  }

  &__descr {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 45px;
  }

  &__right {
    display: flex;
    justify-content: end;
    gap: 20px;
    flex-wrap: wrap;
  }
}
</style>
