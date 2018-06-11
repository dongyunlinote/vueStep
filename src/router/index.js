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
import Slots from '@/components/slot/slots'
import FormBase from '@/components/formBase/formBase'
import PropertyWatch from '@/components/propertyWatch/propertyWatch'
import ClassStyle from '@/components/classStyle/classStyle'
import SoltVueOne from '@/components/slot/soltsOne'
import SoltVueTwo from '@/components/slot/soltsTwo'
import SoltVueThree from '@/components/slot/soltsThree'

Vue.component('SubMenu',SubMenu)
Vue.component('CountMapState',CountMapState)
Vue.component('CountMapMutations',CountMapMutations)
Vue.component('CountMapGetters',CountMapGetters)
Vue.component('CountMapActions',CountMapActions)
Vue.component('Numbers',Numbers)
Vue.component('Counter',Counter)
Vue.component('Slots',Slots)
Vue.component('FormBase',FormBase)
Vue.component('PropertyWatch',PropertyWatch)
Vue.component('ClassStyle',ClassStyle)
Vue.component('SoltVueOne',SoltVueOne)
Vue.component('SoltVueTwo',SoltVueTwo)
Vue.component('SoltVueThree',SoltVueThree)

Vue.use(Router)
export default new Router({
  routes: [
    {
      redirect: '/storeCount/Count',
      path: '/',
      meta:{ title: "aaa"}
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
      path: '/slot/slots',
      name: 'Slots',
      component: Slots
    },
    {
      path: '/formBase/formBase',
      name: 'FormBase',
      component: FormBase
    },{
      path: '/propertyWatch/propertyWatch',
      name: 'PropertyWatch',
      component: PropertyWatch
    },{
      path: '/classStyle/classStyle',
      name: 'ClassStyle',
      component: ClassStyle
    },
  ]
})
