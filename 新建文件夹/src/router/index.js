import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/msite'
import Food from '../components/food'
import Shop from '../components/shop' 
import CoverComponent from "../components/discover" 
import OrderComponent from "../components/order"	
import FileComponent from "../components/profile"	
import LoginComponent from "../components/login"
import LogininComponent from "../components/componentlogin/loginin"
import RegisterComponent from "../components/componentlogin/register"
import MessageComponet from "../components/message"
import ChangepsdComponet from "../components/Changepsd"

Vue.use(Router);

export default new Router({
	mode:"history",
  routes: [
  	{
      path: '/',
      component: Home,
   	},
	 {
      path: '/msite',
      component: Home,
   },{
   	path:"/shop",
    component:Shop
   },{
   	path:"/msite/food",
    component: Food,
   },
   {
    	path:"/discover",
    	component:CoverComponent,
    },
    {
    	path:"/order",
    	component:OrderComponent,
    },
    {
    	path:"/profile",
    	component:FileComponent,
    },
    {
    	path:"/message",
    	component:MessageComponet
    },
    {
    	path:"/Changepsd",
    	component:ChangepsdComponet
    },
    {
    	path:"/login",
    	component:LoginComponent,
    	children:[
	    	{
		    	path:'loginin',
		    	component:LogininComponent
		    },
		    {
		    	path:'register',
		    	component:RegisterComponent
		    },
		    {
		    	path:"/",
		    	redirect:"/login/loginin"
		    }
    	]
    },
    {
    	path:"*",
    	redirect:"/msite"
    }
  ]
})
