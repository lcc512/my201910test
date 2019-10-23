import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({

    // 存放全局状态
    state: {
        count: 1,
        user: JSON.parse(window.sessionStorage.getItem('user'))
    },

    getters: {

    },

    // 通过mutations里面的方法来访问处理state，一般用来实现关于数据的简单实现逻辑
    // mutations只能用同步方法，不能使用异步方法，（actions可以）
    mutations: {

        increment(state) {
            state.count += 1

        },
        decrement(state, step) {
            state.count -= step

        },

        // 保存登录信息
        SET_USER(state, data) {
            state.user = data;
            window.sessionStorage.setItem('user', JSON.stringify(data))
        },

        // 退出登录信息
        LOGOUT(state) {
            state.user = null;
            window.sessionStorage.removeItem('user');
        }
    },

    // 如果是复杂的数据处理，一般在这里面写，不直接写在mutations里
    // 另外，这里可以用异步方法
    actions: {

        async myIncrease(context) {
            context.commit('increment', 2)

            const products = [1, 2, 3, 4, 5]

            return products
        },

        myDecrease(context) {
            context.commit('decrement', 1)
        }
    }

})

export default store