import Login from '@/page/login/index'
import Index from '@/page/index/index'
export const main = [
    {
        path:'/login',name:"登录",component:Login,
        path:'/',name:"首页",exact:true,component:Index
    }
]
export const menus = []
export const routerConfig = {
    main,menus
}