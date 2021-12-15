import { createStore } from 'vuex'

class DefaultState {
    // 基本HttpURL
    baseHttpURL: string = 'http://localhost:8080'
    // WSURL
    wsURL: string = 'ws://localhost:8080/msg'
    // 凭证
    token: string = 'c81405d8-dcb9-4dc1-a77c-e16cd302d20e'

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