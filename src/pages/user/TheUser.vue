<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<template>
  <BaseContainer>
    <section class="user-panel">
      <div class="wrapper">
        <aside class="sidebar">
          <div class="user-data">
            <BaseAvatar
              src="https://i.pinimg.com/originals/01/c7/b1/01c7b181419e15cc614b2297a0e0b959.jpg"
              width="78"
              height="78"
            />
            <div class="user-data__right">
              <BaseTitle>Валерия Белая</BaseTitle>
              <BaseButton mode="flat">Выход</BaseButton>
            </div>
          </div>

          <nav class="nav">
            <ul class="nav__list">
              <li>
                <RouterLink to="/">Моя информация</RouterLink>
              </li>
              <li>
                <RouterLink to="/">Заказы</RouterLink>
              </li>
            </ul>
          </nav>
          <p>Contact with us</p>
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
  padding: 0 60px 0 30px;
  background: var(--white-color);
  border-radius: 5px;
}

.sidebar {
  padding: 30px 0;
  width: 330px;
  border-right: 1px solid var(--third-color);
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
  margin-bottom: 50px;

  &__list {
    font-size: 22px;

    li {
      &:not(:last-child) {
        margin-bottom: 40px;
      }
    }

    a {
      padding: 20px 0;
    }
  }
}
</style>
