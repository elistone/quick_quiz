import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const DEFAULT_TITLE = 'Quiz Now';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '',
      metaTags: [
        {
          name: 'description',
          content: 'The fastest way to play a quiz all around the world.',
        },
        {
          property: 'og:description',
          content: 'The fastest way to play a quiz all around the world.',
        },
      ],
    },
  },
  {
    path: '/join',
    name: 'Join',
    component: () => import(/* webpackChunkName: "buzzer" */ '../views/Join.vue'),
    meta: {
      title: '',
      metaTags: [
        {
          name: 'description',
          content: 'The fastest way to play a quiz all around the world.',
        },
        {
          property: 'og:description',
          content: 'The fastest way to play a quiz all around the world.',
        },
      ],
    },
  },
  {
    path: '/buzzer',
    name: 'Buzzer',
    component: () => import(/* webpackChunkName: "buzzer" */ '../views/Buzzer.vue'),
    meta: {
      title: 'Select your buzzer',
      metaTags: [
        {
          name: 'description',
          content: 'Select your buzzer',
        },
        {
          property: 'og:description',
          content: 'Select your buzzer',
        },
      ],
    },
  },
  {
    path: '/play',
    name: 'Play',
    component: () => import(/* webpackChunkName: "play" */ '../views/Play.vue'),
    meta: {
      title: 'Let\'s play!',
      metaTags: [
        {
          name: 'description',
          content: 'You are now playing the quiz now application.',
        },
        {
          property: 'og:description',
          content: 'You are now playing the quiz now application.',
        },
      ],
    },
  },
  {
    path: '/host',
    name: 'Host',
    component: () => import(/* webpackChunkName: "play" */ '../views/Host.vue'),
    meta: {
      title: 'Host a game?',
      metaTags: [
        {
          name: 'description',
          content: 'Host your own quiz!',
        },
        {
          property: 'og:description',
          content: 'Host your own quiz!',
        },
      ],
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first,
  // finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles,
  // nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  document.title = `${DEFAULT_TITLE}`;
  if (nearestWithTitle) document.title = `${DEFAULT_TITLE} - ${nearestWithTitle.meta.title}`;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map((tagDef) => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach((key) => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create, so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  }).forEach((tag) => document.head.appendChild(tag));

  next();
  return true;
});

export default router;
