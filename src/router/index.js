import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
import DisPlayPageMain from '@/components/DisPlayPageMain'
import DisPlayPageInfor from '@/components/DisPlayPageInfor'
import DisPlayPageCharge from '@/components/DisPlayPageCharge'

import Information from '@/components/Business/Information'
import InforNew from '@/components/Business/Informations/InforNew'
import InforEdit from '@/components/Business/Informations/InforEdit'

import Charge from '@/components/Business/Charge'
import ChargeReady from '@/components/Business/Charges/ChargeReady'
import ChargeEnter from '@/components/Business/Charges/ChargeEnter'
import ChargeCheck from '@/components/Business/Charges/ChargeCheck'
import ChargeCalcu from '@/components/Business/Charges/ChargeCalcu'
import ChargeAudit from '@/components/Business/Charges/ChargeAudit'


import axios from 'axios'


Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            component: Home,
            children: [{
                    path: '',
                    component: DisPlayPageMain
                },
                {
                    path: 'infor',
                    component: Information,
                    meta: {
                        requireAuth: true,

                    },
                    children: [{
                            path: '',
                            component: DisPlayPageInfor
                        },
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
                    meta: {
                        requireAuth: true
                    },
                    children: [{
                            path: '',
                            component: DisPlayPageCharge
                        },
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

router.beforeEach(async(to, from, next) => {

    if (to.matched.some(record => record.meta.requireAuth)) {

        // 之后通过方法查看用户是否有权限
        const user = window.sessionStorage.getItem('user')

        //用户信息为空
        if (!user) {
            console.log('测试无权限，跳转到登录页');
            next('/login')

        } else {
            next();
        }

    } else {
        next();
    }
})

export default router