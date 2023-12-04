import { createRouter, createWebHistory } from 'vue-router';
import TheMain from '@/pages/main/TheMain.vue';
import TheShop from '@/pages/shop/TheShop.vue';
import TheBlog from '@/pages/blog/TheBlog.vue';
import TheAbout from '@/pages/about/TheAbout.vue';
import TheCart from '@/pages/cart/TheCart.vue';
import TheUser from '@/pages/user/TheUser.vue';

export const routes = {
  main: 'main',
  shop: 'shop',
  blog: 'blog',
  about: 'about',
  cart: 'cart',
  userPanel: 'user-panel',
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: routes.main, component: TheMain },
    { path: '/shop', name: routes.shop, component: TheShop },
    { path: '/blog', name: routes.blog, component: TheBlog },
    { path: '/about', name: routes.about, component: TheAbout },
    { path: '/cart', name: routes.cart, component: TheCart },
    { path: '/user-panel', name: routes.userPanel, component: TheUser },
  ],
});

export { router };
