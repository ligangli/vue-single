import Vue from 'vue'
import Router from 'vue-router'
// import Home from "./views/Home.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
// 	scrollBehavior(to,from,savePosition){ // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
//     console.log(to) // to：要进入的目标路由对象，到哪里去
//     console.log(from) // from：离开的路由对象，哪里来
//     console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
//     /*if(savePosition) {
//       return savePosition;
//     }else{
//       return {x:0,y:0}
//     }*/
//     if(to.hash){ //先判断目标路由有没有hash值
//       return {selector:to.hash}
//     }
// 	},
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) { //如果savedPosition存在，滚动条会自动跳到记录的值的地方
			return savedPosition
		} else{
			return { x: 0, y: 0}//savedPosition也是一个记录x轴和y轴位置的对象
		}
	},
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        index: 0
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/new',
      name: 'new',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/New.vue'),
      meta: {
        index: 2
      }
    }
  ]
})
