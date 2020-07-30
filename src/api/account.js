//账号相关功能模块请求

import req from "@/utills/request";

// 登录
export function checkLogin(params){
    return req.post("/user/user/login",params)
}