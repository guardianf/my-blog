import Vue from 'vue';

import '@/styles/main.scss';

import Love from './Love.vue';

new Vue({
  el: '#app',
  render: h => h (Love)
});
