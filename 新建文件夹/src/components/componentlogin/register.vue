<template>
	<div>
			<section>
				<input type="number" autocapitalize="on" placeholder="手机" v-model="username">
			</section>
			<section>
				<input placeholder="密码" type="password" autocapitalize="on" v-model="password">
			</section>
			<button @click="handclick">注册</button>
			<div class="message">{{showMessage}}</div>
			
	</div>
</template>

<script>
	import router from "../../router";
	import axios from "axios";
	export default {
		data(){
			return {
				username:'',
				password:'',
				showMessage:''
			}
		},
		methods:{
			handclick(){
				if(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.username)){
					var _this = this;
					axios.post("/register",{
						username:this.username,
						password:this.password
					}).then(res=>{
						if(res.data==0){
							this.showMessage = "注册失败";
							
							setTimeout(function(){
								_this.showMessage = "";
							},2000);
						}else if(res.data=="用户已注册"){
							
							this.showMessage = "该用户已注册";
							
							setTimeout(function(){
								_this.showMessage = "";
							},2000);
						}else{
							this.showMessage = "注册成功";
							
							setTimeout(function(){
								_this.showMessage = "";
								router.push({path:"/login"});
							},1000);
							
						}
					})
				}else if(this.password ==""){
					var _this = this;
					this.showMessage = "密码不能为空";
							setTimeout(function(){
								_this.showMessage = "";
							},2000);
							
				}else{
					var _this = this;
							this.showMessage = "请输入正确的手机号";
							setTimeout(function(){
								_this.showMessage = "";
							},2000);
							
				}
				
			}
		}
	}
</script>

<style lang="scss" scoped>

	section{
		width: 100%;
		height: .96rem;
		margin-top: .32rem;
		input{
			box-sizing: border-box;
			width: 100%;
		    height: 100%;
		    padding-left: .2rem;
		    border: 1px solid #ddd;
		    border-radius: .08rem;
		    color: #333;
		}
	}
	button{
		font-family: inherit;
		display: block;
	    width: 100%;
	    height: .84rem;
	    margin-top: .6rem;
	    border-radius: .1rem;
	    background: #4cd96f;
	    color: #fff;
	    cursor: pointer;
	    text-align: center;
	    font-size: .32rem;
	    line-height: .84rem;
	    outline: none;
    	border: none;
	}
	.message{
			text-align: center;
			margin-top: 1rem;
			font-size: .3rem;
		}
    
</style>