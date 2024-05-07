import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
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
app.use(ToastService);

app.component('Button', Button);
app.component('Toast', Toast);

app.directive('ripple', Ripple);
app.directive('styleclass', StyleClass);
app.directive('badge', BadgeDirective);

app.mount('#app');