<template>
<div>
	<header>
		<div class="header">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-HnOPT_0"><path fill="#FFF" fill-rule="evenodd" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path></svg>
			<b>科城花园</b>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2QfD7_0"><path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path></svg>
		</div>
		<div :id="is" @scroll="handleScroll">
			<div class ="seach">
			<a href="#">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path></svg>
			<span>搜索饿了么商家、商家名称</span>

			</a>
			
		</div>	
		</div>
		
	</header>
		<img src="https://fuss10.elemecdn.com/b/0a//5b1ab540506687c7b93e148704db1jpeg.jpeg" alt="">
	<swipe></swipe>
	<menus></menus>
</div>	
		
</template>

<script type="text/javascript">
import swipe from "./other/swipe";
import menus from "./other/menus";
	export default {
		data(){
			return {
				is:""
			}
		},
		
	  components:{
	    swipe,
	    menus
	  },
		mounted(){
			if(this.$store.state.comingsoonList.length==0){
				//进行action 请求数据
				this.$store.dispatch("getComingList");
			}
			 window.addEventListener('scroll',this.handleScroll);
			 this.$store.commit("changeElemTitle",true);
		},
		computed:{
			datalist(){
				return this.$store.state.comingsoonList
			}
		},
		methods: {
			handleScroll(event){
				if(window.scrollY>200){
					 this.is="into";
				}else{
					 this.is="";
				}
				
			}
		}
	}
</script>


<style type="text/css" lang="scss" scoped>
	li{
		list-style:none;
	}
	header{
		width:100%;
		padding:0.15rem 0;
		background: linear-gradient(to right, #00aaff , #0085ff); 
		.header{
			display: flew;
			width:100%;
			line-height:1.3rem;
			b{
				color:#fff;	
				font-size: 0.4rem;
			}
			.index-HnOPT_0{
				margin-left:0.26rem;
				width:0.39rem;
			}
			.index-2QfD7_0{
				width:0.14rem;
			}
		}
	#into{
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		width: 100%;
		background: linear-gradient(to right, #00aaff , #0085ff); 
		padding: 0.1rem 0;
	}
	.seach{
			text-align: center;
			width:90%;
			height:0.72rem;
			line-height:0.73rem;
			background-color:#fff;
			margin: 0 auto;			
			a{
				width:4.3rem;
				display: block;
				overflow:hidden;
				margin: 0 auto;
				background: #fff;
			}	
			svg{
				width:0.32rem;
				margin:0.2rem 0;
				float:left;
			}
			span{
				font-size: 0.33rem;
				color:#999;
				float:right;
			}
		}
	
	}
	img{
		width:100%;
	}
</style>