import { createApp } from 'vue';
import './styles/index.scss';
import App from './App.vue';
import BaseContainer from '@/components/ui/BaseContainer.vue';
import BaseLogo from '@/components/ui/BaseLogo.vue';
import { router } from '@/router.ts';
import BaseButton from '@/components/ui/BaseButton.vue';
import BaseTitle from '@/components/ui/BaseTitle.vue';
import BaseAvatar from '@/components/ui/BaseAvatar.vue';
import BaseRating from '@/components/ui/BaseRating.vue';

const app = createApp(App);

app.use(router);

app.component('BaseContainer', BaseContainer);
app.component('BaseLogo', BaseLogo);
app.component('BaseButton', BaseButton);
app.component('BaseTitle', BaseTitle);
app.component('BaseAvatar', BaseAvatar);
app.component('BaseRating', BaseRating);

app.mount('#app');
