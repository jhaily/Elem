<template>
			<header>
				<div class="head">
					<div class="pic">
						<img :src="left" @click="handback"/>
					</div>
					<img :src="src"/>
				</div>
				<div class="top">
					<div class="title">
						<span class="premium"><span v-if="restaurant.is_premium" :style="'background-color:#'">品牌</span></span>
						<h3>{{restaurant.name}}</h3>
						<span class="delta"><span></span></span>
					</div>
					<div class="inter">
						<span>{{restaurant.rating}}</span>
						<span>月销{{restaurant.recent_order_num}}单</span>
						<span>蜂鸟专送 约{{restaurant.order_lead_time}}分钟</span>
						<span>距离{{de(restaurant.distance)}}km</span>
					</div>
					<div>
						<p>{{restaurant.promotion_info}}</p>
					</div>
					<div class="bottom">
						<div class="preleft" v-for="dataone,id in restaurant.activities" v-if="id==1">
							<span v-if="id==1" :style="'background-color:#'+dataone.icon_color">{{dataone.icon_name}}</span><span v-if="id==1">{{dataone.tips}}</span>
						</div>
						<ul class="show" v-for="data in restaurant.activities" v-show="isShow">
							<li><span>{{data.icon_name}}</span><span>{{data.name}}</span></li>
						</ul>
						<div class="preright">
							<span>{{index}}个优惠</span><span class="del"><span></span></span>
						</div>
					</div>
					<ul class="nav" @click="handClick" :id="classNa" @scroll="handleScroll"> 
						<li><a href="#" :class="no?'action':''">点餐</a></li>
						<li><a href="#">评价</a></li>
						<li><a href="#">商家</a></li>
					</ul>
				</div>
			</header>
</template>
<script type="text/javascript">
import router from  "../../router";
import axios from "axios";
	export default {
		data(){
			return {
				src:"",
				index:0,
				restaurant:[],
				isShow:false,
				no:true,
				classNa:"",
				left:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=",							
			}
		},		
		 mounted(){			
			//获取新的数据 ${this.$route.query.id}
			console.log(this.$route.query.id);
			 axios.get("/restapi/shopping/restaurant/"+this.$route.query.id+"?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification&extras[]=qualification&terminal=h5&latitude=29.534893&longitude=106.489478").then(res=>{				
				console.log(res);
				this.src=res.data.image_path.slice(res.data.image_path.length-3)==='png'?'https://fuss10.elemecdn.com'+'/'+ res.data.image_path.slice(0,1) + '/' +res.data.image_path.slice(1,3)+'/'+ res.data.image_path.slice(3)+ '.png':'https://fuss10.elemecdn.com'+'/'+ res.data.image_path.slice(0,1) + '/' + res.data.image_path.slice(1,3)+'/'+ res.data.image_path.slice(3)+ '.jpeg';
				this.index=res.data.activities.length;
				this.restaurant=res.data;
				
			});
			 window.addEventListener('scroll',this.handleScroll);
		},
		methods:{
			de(id){	
				var ss=(id/100).toFixed(2);				
				return ss
			},
			handClick(event){
				this.no=false;
			},
			handleScroll(event){
				console.log(window.scrollY);
				if(window.scrollY>200){
					 this.classNa="xy";
				}else{
					 this.classNa="";
				}
				
			},
			handback(){
				router.push("/");
			}
			
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
	li{
		list-style: none;
	}
	header{
		width: 7.5rem;		
	}
	header .head{
		position: relative;
		height: 1.36rem;
		background-color: rgba(119,103,137,.43);
	}
	header .pic{
		width: 0.8rem;
		height: 0.5rem;
		line-height: 0.8rem;
		text-align: center;
	}
	header .pic img{
		width: 0.28rem;
		height: 0.44rem;
	}
	header .head>img{
		position: absolute;
		left: 40%;
		width: 1.3rem;
		height: 1.3rem;
	}
	header .top{
		padding-top: 0.5rem;
	}
	header .top>div{
		padding: 0.05rem 0;
		justify-content: center;
		display: flex;
		
	}
	header .title .premium span{
		background-image: linear-gradient(90deg,#fff100,#ffe339);
		padding: 0.02rem 0.1rem;	
		font-size: 0.1rem;
		color: #6a3709;
	}
	header .title h3{
		margin-left: 0.1rem;
		font-size: 0.46rem;
	}
	header .title .delta span{
		display: block;
		height: 0;
		border: 0.1rem solid transparent;
		border-left-color: #000;
		margin-top: 0.25rem;
		
	}
	header .inter span{
		font-size: 0.2rem;
		margin-left: 0.2rem;
	}
	header .top div p{
		width: 60%;
		font-size: 0.2rem;
		color: #999;
		white-space:nowrap;
		overflow:hidden;		
		text-overflow:ellipsis;
	}
	header .bottom{
		margin: 0 auto;
		width: 90%;
		color: #666;
		font-size: 0.2rem;
	}
	header .preleft,header .preright{
		display: flex;
	}
	header .preleft span:first-child{
		color:#fff;
		padding: 0 0.1rem;
	}
	header .preleft span:last-child{
		display: block;
		width: 3.5rem;
	}
	header .preright .del span{
		display: block;
		height: 0;
		border: 0.1rem solid transparent;
		border-top-color: #999;
		margin-top: 0.15rem;
		margin-left: 0.05rem;		
	}
	#xy{
		position: fixed;
		left:0;
		top: -0.1rem;
		z-index: 999;
	}
	.nav,#xy{
		width: 100%;
		display: flex;
		height: 0.8rem;
		border-bottom: 0.01rem solid #ddd;
		margin-top: 0.1rem;
		background-color: #fff;
		opacity: 1;
	}
	.nav li,#xy li{
		width: 33%;
	}
	.nav li a,#xy li a{
		display: block;
		color: #666;
		width: 0.6rem;		
		line-height: 0.75rem;
		font-size: 0.3rem;		
		margin: 0 auto;
	}
	.nav li:hover a,.action{
		border-bottom: 0.04rem solid #2395ff;
		font-weight: 900;
		color: #000;
	}

</style>