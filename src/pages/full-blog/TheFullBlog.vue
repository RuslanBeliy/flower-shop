<script setup lang="ts">
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import EyeIcon from '@/components/icons/EyeIcon.vue';
import HeartIcon from '@/components/icons/HeartIcon.vue';
import BaseButton from '@/components/ui/BaseButton.vue';
</script>

<template>
  <BaseContainer>
    <section class="full-blog">
      <div class="wrapper">
        <div class="img">
          <img
            src="https://w.forfun.com/fetch/24/245ada9ee8c2ec7b56e7f9c7e7060986.jpeg"
            alt=""
          />
        </div>
        <div class="info">
          <BaseTitle tag="h1" size="l" center>Читай этот заголовок</BaseTitle>
          <p>
            Съемочные будни. Затеял я пойти к скале Манская баба, попытаться
            сотворить несколько шыдевров в вечернем освещении. Засунул в Мавик-3
            флешку на 256 гигабайт, уложил в рюкзак запас аккумуляторов и бодро
            захрустел по морозному снегу. Часа через полтора, прямо к режимному
            освещению, прибыл на место. Переоделся: сменил мокрую от пота рубаху
            на сухую - долго ведь стоять неподвижно на морозе и ветре с пультом
            в руках. Но что-то пошло не так: квадрокоптер заявил, что мне надо
            войти в свой аккаунт. А я из него не выходил, вайфай последние три
            месяца вообще не включал ни разу. А тут в тайге как теперь без
            интернета войдешь? Без входа можно летать только на высоту до 20
            метров и в радиусе 40 метров. Вот и поснимал! Но надо попытаться
            хотя бы... 20 метров в высоту - это даже из крон сосен и пихт не
            вылетишь. Полез я по глубокому снегу на бедро к Манской бабе, чтобы
            ближе к вершинам деревьев быть. Опять вспотел. А кроны деревьев все
            равно небо закрывают. Отключил сенсоры препятствий и сложным
            маневром вывел аппарат на открытое место перед самой головой Бабы.
            Выше взлететь невозможно и дальше отлететь тоже. Вариантов немного,
            щелкнул несколько раз, и расстроенный пошел по вечерним сумеркам к
            своему Нарыму. В тепле рассмотрел пару полученных снимков - не все
            так плохо! Может даже мне и повезло, что не смог отлететь от столба
            на сотню метров, как я делаю обычно... Знатоки, сможете ли
            подсказать, каким образом Мавики (и 2-й и 3-й) выходят из аккаунта
            без связи с интернетом, и можно ли этому противостоять?
          </p>
          <div class="actions">
            <div class="actions__item">
              <EyeIcon />
              <span>208</span>
            </div>
            <BaseButton mode="flat" class="actions__item">
              <HeartIcon />
              <span>15</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </section>
  </BaseContainer>
</template>

<style scoped lang="scss">
.full-blog {
  padding: 40px 0 100px;
}

.wrapper {
  padding: 40px;
  display: flex;
  gap: 40px;
  background: var(--white-color);
  border-radius: 10px;
}

.img {
  width: 400px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.info {
  flex-grow: 1;

  p {
    margin: 40px 0;
    font-size: 18px;
    line-height: 25px;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;

  &__item {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  button {
    color: var(--primary-color);
    svg {
      fill: var(--primary-color);
    }
  }
}
</style>
