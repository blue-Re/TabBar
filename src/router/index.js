import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用路由懒加载方式加载组件
const Home = ()=>import('../views/home/Home.vue')
const Category = ()=>import('../views/category/Category.vue')
const ShopCart = ()=>import('../views/shopcart/ShopCart.vue')
const Myprofile = ()=>import('../views/myprofile/MyProfile.vue')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建路由对象
const router = new VueRouter({
  routes:[
    // 默认为首页
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/shopcart',
      component:ShopCart
    },
    {
      path:'/myprofile',
      component:Myprofile
    }
  ],
  mode:'history'
})

// 3.导出router
export default router