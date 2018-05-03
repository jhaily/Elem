<template>
	<div class="menus" @scroll="handleScroll">
		<ul class="aside">
			<li v-for="data in menuslist">
				<img :src="'https://fuss10.elemecdn.com/'+ data.icon_url.slice(0,1) + '/' +data.icon_url.slice(1,3)+'/'+data.icon_url.slice(3)+ '.png'" v-if="data.icon_url!==''"/><a href="#">{{data.name}}</a></li>
		</ul>
		<article>
			<dl v-for="data in menuslist" class="foods">
				<dt><strong>{{data.name}}</strong><span>{{data.description}}</span></dt>
				<dd v-for="datatwo in data.foods" >
					<div class="food">
						<img :src="datatwo.image_path.slice(datatwo.image_path.length-4)==='jpeg'?'https://fuss10.elemecdn.com'+'/'+ datatwo.image_path.slice(0,1) + '/' + datatwo.image_path.slice(1,3)+'/'+datatwo.image_path.slice(3)+ '.jpeg':'https://fuss10.elemecdn.com'+'/'+ datatwo.image_path.slice(0,1) + '/' + datatwo.image_path.slice(1,3)+'/'+ datatwo.image_path.slice(3)+ '.'+datatwo.image_path.slice(datatwo.image_path.length-3)"/>						
						<div class="right">
							<h3><span>{{datatwo.name}}</span><span class="pic"></span></h3>					
							<p class="text">{{datatwo.description}}</p>
							<p><span>月售{{datatwo.month_sales}}份</span><span>好评率{{datatwo.satisfy_rate}}%</span></p>
							<div class="low">
								<div class="price"><strong>￥</strong><span>{{datatwo.specfoods["0"].price}}</span><span><a href="#" v-if="datatwo.specfoods['0'].original_price">￥{{datatwo.specfoods['0'].original_price}}</a></span></div>
								<svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"><svg viewBox="0 0 44 44" id="cart-minus" width="100%" height="100%"><path fill="none" d="M0 0h44v44H0z"></path><path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path></svg></use></svg>							
							</div>
						</div>					
					</div>
				</dd>
			</dl>
		</article>
	</div>
</template>

<script type="text/javascript">
	import router from  "../../router";
	import axios from "axios";
	export default {

		data(){
			return {
				menuslist:[],
				loading:false,
				isshow:false,
			}
		},

		mounted(){
			axios.get(`/restapi/shopping/v2/menu?restaurant_id=${this.$route.query.id}`).then(res=>{
			 	this.menuslist = res.data;
			});
			 window.addEventListener('scroll',this.handleScroll);
			this.$store.commit("changeElemTitle",false);
		},
		methods:{
			de(id){	
				var ss=(id/100).toFixed(2);				
			return ss
			},
			handclick:function(enent){
				console.log(window.location);
				console.log(event.target);
			},
			headeClick(id){
				console.log(id);
				router.push(`/shop?id=${id}`);
			},
			handleScroll(event){
			//	console.log(window.scrollTop);
				
			}
			
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
	.menus{
		position: relative;
	}
	.aside{
		overflow-y: auto;
		width: 1.54rem;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f8f8f8;
	}
	.aside li{	
		text-align: center;
		border-bottom: 1px solid #e8e8e8;
		padding: 0.2rem 0.01rem;
	}
	.aside li a{
		font-size: 0.26rem;
		color: #666;		  
	}
	.aside li:hover{
		background-color: #fff;		  
	}
	.aside li img{
		width: 0.26rem;
		height: 0.26rem;
		margin-right: 0.2rem;
	}
	article{
		position: absolute;
		left:1.54rem;
		top: 0;
		padding:0 0.2rem;
		overflow: scroll;
		height: 20rem;
		dl dt{
			overflow: hidden;
			height: 0.5rem;
			line-height: 0.5rem;
			strong{
				float: left;
				font-size: 0.28rem;
				margin-right: 0.1rem;
				color: #666;
			}
			span{
				float: left;
				font-size: 0.24rem;
				color: #999;
			}			
		}
		dl dd{
			margin-left: 0rem;
		}
		dl dd .food{
			margin:0.4rem 0;
			display: flex;
			img{
				width: 1.52rem;
				height: 1.52rem;
			}
			.right{
				margin-left: 0.2rem;
				h3{
					font-size: 0.26rem;
				}
				.text{
					width: 3.5rem;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				p{
					font-size: 0.16rem;
					color: #999;
				}
				p span{
					font-size: 0.2rem;
					color: #666;
				}
			}
			.low{
				display: flex;
				justify-content: space-between;
			  .price{
			  		width: 3.3rem;
					strong{
						font-size: 0.24rem;
						color:#f60;
						font-weight: 300;
					}
					span{
						font-size: 0.3rem;
						color:#f60;
						font-weight: 900;
					}
					a{
						font-size: 0.3rem;
						color:#000;
						font-weight: 100;
						text-decoration: line-through;
					}
					
				}
				svg{
					width: 0.4rem;
					height: 0.4rem;
					fill: #2395ff;
				}
			}
		}
	}
</style>