<template>
	<div id="qxyjs">
		<div class="title">
			<div class="types">
				<span></span>
				<h3>气象预警</h3>
			</div>
			<el-button class='btn' size="mini">更多</el-button>
		</div>
		<div id="map">
			
		</div>
		<div id="qx-list">
			<ul>
				<li>
					<img src="../assets/ssjy.png"/>
					<p>实时降雨</p>
				</li>
				<li>
					<img src="../assets/syqgs.png"/>
					<p>水雨情概述</p>
				</li>
				<li>
					<img src="../assets/tflj.png"/>
					<p>台风路径</p>
				</li>
				<li>
					<img src="../assets/tqyb.png"/>
					<p>天气预报</p>
				</li>
				<li>
					<img src="../assets/wxyt.png"/>
					<p>卫星云图</p>
				</li>
				<li>
					<img src="../assets/zxqfx.png"/>
					<p>灾险情分布</p>
				</li>
			</ul>
		</div>
	</div>	
</template>

<script>
</script>

<style lang="scss" scoped>
	#qxyjs{
		width: 795px;
		height: 400px;
	    background: rgba(255,255,255,0.8);
		border: 1px solid #ccc;
	    margin-left: 5px;
		margin-top: 5px;
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
		#map{
			width: 100%;
			height: 220px;
			background: #FF9800;
		}
		#qx-list{
			width: 100%;
			height: 134px;
			ul{
				width: 100%;
				height: 100%;
			    display: flex;
				align-items: center;
				justify-content: space-between;
				li{
					width: 130px;
				    color: #000;
				    font-size: 13px;
				    display: flex;
				    flex-direction: column;
				    justify-content: center;
				    align-items: center;
				    height: 100%;
				    cursor: pointer;
					img{
						width: 54px;
						height: 52px;
					}
					p{
						margin-top: 15px;
					    font-weight: 600;
					    color: #777676;
					}
				}
			}
		}
	}
</style>