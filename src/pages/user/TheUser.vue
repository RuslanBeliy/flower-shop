<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
import UserIcon from '@/components/icons/UserIcon.vue';
import BagIcon from '@/components/icons/BagIcon.vue';
import { routes } from '@/router.ts';
import QuestionIcon from '@/components/icons/QuestionIcon.vue';
import { useAuthStore } from '@/stores/auth.ts';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';

const store = useAuthStore();
const { user } = storeToRefs(store);
const { logoutUser } = store;

const router = useRouter();

const logout = () => {
  logoutUser();
  router.replace({ name: routes.login });
};
</script>

<template>
  <BaseContainer>
    <section v-if="user" class="user-panel">
      <div class="wrapper">
        <aside class="sidebar">
          <div class="user-data">
            <BaseAvatar :src="user.avatarUrl" text="S" width="78" height="78" />
            <div class="user-data__right">
              <BaseTitle>{{ user.userName }}</BaseTitle>
              <BaseButton @click="logout" mode="flat">Выход</BaseButton>
            </div>
          </div>

          <nav class="nav">
            <ul class="nav__list">
              <li>
                <RouterLink :to="{ name: routes.userInfo }"
                  ><UserIcon /> Моя информация</RouterLink
                >
              </li>
              <li>
                <RouterLink :to="{ name: routes.userOrders }"
                  ><BagIcon /> Заказы</RouterLink
                >
              </li>
            </ul>
          </nav>
          <a href="#" @click.prevent class="sidebar__contact"
            ><QuestionIcon /> Связаться с нами</a
          >
        </aside>

        <div class="main-info">
          <RouterView />
        </div>
      </div>
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.user-panel {
  padding: 80px 0;
}

.wrapper {
  display: flex;
  background: var(--white-color);
  border-radius: 5px;
}

.sidebar {
  position: relative;
  padding: 30px;
  width: 330px;
  flex-shrink: 0;

  &__contact {
    position: absolute;
    left: 30px;
    bottom: 30px;
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 22px;
  }
}

.user-data {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 70px;

  button {
    margin-top: 5px;
    font-size: 18px;

    &:hover {
      color: var(--black-color);
    }
  }
}

.nav {
  margin-bottom: 100px;

  &__list {
    padding-left: 30px;
    font-size: 22px;

    li {
      &:not(:last-child) {
        margin-bottom: 40px;
      }
    }

    a {
      gap: 10px;
      padding: 15px 0;
      transition: all 0.2s ease;

      &:hover {
        color: var(--primary-color);

        svg {
          fill: var(--primary-color);
          transition: all 0.2s ease;
        }
      }

      svg {
        width: 20px;
        height: 22px;
        fill: var(--secondary-color);
        margin-right: 5px;
      }

      &.router-link-active {
        color: var(--primary-color);

        svg {
          fill: var(--primary-color);
        }
      }
    }
  }
}

.main-info {
  flex-grow: 1;
}
</style>
