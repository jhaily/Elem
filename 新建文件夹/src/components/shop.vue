<template>
<div>
	<Top></Top>
	<Select></Select>		
</div>
</template>

<script type="text/javascript">
import router from  "../router";
import Select from "./other/select";
import Top from "./other/rest";
	export default {
		data(){
			return {

			}
		},
		components:{
		    Select,
		    Top,		    
	  },
	  mounted(){
	  	this.$store.commit("changeElemTitle",false);
	  }
	}
</script>


<style type="text/css" lang="scss" scoped>

</style>