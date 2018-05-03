import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);//注册

import axios from "axios";

const store = new Vuex.Store({
	state:{
		title:"", //公用的状态
		comingsoonList:[],
		isShow:true, //公用的状态
	},
	actions:{
		getComingList(store){
			//action 可以异步， 也可以同步

			axios.get("/restapi/shopping/openapi/entries?latitude=29.534893&longitude=106.489478&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template").then(res=>{
				//提交给mutation 改变状态
				console.log(res.data[0].entries);
				store.commit("changeComingsoonList",res.data[0].entries);
			})
		}
	},
	mutations:{
		//只能同步
		changeMaizuoTitle:function(state,payload){
			console.log(payload);
			//改变状态
			state.title=payload;
		},

		changeComingsoonList:function(state,payload){
			state.comingsoonList = payload;
		},
		changeElemTitle:function(state,payload){
			console.log(payload);
			//改变状态
			state.isShow=payload;
		}
	}
})

export default store;
