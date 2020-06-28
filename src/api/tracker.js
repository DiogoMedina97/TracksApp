import axios from 'axios'
import { AsyncStorage } from 'react-native'
import { API_BASE_URL } from '../config/config'

const instance = axios.create({
    baseURL: API_BASE_URL
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance