import { createStore } from 'vuex'

class DefaultState {
    count: number = 0
    token: string = 'c61e1dd2-ebc3-4ed1-9cd7-335e7fac201e'
    wsURL: string = 'ws://localhost:8080/msg'
}

export default createStore<DefaultState>({
    state() {
        return new DefaultState()
    },
    mutations: {
        increment(state: DefaultState) {
            state.count++
        }
    },
    actions: {
        increment(context) {
            context.commit('increment')
        }
    },
    getters: {
        double(state: DefaultState) {
            return 2 * state.count
        }
    }
})