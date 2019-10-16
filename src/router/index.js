import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'

import Information from '@/components/Business/Information'
import InforNew from '@/components/Business/Informations/InforNew'
import InforEdit from '@/components/Business/Informations/InforEdit'

import Charge from '@/components/Business/Charge'
import ChargeReady from '@/components/Business/Charges/ChargeReady'
import ChargeEnter from '@/components/Business/Charges/ChargeEnter'
import ChargeCheck from '@/components/Business/Charges/ChargeCheck'
import ChargeCalcu from '@/components/Business/Charges/ChargeCalcu'
import ChargeAudit from '@/components/Business/Charges/ChargeAudit'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'infor',
          component: Information,
          children: [
            {
              path: 'new',
              component: InforNew
            },
            {
              path: 'edit',
              component: InforEdit
            }
          ]
        },
        {
          path: 'charge',
          component: Charge,
          children: [
            {
              path: 'ready',
              component: ChargeReady
            },
            {
              path: 'enter',
              component: ChargeEnter
            },
            {
              path: 'check',
              component: ChargeCheck
            },
            {
              path: 'calcu',
              component: ChargeCalcu
            },
            {
              path: 'audit',
              component: ChargeAudit
            }

          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      component: NotFound
    }

  ]
})
