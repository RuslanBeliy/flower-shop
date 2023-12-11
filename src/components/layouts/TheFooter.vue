<script setup lang="ts">
import LocationIcon from '@/components/icons/LocationIcon.vue';
import MailIcon from '@/components/icons/MailIcon.vue';
import PhoneIcon from '@/components/icons/PhoneIcon.vue';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseLogo from '@/components/ui/BaseLogo.vue';
</script>

<template>
  <footer class="footer">
    <BaseContainer class="wrap">
      <div class="logo-block">
        <BaseLogo white />
        <p>
          Хотите заказать доставку цветов в Москве? Тогда Flower Shop – именно
          то, что вы ищете. Мы предлагаем большой выбор букетов и композиций из
          свежих цветов. Все композиции на сайте авторские и отвечают тенденциям
          современной флористики. Здесь вы найдёте букеты различной формы и
          упаковки: от классической крафт-бумаги до техники корейской упаковки
          цветной плёнкой.
        </p>
      </div>

      <div class="contact">
        <h3 class="title">Контакты</h3>
        <ul class="contact__list">
          <li><LocationIcon /> г. Москва, ул. Печорская, д.16</li>
          <li>
            <a href="mailto:support@Flowers.com">
              <MailIcon /> support@Flowers.com
            </a>
          </li>
          <li>
            <a href="tel:+1 236 5489"><PhoneIcon /> +7(495) 128-11-90</a>
          </li>
        </ul>
      </div>
    </BaseContainer>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 40px 0;
  background: var(--secondary-bg-color);
}

.wrap {
  display: flex;
  gap: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
}

.logo-block {
  margin-right: auto;

  p {
    margin-top: 15px;
    color: #d9d9d9;
    font-size: 18px;
    line-height: 30px;
  }
}

.title {
  color: var(--white-color);
  font-size: 22px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
}

.contact {
  flex-shrink: 0;
  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;

    li {
      &:first-child {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      a {
        display: flex;
        align-items: center;
        gap: 10px;
        transition: color 0.2s ease;

        &:hover,
        &:active {
          color: var(--white-color);

          svg {
            fill: var(--white-color);
          }
        }

        svg {
          fill: var(--secondary-color);
          transition: fill 0.2s ease;
        }
      }
    }
  }
}
</style>
