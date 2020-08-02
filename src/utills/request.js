//引入axios和qs
import axios from 'axios'
// import { resolve, reject } from 'core-js/fn/promise'
axios.defaults.baseURL = "http://106.8.14.34:8082"//服务器地址
axios.defaults.timeout = 5000;//超时

// 发请求出去之前拦截
axios.interceptors.request.use((config) => {
    return config;
})

//响应拦截
axios.interceptors.response.use((response) => {
    return response;
})
//通用的get请求和post请求
export default {
    get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params }).then((response) => {
                resolve(response.data);//成功
            })
                .catch((err) => {
                    reject(err);//失败
                })
        })
    },
    post(url, params) {
        return new Promise((resolve, reject) => {
            axios.post(url, JSON.stringify(params)).then((response) => {
                resolve(response.data)//成功
            }).catch((err) => {
                reject(err)//失败
            })
        })
    },
}