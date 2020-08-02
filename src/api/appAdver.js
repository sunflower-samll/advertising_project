import req from "@/utills/request";


//获取app列表
export function getAppList(params) {
   return req.get("/user/app/list", params)
}

//添加应用
export function addApp(params) {
   return req.post("/user/app/add", params)
}

//获取广告类型列表
export function adTypeList() {
   return req.get("/user/ad/typelist")
}

//获取广告列表
export function adList() {
   return req.get("/user/ad/list")
}