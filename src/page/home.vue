<template>
    <div id="home">
        <header>
            <div class="logo">
                <img src="../assets/logo.png" alt="logo">
            </div>
            <div class="weather">
                <div class="functions">
                    <div>
                        <a>2019年8月26</a>
                        <a>星期一</a>
                    </div>
                    <div>
                        <a>设为首页</a>
                        <a>加入收藏夹</a>
                        <a>用户登录</a>
                    </div>
                </div>
                <div class="water">
                    <a>南昌市</a>
                    <a class="iconfont icon-tianqi1"></a>
                    <a>雷阵雨</a>
                    <a>31℃</a>
                    <a>东北风</a>
                    <a>1级</a>
                </div>
            </div>
        </header>
        <div class="tabs">
			<div id="list">
				<ul>
					<li v-for="(item,idx) in datalist" 
						:key='idx'
						@click="$router.push({path:item.path})"
						:class="$route.path === item.path?'active':''"
						>{{item.name}}</li>
				</ul>
			</div>
       </div>
       <transition name='slide-fade'>
	    	<router-view class='posi'></router-view>
       </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            activeName:'second',
            datalist:[
            	{path:'/home/homes',name:'首页'},
            	{path:'/home/zxqsb',name:'灾险情速报'},
            	{path:'/home/qxyj',name:'气象预警'},
            	{path:'/home/gzdt',name:'工作动态'},
            	{path:'/home/gcgf',name:'规程规范'},
            	{path:'/home/yqxx',name:'舆情信息'},
            	{path:'/home/xxhptml',name:'信息化平台目录'},
            	{path:'/home/hydt',name:'行业动态'},
            ]
        }
    },
    mounted(){
    	console.log(this.$route.path)
    }
}
</script>

<style lang='scss' scoped>
/*.slide-fade-enter-active,.slide-fade-leave-active{
	transition: all .5s ease; 定义我的过渡持续的时间以及运动曲线
}
.slide-fade-enter,.slide-fade-leave-to{  
	opacity: 0;
	transform: translateX(50px);从50px的地方进入，也将离开到50px的位置去
}*/

.slide-fade-enter{
	opacity: 0;
	transform: translateX(100px);
	/*从哪里开始过渡：在过渡之前我就把位置定义在100px的位置,并且透明度从0开始回到默认值*/
}
.slide-fade-enter-active{
	transition: all .8s ease;
}
.slide-fade-enter-to{
	background: red;
	/*从动画开始慢慢变到红色背景,进入动画完成后,移除红色背景*/
}
.slide-fade-leave{
	/*只持续一帧,没啥用*/
	/*离开过渡前*/
}
.slide-fade-leave-active{
	/*离开过渡中*/
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-to{
	/*离开过渡后*/
	opacity: 0;
	transform: translateX(100px);/*过渡到那里去：在离开的过渡位置定义在100px的位置，透明度从默认值回到0*/
}



    #home{
        width: 100%;
        height: 100%;
        overflow: auto;
        position: absolute;
        header{
            display: flex;
            height: 120px;
            align-items: center;
            width: 1200px;
            margin: 0 auto;
            .logo{
                flex:0.5;
            }
            .weather{
                flex:0.5;
                color: #fff;
                font-size: 15px;
                .functions{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    div:nth-child(1){
                        margin-right: 80px;
                    }
                    div:nth-child(2){
                        a:nth-child(1){
                            padding-right: 5px;
                        }
                        a:nth-child(2){
                            display: inline-block;
                            border-left: 2px solid #fff;
                            height: 15px;
                            line-height: 15px;
                            border-right: 2px solid #fff;
                            padding: 0 10px;
                        }
                        a:nth-child(3){
                            padding-left: 5px;
                        }
                    }
                }
                .water{
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 16px;
                    a{
                        margin-left: 20px;
                    }
                    .iconfont{
                        color: #fff;
                        font-size: 20px;
                    }
                }
            }
        }
        .tabs{
            width: 1200px;
            margin: 0 auto;
            #list{
            	width: 100%;
            	ul{
            		width: 100%;
            		height: 50px;
            		display: flex;
            		align-items: center;
            		background: #008cee;
            		justify-content: space-around;
            		li{
            			color: #fff;
        			    height: 50px;
						line-height: 50px;
						width: 171px;
    					text-align: center;
    					cursor: pointer;
            		}
            		li:hover{
            			background: #3b82dc;
            			font-weight: 600;
            		}
            		.active{
            			color: #fff;
            			background: #FF9800;
            			font-weight: 600;
            		}
            	}
            }
        }
    }
</style>
