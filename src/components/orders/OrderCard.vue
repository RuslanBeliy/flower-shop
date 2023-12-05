<script setup lang="ts"></script>

<template>
  <li class="order-card">
    <div class="header">
      <span>order code <strong>96541</strong></span>
      <span>date <strong>2022/09/01</strong></span>
      <span>price <strong>2500$</strong></span>
    </div>
    <div class="orders">
      <div class="orders__img">
        <img
          src="https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg"
          alt=""
        />
      </div>
      <div class="orders__img">
        <img
          src="https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg"
          alt=""
        />
      </div>
      <div class="orders__img">
        <img
          src="https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg"
          alt=""
        />
      </div>
      <div class="orders__img">
        <img
          src="https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg"
          alt=""
        />
      </div>
      <div class="orders__img">
        <img
          src="https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg"
          alt=""
        />
      </div>
      <div class="orders__img">
        <img
          src="https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg"
          alt=""
        />
      </div>
      <div class="orders__img">
        <img
          src="https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg"
          alt=""
        />
      </div>
      <div class="orders__img">
        <img
          src="https://w.forfun.com/fetch/e4/e4505ab5bb7e47d7a21a105205872dff.jpeg"
          alt=""
        />
      </div>
    </div>
  </li>
</template>

<style scoped lang="scss">
.header {
  margin-bottom: 25px;
  span {
    margin-right: 30px;
    font-size: 20px;

    strong {
      font-weight: 400;
      color: var(--black-color);
    }
  }
}

.orders {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  &__img {
    width: 110px;
    height: 110px;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
