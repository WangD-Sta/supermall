//导入前需要在此目录下安装axios
import axios from 'axios'

export function request (config) {
    const instance = axios.create({
        baseURL: "http://152.136.185.210:7878/api/m5",
        timeout: 10000
    })
    //axios的拦截器
    //2.1请求拦截
    instance.interceptors.request.use(config => {
        return config
    },err => {

    })
    //2、2响应拦截
    instance.interceptors.response.use(res => {
        //拦截处理后讲数据返回
        return res.data
    },err => {
        console.log(err);
    })
    //3、发送真正的网络请求
    return instance(config)
}