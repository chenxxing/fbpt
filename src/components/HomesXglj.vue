<template>
	<div id="xglj">
		<div class="xglj-list">
			<h5>相关链接</h5>
			<p>项目管理</p>
			<p>资质管理</p>
			<p>专家项目</p>
		</div>
		<div class="yqlj-list">
			<h5>友情链接</h5>
			<ul>
				<li>中国地质调查局</li>
				<li>中国地质环境信息网</li>
				<li>国土资源部</li>
				<li>民政部</li>
				<li>中国地灾防治协会</li>
				<li>中国地质灾害与防治学报</li>
				<li>中国气象台</li>
				<li>江西国土资源厅</li>
				<li>江西省水利厅</li>
				<li>江西气象台</li>
				<li>中国社会组织网</li>
				<li>民间组织管局</li>
			</ul>
		</div>
		<div class="lxwm-list">
			<p>
				<a href="#">联系我们</a>
				<a href="#">网站导航</a>
				<a href="#">隐私申明</a>
			<p>
				版权所有:江西省地质灾害应急中心
			</p>
			<p>
				技术支持:江武汉地大信息工程股份有限公司
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
		#xglj{
		    width: 100%;
		    height: 140px;
		    background: #afafaf;
		    border: 1px solid #ccc;
		    margin-top: 5px;
		    display: flex;
		    padding-top: 30px;
		    padding-left: 30px;
	        padding-bottom: 20px;
		    .xglj-list{
		    	font-size: 12px;
			    display: flex;
			    flex-direction: column;
			    flex: 0.2;
			    justify-content: space-between;
			    h5{
			    	font-size: 15px;
			    }
		    }
		    .yqlj-list{
		    	flex: 0.7;
		    	h5{
			    	font-size: 15px;
			    }
			    ul{
			    	display: flex;
			    	flex-wrap: wrap;
			    	font-size: 12px;
				    align-items: center;
				    height: 68px;
			    	li{
			    		width: 150px;
			    		
			    	}
			    }
		    }
		    .lxwm-list{
	    	    display: flex;
			    flex-direction: column;
			    align-items: start;
			    font-size: 12px;
			    justify-content: space-around;
			    p{
			    	font-size: 12px;
		    	    line-height: 12px;
			    	a{
			    		color: #fff;
			    		font-size: 14px;
			    		display: inline-block;
			    	}
			    	a:nth-child(1){
			    		padding-right: 10px;
			    	}
			    	a:nth-child(2){
			    		border-left: 2px solid #FFF;
			    		border-right: 2px solid #FFF;
    					padding: 0 10px;
    					height: 13px;
			    	}
			    	a:nth-child(3){
			    		padding-left: 10px;
			    	}
			    }
		    }
		}
</style>