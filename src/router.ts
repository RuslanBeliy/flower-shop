import { createRouter, createWebHistory } from 'vue-router';
import TheMain from '@/pages/main/TheMain.vue';
import TheShop from '@/pages/shop/TheShop.vue';
import TheBlog from '@/pages/blog/TheBlog.vue';
import TheCart from '@/pages/cart/TheCart.vue';
import TheUser from '@/pages/user/TheUser.vue';
import TheFullInfoShop from '@/pages/shop-item/TheFullInfoShop.vue';

export const routes = {
  main: 'main',
  shop: 'shop',
  blog: 'blog',
  cart: 'cart',
  userPanel: 'user-panel',
  shopFullInfo: 'shop-full-info',
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: routes.main, component: TheMain },
    { path: '/shop', name: routes.shop, component: TheShop },
    {
      path: '/shop/:id',
      name: routes.shopFullInfo,
      component: TheFullInfoShop,
    },
    { path: '/blog', name: routes.blog, component: TheBlog },
    { path: '/cart', name: routes.cart, component: TheCart },
    { path: '/user-panel', name: routes.userPanel, component: TheUser },
  ],
});

export { router };
