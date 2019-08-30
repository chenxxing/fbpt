<template>
	<div id="hydt_gcgfs">
	<div class="tags">
		<ul>
			<li @click="actives(1)" :class='flag?"active":""'>行业动态</li>
			<li @click="actives(2)" :class='!flag?"active":""'>规程规范</li>
		</ul>
		<i class="hx" ref="iii"></i>
		<el-button class='btn' size="mini">更多</el-button>
	</div>
	<div class="content">
		<div class="hydt-child-tag" v-if="flag">
			<ul>
				<li>
					<p>江西省南昌市进贤县彰三村13组李四家为房屋后坍塌</p>
					<span>19/09/08</span>
				</li>
				<li>
					<p>江西省南昌市进贤县彰三村13组李四家为房屋后坍塌</p>
					<span>19/09/08</span>
				</li>
				<li>
					<p>江西省南昌市进贤县彰三村13组李四家为房屋后坍塌</p>
					<span>19/09/08</span>
				</li>
				<li>
					<p>江西省南昌市进贤县彰三村13组李四家为房屋后坍塌</p>
					<span>19/09/08</span>
				</li>
				<li>
					<p>江西省南昌市进贤县彰三村13组李四家为房屋后坍塌</p>
					<span>19/09/08</span>
				</li>
			</ul>
		</div>
		<div class="gcgf-child-tag" v-if="!flag">
			规程规范
		</div>
	</div>
</div>
</template>

<script>
	export default {
		data(){
			return {
				flag:true
			}
		},
		methods:{
			actives(num){
				this.$refs.iii.style.left = 100 * (num - 1) + "px";
				this.flag = !this.flag;
			}
		},
		computed:{
			
		}
	}
</script>

<style lang="scss" scoped>
	#hydt_gcgfs{
		width: 310px;
		height: 400px;
	    background: rgba(255,255,255,0.8);
		border: 1px solid #ccc;
	    .tags{
	    	width: 100%;
	    	height: 46px;
    		position: relative;
	    	ul{
	    		width: 100%;
	    		display: flex;
	    		height: 100%;
	    		li{
	    			width: 100px;
	    			height: 100%;
    			    font-size: 15px;
				    color: #000;
				    text-align: center;
				    line-height: 46px;
				    cursor: pointer;
	    		}
	    	}
	    	.hx{
	    		position: absolute;
	    		display: inline-block;
	    		width: 100px;
	    		height: 2px;
	    		background: #E91E63;
	    		left: 0;
	    		bottom: 0;
	    		transition: all .3s;
	    	}
	    	.btn{
	    		position: absolute;
	    		right: 5px;
	    		top: 9px;
	    	}
	    	.active{
	    		color: #008CEE;
	    		font-weight: 900;
	    	}
	    }
	    .content{
	    	width: 100%;
	    	height: 354px;
	    	.hydt-child-tag{
	    		width: 100%;
	    		height: 100%;
	    		ul{
	    			width: 100%;
	    			li{    
	    				width: 100%;
					    padding: 0 10px;
					    font-size: 12px;
					    color: #000;
					    display: flex;
					    align-items: baseline;
					    height: 40px;
					    margin-top: 5px;
					    p{
					    	
					    }
	    			}
	    		}
	    	}
	    	.gcgf-child-tag{
	    		width: 100%;
	    		height: 100%;
	    	}
	    }
	}
</style>