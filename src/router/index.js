import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import studybefore from '../pages/studybefore'
import studyprogress from '../pages/studyprogress'
import studybook from '../pages/studybook'
import studuvideo from '../pages/studuvideo'
import studymore from '../pages/studymore'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/studybefore',
      component: studybefore
    },
    {
      path: '/studyprogress',
      component: studyprogress
    },
    {
      path: '/studybook',
      component: studybook
    },
    {
      path: '/studuvideo',
      component: studuvideo
    },
    {
      path: '/studymore',
      component: studymore
    }
  ]
})
