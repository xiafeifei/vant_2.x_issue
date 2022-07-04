import Vue from 'vue'
import App from './App.vue'
import { Button } from 'vant';
import { Form } from 'vant';
import { Field } from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
