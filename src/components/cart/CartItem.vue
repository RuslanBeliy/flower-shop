<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import TrashIcon from '@/components/icons/TrashIcon.vue';
</script>

<template>
  <li class="cart">
    <div class="cart__img">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flower_jtca001.jpg/1600px-Flower_jtca001.jpg"
        alt=""
      />
    </div>
    <div class="cart__info">
      <div class="cart__info-header">
        <BaseTitle tag="h2">Sun flower</BaseTitle>
        <BaseButton mode="flat">
          <TrashIcon />
        </BaseButton>
      </div>
      <div class="cart__info-footer">
        <div class="cart__count-items">
          <span>init pic 10$</span>
          <div class="cart__control-items">
            <BaseButton mode="flat">-</BaseButton>
            <input type="number" value="1" />
            <BaseButton mode="flat">+</BaseButton>
          </div>
        </div>
        <BaseTitle tag="h2">Total 10$</BaseTitle>
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.cart {
  display: flex;
  gap: 30px;

  &__img {
    width: 146px;
    height: 146px;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__info-header {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
  }

  &__info-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__count-items {
    span {
      font-size: 18px;
      line-height: normal;
    }
  }

  &__control-items {
    margin-top: 5px;
    width: 70px;
    height: 30px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type='number'] {
      -moz-appearance: textfield;
    }

    input {
      padding: 0 1px;
      width: 20px;
      height: 100%;
      border: none;
      outline: none;
      text-align: center;
    }

    button {
      flex-grow: 1;
      height: 100%;
      color: var(--primary-color);
      font-size: 20px;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: var(--primary-color);
        color: var(--white-color);
      }
    }
  }
}
</style>
