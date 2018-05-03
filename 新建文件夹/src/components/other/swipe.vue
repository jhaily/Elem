<template>
	<div class="nav">		
		<div class="mint-swipe">
		<div class="mint-swipe-items-wrap">
			<div class="mint-swipe-item slide1 is-active" style="">
				<ul @srcoll="handScroll">
					<li v-for="data,id in datalist" v-if="id<10" @click="handClick(data.id,data.name)">						
							<img :src="data.image_hash.slice(data.image_hash.length-3)==='png'?'https://fuss10.elemecdn.com'+'/'+ data.image_hash.slice(0,1) + '/' +data.image_hash.slice(1,3)+'/'+data.image_hash.slice(3)+ '.png':'https://fuss10.elemecdn.com'+'/'+ data.image_hash.slice(0,1) + '/' +data.image_hash.slice(1,3)+'/'+data.image_hash.slice(3)+ '.jpeg'"/>						
							<span>{{data.name}}</span>
					</li>
				</ul>
			</div>
			<div class="mint-swipe-item slide2" style="display: block;">2</div> 
		</div>
		<div class="mint-swipe-indicators">
			<div class="mint-swipe-indicator is-active"></div>
			<div class="mint-swipe-indicator"></div>
			<div class="mint-swipe-indicator"></div>
		</div>
	</div>
		<!--<div class="list">
			
		</div>-->
	</div>
	
</template>

<script type="text/javascript">
import router from  "../../router";
import axios from "axios";
	export default {

		data(){
			return {
				
			}
		},
		methods:{
			handClick(id,s){
				 router.push(`/msite/food?id=${id}`);
				 localStorage.setItem('id', s);
			},
			handScroll(){
				console.log(window.screenX);
			}
			
		},
		mounted(){
			if(this.$store.state.comingsoonList.length==0){
				//进行action 请求数据
				this.$store.dispatch("getComingList");
			}			
			 window.addEventListener('scroll',this.handleScroll);
			 
		},

		computed:{
			 datalist(){
			 	return this.$store.state.comingsoonList
			 }
//			...mapState(["comingsoonList"])
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
	.nav{
		width: 100%;		
	}
	ul{
		width: 7.5rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	ul li{
		list-style: none;
		width: 20%;	
		text-align: center;
	}
	.nav img{
		width: 0.9rem;
		
	}
	.nav span{
		font-size: 0.28rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.list{
		width: 7.1rem;
		height: 2.2rem;
		margin: 0 auto;
		background: linear-gradient(to bottom, #fafafa , #f4f4f4); 
	}
	.mint-swipe{
		width:100%;
		height: 4rem;
	}
</style>