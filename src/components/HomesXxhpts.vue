<template>
	<div id="xxhpts">
		<div class="title">
			<div class="types">
				<span></span>
				<h3>信息化平台</h3>
			</div>
			<el-button class='btn' size="mini">更多</el-button>
		</div>
		<div class="xxpt-list">
			<ul>
				<li>
					<img src="../assets/dcgl.png"/>
					<p>地质灾害调查管理系统</p>
					<a href="#">点击进入<i class="iconfont icon-gengduo"></i></a>
				</li>
				<li>
					<img src="../assets/zb.png"/>
					<p>地质灾害值班系统</p>
					<a href="#">点击进入<i class="iconfont icon-gengduo"></i></a>
				</li>
				<li>
					<img src="../assets/xm.png"/>
					<p>地质环境项目管理系统</p>
					<a href="#">点击进入<i class="iconfont icon-gengduo"></i></a>
				</li>
				<li>
					<img src="../assets/zz.png"/>
					<p>资质管理系统</p>
					<a href="#">点击进入<i class="iconfont icon-gengduo"></i></a>
				</li>
				<li>
					<img src="../assets/zj.png"/>
					<p>专家管理系统</p>
					<a href="#">点击进入<i class="iconfont icon-gengduo"></i></a>
				</li>
			</ul>
		</div>
	</div>	
</template>

<script>
</script>

<style lang="scss" scoped>
	#xxhpts{
		width: 100%;
		height: 230px;
	    background: rgba(255,255,255,0.8);
		border: 1px solid #ccc;
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
		.xxpt-list{
			width: 100%;
			height: 184px;
			ul{
				width: 100%;
			    height: 100%;
				display: flex;
				align-items: center;
				justify-content: space-around;
				li{
					width: 220px;
					height: 160px;
				    display: flex;
				    flex-direction: column;
				    justify-content: center;
				    align-items: center;
					img{
						width: 48px;
						height: 48px;
					}
					p{
						text-align: center;
					    margin: 15px 0;
					}
					a{
						color: #fff;
					    font-size: 15px;
					}
				}
				li:nth-child(1){
					background: #54c9a1;
				}
				li:nth-child(2){
					background: #2ea4f3;
				}
				li:nth-child(3){
					background: #18c6d2;
				}
				li:nth-child(4){
					background: #98c564;
				}
				li:nth-child(5){
					background: #6d8bd5;
				}
			}
		}
	}
</style>