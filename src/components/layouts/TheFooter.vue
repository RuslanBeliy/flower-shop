<script setup lang="ts">
import LocationIcon from '@/components/icons/LocationIcon.vue';
import MainIcon from '@/components/icons/MainIcon.vue';
import PhoneIcon from '@/components/icons/PhoneIcon.vue';
</script>

<template>
  <footer class="footer">
    <BaseContainer class="wrap">
      <div class="logo-block">
        <BaseLogo white />
        <p>
          Some random stuff about flower shop and some more info cuz this box
          had to get fill Some random stuff about flower shop and some more info
          cuz this box had to get fill Some random stuff about flower shop and
          some more info cuz this box had to get fill
        </p>
      </div>

      <nav class="nav">
        <h3 class="title">Links</h3>
        <ul class="nav__list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>

      <div class="contact">
        <h3 class="title">Contact</h3>
        <ul class="contact__list">
          <li><LocationIcon /> 26985 Brighton Lane, Lake Forest, CA</li>
          <li>
            <a href="mailto:support@Flowers.com">
              <MainIcon /> support@Flowers.com
            </a>
          </li>
          <li>
            <a href="tel:+1 236 5489"><PhoneIcon /> +1 236 5489</a>
          </li>
        </ul>
      </div>
    </BaseContainer>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: 55px 0;
  background: var(--secondary-bg-color);
}

.wrap {
  display: flex;
  gap: 100px;
}

.logo-block {
  max-width: 380px;
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

.nav {
  &__list {
    font-size: 18px;
    line-height: 30px;

    li {
      a {
        transition: color 0.2s ease;

        &:hover,
        &:active {
          color: var(--white-color);
        }
      }
    }
  }
}

.contact {
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
