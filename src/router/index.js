import Vue from 'vue'
import Router from 'vue-router'

import Count from '@/components/storeCount/Count'
import CountMapState from '@/components/storeCount/CountMapState'
import CountMapMutations from '@/components/storeCount/CountMapMutations'
import CountMapGetters from '@/components/storeCount/CountMapGetters'
import CountMapActions from '@/components/storeCount/CountMapActions'
import SubMenu from '@/components/layout/submenu'
import Numbers from '@/components/number/number'
import Counter from '@/components/number/counter'
import SlotBase from '@/components/slot/slotBase'

Vue.component('SubMenu',SubMenu)
Vue.component('CountMapState',CountMapState)
Vue.component('CountMapMutations',CountMapMutations)
Vue.component('CountMapGetters',CountMapGetters)
Vue.component('CountMapActions',CountMapActions)
Vue.component('Numbers',Numbers)
Vue.component('Counter',Counter)
Vue.component('SlotBase',SlotBase)

Vue.use(Router)
export default new Router({
  routes: [
    {
      redirect: '/storeCount/Count',
      path: '/',
    },
    {
      path: '/storeCount/Count',
      name: 'Count',
      component: Count
    },
    {
      path: '/storeCount/CountMapState',
      name: 'CountMapState',
      component: CountMapState
    },
    {
      path: '/storeCount/CountMapMutations',
      name: 'CountMapMutations',
      component: CountMapMutations
    },
    {
      path: '/storeCount/CountMapGetters',
      name: 'CountMapGetters',
      component: CountMapGetters
    },
    {
      path: '/storeCount/CountMapActions',
      name: 'CountMapActions',
      component: CountMapActions
    },
    {
      path: '/layout/submenu',
      name: 'SubMenu',
      component: SubMenu
    },
    {
      path: '/number/number',
      name: 'Numbers',
      component: Numbers
    },
    {
      path: '/slot/slotBase',
      name: 'SlotBase',
      component: SlotBase
    }
  ]
})
