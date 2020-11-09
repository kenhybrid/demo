import Vue from 'vue'
import vueDebounce from 'vue-debounce'

Vue.use(vueDebounce)

Vue.use(vueDebounce, {
  listenTo: ['keyup'],
  defaultTime: '300ms'
})
