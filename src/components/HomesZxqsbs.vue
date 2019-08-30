<template>
	<div id="zxqsbs">
	<div class="title">
		<div class="types">
			<span></span>
			<h3>灾险情速报</h3>
		</div>
		<el-button class='btn' size="mini">更多</el-button>
	</div>
	<div class="sb-list">
		<ul>
			<li>
				<p>抚州市开展世界地球日系列宣传....</p>
				<span>2019/08/27</span>
			</li>
			<li>
				<p>抚州市开展世界地球日系列宣传....</p>
				<span>2019/08/27</span>
			</li>
			<li>
				<p>抚州市开展世界地球日系列宣传....</p>
				<span>2019/08/27</span>
			</li>
			<li>
				<p>抚州市开展世界地球日系列宣传....</p>
				<span>2019/08/27</span>
			</li>
			<li>
				<p>抚州市开展世界地球日系列宣传....</p>
				<span>2019/08/27</span>
			</li>
			<li>
				<p>抚州市开展世界地球日系列宣传....</p>
				<span>2019/08/27</span>
			</li>
			<li>
				<p>抚州市开展世界地球日系列宣传....</p>
				<span>2019/08/27</span>
			</li>
			<li>
				<p>抚州市开展世界地球日系列宣传....</p>
				<span>2019/08/27</span>
			</li>
		</ul>
	</div>
</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	#zxqsbs{
		width: 400px;
		height: 400px;
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
		.sb-list{
			width: 100%;
			height: 354px;
			ul{
				width: 100%;
				li{
					width: 100%;
					height: 40px;
				    color: #000;
				    margin-top: 5px;
				    padding: 0 5px;
				    font-size: 12px;
				    display: flex;
				    align-items: center;
					p{
						flex: 1;	
					}
					span{
						
					}
				}
			}
		}
	}
</style>