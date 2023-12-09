import { createRouter, createWebHistory } from 'vue-router';
import TheMain from '@/pages/main/TheMain.vue';
import TheShop from '@/pages/shop/TheShop.vue';
import TheBlog from '@/pages/blog/TheBlog.vue';
import TheCart from '@/pages/cart/TheCart.vue';
import TheUser from '@/pages/user/TheUser.vue';
import TheFullInfoShop from '@/pages/shop-item/TheFullInfoShop.vue';
import TheFullBlog from '@/pages/full-blog/TheFullBlog.vue';
import TheLogin from '@/pages/login/TheLogin.vue';
import TheRegister from '@/pages/register/TheRegister.vue';
import TheUserInformation from '@/pages/user/user-information/TheUserInformation.vue';
import TheUserOrders from '@/pages/user/user-orders/TheUserOrders.vue';
import NotFound from '@/pages/NotFound.vue';
import { useAuthStore } from './stores/auth';

export const routes = {
  main: 'main',
  shop: 'shop',
  blog: 'blog',
  cart: 'cart',
  userPanel: 'user-panel',
  userInfo: 'user-info',
  userOrders: 'user-orders',
  shopFullInfo: 'shop-full-info',
  blogFullInfo: 'blog-full-info',
  login: 'login',
  register: 'register',
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
    { path: '/blog/:id', name: routes.blogFullInfo, component: TheFullBlog },
    { path: '/cart', name: routes.cart, component: TheCart },
    {
      path: '/user-panel',
      name: routes.userPanel,
      component: TheUser,
      redirect: { name: routes.userInfo },
      meta: { requireAuth: true },
      children: [
        { path: 'info', name: routes.userInfo, component: TheUserInformation },
        { path: 'orders', name: routes.userOrders, component: TheUserOrders },
      ],
    },
    {
      path: '/login',
      name: routes.login,
      component: TheLogin,
      meta: { requireLogout: true },
      beforeEnter() {
        const store = useAuthStore();
        if (store.isAuth) return { name: routes.userPanel };
      },
    },
    {
      path: '/register',
      name: routes.register,
      component: TheRegister,
      meta: { requireLogout: true },
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) return savedPosition;

    return { left: 0, top: 0 };
  },
});

router.beforeEach((to) => {
  const store = useAuthStore();

  if (to.meta.requireAuth && !store.isAuth) {
    return { name: routes.login };
  }

  if (to.meta.requireLogout && store.isAuth) {
    return { name: routes.main };
  }
});

export { router };
