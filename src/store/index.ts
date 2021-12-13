import { createStore } from 'vuex'

class DefaultState {
    // 基本HttpURL
    baseHttpURL: string = 'http://118.31.38.89:3000'
    // WSURL
    wsURL: string = 'ws://118.31.38.89:3000/v1/msg/ws'
    // 凭证
    token: string = '1e1b2579-b945-4b49-bb1c-0dae09927057'

    count: number = 0
}

export default createStore<DefaultState>({
    state() {
        return new DefaultState()
    },
    mutations: {
        increment(state: DefaultState) {
            state.count++
        },
        setToken(state: DefaultState, token: string) {
            state.token = token
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