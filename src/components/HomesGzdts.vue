<template>
	<div id="gzdts">
		<div class="title">
			<div class="types">
				<span></span>
				<h3>工作动态</h3>
			</div>
			<el-button class='btn' size="mini">更多</el-button>
		</div>
		<div class="gzdts_text">
			<ul>
				<li>
					<span></span>
					<p>关于2019年重要城市、提防和大型、防洪重点水库防汛抗旱行政责任人的通报</p>
					<span>19/08/26</span>
				</li>
				<li>
					<span></span>
					<p>关于2019年重要城市、提防和大型、防洪重点水库防汛抗旱行政责任人的通报</p>
					<span>19/08/26</span>
				</li>
				<li>
					<span></span>
					<p>关于2019年重要城市、提防和大型、防洪重点水库防汛抗旱行政责任人的通报</p>
					<span>19/08/26</span>
				</li>
				<li>
					<span></span>
					<p>关于2019年重要城市、提防和大型、防洪重点水库防汛抗旱行政责任人的通报</p>
					<span>19/08/26</span>
				</li>
				<li>
					<span></span>
					<p>关于2019年重要城市、提防和大型、防洪重点水库防汛抗旱行政责任人的通报</p>
					<span>19/08/26</span>
				</li>
				<li>
					<span></span>
					<p>关于2019年重要城市、提防和大型、防洪重点水库防汛抗旱行政责任人的通报</p>
					<span>19/08/26</span>
				</li>
				<li>
					<span></span>
					<p>关于2019年重要城市、提防和大型、防洪重点水库防汛抗旱行政责任人的通报</p>
					<span>19/08/26</span>
				</li>
				<li>
					<span></span>
					<p>关于2019年重要城市、提防和大型、防洪重点水库防汛抗旱行政责任人的通报</p>
					<span>19/08/26</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
	#gzdts {
		width: 480px;
		height: 400px;
		background: rgba(255, 255, 255, 0.8);
		margin-right: 5px;
		border: 1px solid #ccc;
		.title {
			width: 100%;
			height: 46px;
			line-height: 46px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #c3c3c3;
			.types {
				display: flex;
				align-items: center;
				margin-left: 5px;
				span {
					display: inline-block;
					width: 4px;
					height: 15px;
					background: #F44336;
					margin-right: 5px;
				}
				h3 {
					font-size: 15px;
					font-weight: 100;
					color: #000;
				}
			}
			.btn {
				margin-right: 5px;
			}
		}
		.gzdts_text {
			width: 100%;
			height: 354px;
			ul {
				width: 100%;
				height: 100%;
				li {
					width: 100%;
					padding: 0 10px;
					font-size: 12px;
					color: #000;
					display: flex;
					align-items: baseline;
					height: 40px;
					margin-top: 5px;
					span:nth-child(1) {
						display: inline-block;
						width: 5px;
						height: 5px;
						border-radius: 50%;
						background: #008cee;
					}
					p {
						padding: 0 10px;
					}
					span:nth-child(3) {}
				}
			}
		}
	}
</style>