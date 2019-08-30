import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import homes from '@/page/child/homes'
import gcgf from '@/page/child/gcgf'
import gzdt from '@/page/child/gzdt'
import hydt from '@/page/child/hydt'
import qxyj from '@/page/child/qxyj'
import xxhptml from '@/page/child/xxhptml'
import yqxx from '@/page/child/yqxx'
import zxqsb from '@/page/child/zxqsb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home/homes',
      component: home//初始化路由默认加载首页
    },
    {
    	path:'/home',
    	name:'home',
      component: home,
      children:[
      	{
      		path:'/home/homes',
      		name:'homes',
      		component:homes
      	},
      	{
      		path:'/home/gcgf',
      		name:'gcgf',
      		component:gcgf
      	},
      	{
      		path:'/home/gzdt',
      		name:'gzdt',
      		component:gzdt
      	},
      	{
      		path:'/home/hydt',
      		name:'hydt',
      		component:hydt
      	},
      	{
      		path:'/home/qxyj',
      		name:'qxyj',
      		component:qxyj
      	},
      	{
      		path:'/home/xxhptml',
      		name:'xxhptml',
      		component:xxhptml
      	},
      	{
      		path:'/home/yqxx',
      		name:'yqxx',
      		component:yqxx
      	},
      	{
      		path:'/home/zxqsb',
      		name:'zxqsb',
      		component:zxqsb
      	},
      ]
    },
    {
    	path:'*',
      redirect:'/home/homes',
    }//输入错误路由地址默认加载首页
  ]
})
