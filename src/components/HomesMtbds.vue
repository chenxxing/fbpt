<template>
	<div id="mtbds">
			<div class="title">
				<div class="types">
					<span></span>
					<h3>媒体报道</h3>
				</div>
				<el-button class='btn' size="mini">更多</el-button>
			</div>
			<div id="tent">
				<img class="Img" src="../assets/kh.jpg" />
				<p>
					自然资源部专家组来我厅调研指导汛期地质灾害防治工作
				</p>
			</div>
		</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
		#mtbds{
			width: 400px;
			height: 400px;
		    background: rgba(255,255,255,0.8);
		    margin-right: 5px;
    		border: 1px solid #ccc;
			.title{
				width: 100%;
				height: 46px;
				line-height: 46px;
				display: flex;
				align-items: center;
				justify-content: space-between;
    			border-bottom: 1px solid #c3c3c3;
				.types{
					display: flex;
    				align-items: center;
				    margin-left: 5px;
					span{
					    display: inline-block;
					    width: 4px;
					    height: 15px;
					    background: #F44336;
					    margin-right: 5px;
					}
					h3{
						font-size: 15px;
					    font-weight: 100;
	    				color: #000;
					}
				}
				.btn{
					margin-right: 5px;
				}
				
			}
			#tent{
				width: 100%;
				height: 354px;
				position: relative;
				.Img{
				    width: calc(100% - 10px);
				    height: calc(100% - 5px);
				    margin: 5px 5px 0 5px;
				}
				p{
					position: absolute;
					width: calc(100% - 10px);
					background: rgba(0,0,0,0.5);
					bottom: 0;
					left: 0;
					height: 58px;
			    	padding: 10px;
					font-size: 14px;
					letter-spacing: 3px;
					margin-left: 5px;
				}
			}

		}
</style>