import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
// Vue.config.devtools = false;
// Vue.config.debug = false;
import store from './store';

new Vue({
    store,
    render: h => h(App),
}).$mount('#app');

Vue.directive('focus', {
    inserted: function (el) {
        el.focus();
    },
});