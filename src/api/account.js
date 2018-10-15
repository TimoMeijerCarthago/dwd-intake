import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.some.url',
    timeout: 1000
})

export default {
    login: async(loginData) => {
        return instance.post('/account/login', loginData)
    },
    register: async(registerData) => {
        return instance.post('/account/register', registerData)
    }
}
