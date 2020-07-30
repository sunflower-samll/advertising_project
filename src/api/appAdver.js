import req from "@/utills/request";


//获取app列表
export function getAppList(params) {
   return req.get("/user/app/list", params)
}

//添加应用
export function addApp(params) {
   return req.post("/user/app/add", params)
}