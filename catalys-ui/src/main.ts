import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import CourseDetailsView from './components/CourseDetailsView.vue'
import PlayerView from './components/PlayerView.vue'
import AccountRegisterView from './components/AccountRegisterView.vue'
import AccountFreeTrialView from './components/AccountFreeTrialView.vue'
import PrimeVue from 'primevue/config';
import Ripple  from 'primevue/ripple';
import StyleClass from 'primevue/styleclass';
import BadgeDirective from 'primevue/badgedirective';

import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';     

const app = createApp(App);

app.use(PrimeVue, { ripple : true });

// Register router
const routes = [
  { path: '/', redirect: '/portal' },
  { path: '/portal', component: CourseDetailsView },
  { path: '/player', component: PlayerView },
  { path: '/account/trial', component: AccountFreeTrialView },
  { path: '/account/register', component: AccountRegisterView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)

app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('badge', BadgeDirective);

app.mount('#app');