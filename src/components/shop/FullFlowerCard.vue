<script setup lang="ts">
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import StarIcon from '@/components/icons/StarIcon.vue';
</script>

<template>
  <div class="full-flower">
    <div class="full-flower__img">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flower_jtca001.jpg/1600px-Flower_jtca001.jpg"
        alt=""
      />
    </div>
    <div class="info">
      <BaseTitle tag="h2">Sun flower</BaseTitle>
      <p>
        Make every day brighter with our abundant bouquet of fresh sunflowers.
        These radiant, long-lasting blooms bring that
        just-picked-from-the-meadow feeling to birthdays, get well wishes, or
        any day you want to make someone you care about smile.
      </p>

      <div class="info__rating">
        <div class="info__rating-count">
          <StarIcon />
          <strong>4.5/5</strong>
        </div>
        <span>(101 people opinion)</span>
      </div>

      <div class="info__footer">
        <BaseTitle>100$/each</BaseTitle>
        <BaseButton mode="add-cart">Add to cart</BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.full-flower {
  padding: 30px;
  background: var(--white-color);
  display: flex;
  gap: 60px;

  &__img {
    flex-shrink: 0;
    width: 250px;
    height: 220px;
    border-radius: 5px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.info {
  flex-grow: 1;
  p {
    margin: 20px 0 10px;
    font-size: 22px;
    line-height: 35px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__rating {
    margin-bottom: 30px;
  }

  &__rating-count {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 5px;

    svg {
      fill: var(--primary-color);
    }

    strong {
      color: var(--black-color);
    }
  }
}
</style>
