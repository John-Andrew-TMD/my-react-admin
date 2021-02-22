import { Service } from "../utils/request";
export function Login(data:any) {
    return Service.request({
        url:"/auth/login",
        method:"post",
        params:data,
        data
    })
}