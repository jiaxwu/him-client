import Axios from 'axios'
import store from '@/store'
import { OK, NetworkError, RequestError, UnauthorizedInvalidToken } from './err_code'

const axios = Axios.create({
    baseURL: store.state.baseHttpURL,
    timeout: 20000
})

axios.interceptors.request.use(
    (request) => {
        request.headers = {
            Token: store.state.token
        }
        return request
    },
    (error) => {
        return Promise.reject({
            Code: RequestError,
            Msg: '请求出错，请重试'
        })
    }
)

axios.interceptors.response.use(
    (response) => {
        // token失效，重新登录
        if (response.data.Code === UnauthorizedInvalidToken) {
            // TODO 重新登录
            return Promise.reject(response.data)
        }
        // 请求出错
        if (response.data.Code !== OK) {
            return Promise.reject(response.data)
        }
        return response.data.Data
    },
    (error) => {
        return Promise.reject({
            Code: NetworkError,
            Msg: '网络异常，请重试'
        })
    }
)

export default axios