<template>
	<div>
		<header>
			<div class="head">
				<div class="pic">
					<img :src="left" @click="handback"/>
				</div>
				<h3><span>{{index}}</span></h3>
			</div>
			<ul>
				<li v-for="data,id in looplist" :class="!id?'active':''"><a href="#">{{data.name}}</a></li>
				<div><svg class="categories-1cTOz_0"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#drop-down"><svg viewBox="0 0 26 26" id="drop-down" width="100%" height="100%"><path fill="#FFF" d="M13.086 17.627L3.219 7.76a1.131 1.131 0 0 0-1.6 1.6l10.667 10.667a1.131 1.131 0 0 0 1.6 0L24.553 9.36a1.131 1.131 0 0 0-1.6-1.6l-9.867 9.867z"></path></svg></use></svg></div>
			</ul>
			
		</header>
		<div class="nav">
			<a href="#"><span>综合排序</span><svg data-v-a5cc4024="" viewBox="0 0 72 32" class="dropdown-icon"><path data-v-a5cc4024="" d="M36 32l36-32h-72z"></path></svg></a>
			<a href="#"><span>距离最近</span></a>
			<a href="#"><svg data-v-a5cc4024="" class="filter-nav__icon"><use data-v-a5cc4024="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#supervip"><svg viewBox="0 0 17 14" id="supervip"><path fill="url(#supervip_a)" fill-rule="evenodd" d="M11.666 6.286l-2.95-3.923a.266.266 0 0 0-.43 0L5.333 6.29a1.063 1.063 0 0 1-1.487.227L1.43 4.747a.266.266 0 0 0-.379.066.289.289 0 0 0-.046.212l1.452 8.485c.039.228.21.408.43.454 1.891.387 9.356.388 11.22 0a.554.554 0 0 0 .427-.452l1.463-8.506a.28.28 0 0 0-.22-.326.265.265 0 0 0-.206.048L13.156 6.51a1.063 1.063 0 0 1-1.49-.225z" transform="translate(0 -1.255)"></path></svg></use></svg><span>会员领红包</span></a>
			<a href="#"><span>筛选</span><svg data-v-a5cc4024="" class="filter-nav-more__icon"><use data-v-a5cc4024="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#more-filter"><svg viewBox="0 0 26 26" id="more-filter" width="100%" height="100%"><path d="M9.001 15.009V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.981l7.788-10.01a1 1 0 0 0-1.578-1.228l-8 10.28a1 1 0 0 0-.21.615V22h-4v-7.324a1 1 0 0 0-.2-.6L4.001 5h14a1 1 0 0 0 0-2H2a1 1 0 0 0-.8 1.6L9 15.009z"></path></svg></use></svg></a>
		</div>
		<menus></menus>
	</div>
</template>

<script type="text/javascript">
import router from  "../router";
import menus from "./other/menus";
import axios from "axios";
	export default {
		data(){
			return {
				index:"",
				looplist:[],
				left:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=",			
			}
		},
		components:{
	    	menus
	 	},
		 mounted(){			
			//获取新的数据
//			// console.log(this.$route.query.id)
			axios.get(`/restapi/shopping/v2/foods_page/sift_factors?entry_id=${this.$route.query.id}&longitude=106.489478&latitude=29.534893&terminal=h5`).then(res=>{
				this.looplist=res.data;
				this.index = localStorage.getItem("id");
			})
		},computed:{
			 datalist(){
			 	return this.$store.state.comingsoonList
			 }			 
		},
		methods:{
			handback(){
				router.push("/");
			}
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
	header{
		width: 7.5rem;
		background: #2395ff;
	}
	header .head{
		display: flex;
	}
	header .head h3{ 
		width: 6rem;
	 	line-height: 0.88rem;
	 	font-size: 0.44rem;
	 	color: #fff;
	 	text-align: center;
	}
	header .pic{
		width: 0.88rem;
		height: 0.88rem;
		line-height: 0.88rem;
		text-align: center;
	}
	header .pic img{
		width: 0.24rem;
	}
	
	header ul{
		position: relative;
		width: 20rem;
		list-style: none;
		display: flex;
		margin-left: 0.3rem;
	}
	header ul li{
		height: 0.6rem;
		line-height: 0.6rem;
		margin-right: 0.56rem;
		margin-bottom: 0.2rem;		
	}
	header ul li a{		
		font-size: 0.26rem;	
		color: #fff;
		opacity: 0.7;
	}
	.active{
		border-bottom: 2px solid #fff;
	}
	.active a{
		font-weight: 700;
		opacity: 1;
	}	
	header ul>div{
		width: 0.9rem;
		height: 0.8rem;
		position: absolute;
		left:6.3rem;
		line-height: 0.8rem;
		text-align: center;
		background: #2395ff;
	}
	header ul>div svg{
		width: 0.3rem;
		height: 0.3rem;
		background: #2395ff;
	} 
	.nav{
		display: flex;
		height: 0.8rem;
	}
	 .nav a{
		width: 1.95rem;
		text-align: center;
		.dropdown-icon{
			width: 0.12rem;
			fill:#666;
			margin-bottom: 0.05rem;
		}
		.filter-nav__icon{
			width: 0.23rem;
			height: 0.18rem;
		}
		.filter-nav-more__icon{
			width: 0.26rem;
			height: 0.26rem;
			fill:#666;
		}
		svg{
			margin: 0 0.1rem;
		}
	}
	.nav span{
		line-height: 0.8rem;
		font-size: 0.26rem;	
		color: #666;
	}
</style>