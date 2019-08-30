<template>
	<div id="homes">
		<homes-mtbds></homes-mtbds>
		<homes-gzdts></homes-gzdts>
		<homes-hydt-gcgfs></homes-hydt-gcgfs>
		<homes-zxqsbs></homes-zxqsbs>
		<homes-qxyjs></homes-qxyjs>
		<homes-xxhpts></homes-xxhpts>
		<homes-xglj></homes-xglj>
	</div>	
</template>

<script>
	import HomesMtbds from "@/components/HomesMtbds"
	import HomesGzdts from "@/components/HomesGzdts"
	import HomesHydtGcgfs from "@/components/HomesHydtGcgfs"
	import HomesZxqsbs from "@/components/HomesZxqsbs"
	import HomesQxyjs from "@/components/HomesQxyjs"
	import HomesXxhpts from "@/components/HomesXxhpts"
	import HomesXglj from "@/components/HomesXglj"
	export default{
		components:{HomesMtbds,HomesGzdts,HomesHydtGcgfs,HomesZxqsbs,HomesQxyjs,HomesXxhpts,HomesXglj},
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		computed:{
			
		}
	}
</script>

<style lang="scss" scoped>
	#homes{
		width: 1200px;
		margin: 0 auto;
		min-width: 1200px;
		color: #fff;
		display: flex;
    	flex-wrap: wrap;
    	margin-top: 10px;
	    /*position: absolute;
	    left: 50%;
	    transform: translateX(-50%);*/
	}
</style>