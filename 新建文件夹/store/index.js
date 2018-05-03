import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);//注册

import axios from "axios";

const  CHANGE_MAIZUO_TITLE="changeMaizuoTitle";//
const  b=  "changeComingsoonList" // 
const GET_COMINGSOON_LIST = "getComingList"; //getComingList action type



const store = new Vuex.Store({

	state:{
		title:"卖座电影-defualt-name", //公用的状态
		comingsoonList:[]
	},


	actions:{
		[GET_COMINGSOON_LIST](store){
			//action 可以异步， 也可以同步
			

			axios.get("/restapi/shopping/openapi/entries?latitude=29.534893&longitude=106.489478&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template").then(res=>{
				//提交给mutation 改变状态
				//console.log(res.data[0]);
				store.commit("changeComingsoonList",res.data[0].entries);
			})
		}
	},

	mutations:{
		//只能同步
		[CHANGE_MAIZUO_TITLE]:function(state,payload){
			console.log(payload);
			//改变状态
			state.title=payload;
		},

		[b]:function(state,payload){
			state.comingsoonList = payload;
		}
	},

	getters:{

		getHomeComingList(state){
			return state.comingsoonList.slice(0,3)
		}
	}

})

export default store;


// var name = "kerwin"

// var obj = {
// 	[name]:"11111"
// }
