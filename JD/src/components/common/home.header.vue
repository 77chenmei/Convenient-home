<template>
    <div>
        <div id= "headerTop">
            <a class = "location">
                <span>苏果超市(金浦广场购物广场店)</span>
                <i class = "locd"></i>
            </a>
            <i class = "locd1"></i>
            <a href="" class = "message">
                <i class = "locd2"></i>
            </a>
        </div>
        <div id= "head">
            <router-link id ="serach"  to = "search">
                <span>花篮</span>
            </router-link>   
            <div class = "serch-hot">
                <router-link v-for = "lit in list" :key = 'lit.id' to = "">
                    {{lit.tittle}}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        $.get(this.apiUl + '/index/header',(data) =>{
            this.list = data.lists
        })
    },
    mounted(){
        $(window).scroll(()=>{
            //滚动条滚动的距离
            var top = $(window).scrollTop(),
                a = top / 105; 
            if(top >= 105){
               a = 1;
               $('.locd1').css('display','block')
            } else{
                $('.locd1').css('display','none')
            }
            //头部固定滚动的背景色加深
            $('#headerTop').css('background','-webkit-linear-gradient(left,rgba(84,215,93,'+a+'),rgba(72,194,81,'+a+'))') 
            //头部搜索部分减淡
            $('.serch-hot a').css('color','rgba(255,255,255,'+ (1-a)+')');
        })
    }
};
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
        text-decoration:none;
    }
    #headerTop {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 44px;
        line-height: 44px;
        /* background: url("/static/images/index_icon_address.png") no-repeat center center;
        background-size: cover; */
        text-align: left;
    }
    #headerTop .location {
        min-width: 40%;
        height: 44px;
        line-height: 44px;
        color: #fff;
        vertical-align: top;
        font-size:0;
    }
    .location span {
        font-size: 16px;
        background: url("/static/images/index_icon_locate.png") no-repeat 0px 14px;
        background-size: 14px;
        padding-left: 20px;
        margin-left: 12px;
        margin-right:4px;
        max-width: 60%;
        /* 单行省略 */
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .location .locd {
        display: inline-block;
        width: 10px;
        height: 44px;
        background: url("/static/images/index_icon_down.png") no-repeat center center;
        background-size: 8px;
    }
    .message .locd2{
        width:20px;
        height:44px;
        background: url("/static/images/index_icon_message.png") no-repeat center center;
        background-size: 20px;
        float:right;
        margin-right:10px;
    }
    .locd1{
        display: none;
        width:40px;
        height:44px;
        background: url("/static/images/index_icon24.png") no-repeat left -70px;
        background-size: 26px;
        float:right;
    }
    #head{
        width:100%;
        background: url("/static/images/5a719023Na50b8b1b.png") center center;
        background-size: cover;
        overflow: hidden;
    }
    #serach{
        display:block;
        width:95%;
        height:34px;
        line-height:34px;
        border-radius:17px;
        margin:49px auto 0px;
        background:#fff;
        text-align:center;
    }
    #serach span{
        background:url("/static/images/index_icon_sea.png") no-repeat 0 0;
        background-size:15px;
        padding-left: 20px;
        color:#999;
        font-size:14px;
        line-height:14px;
    }
    .serch-hot{
        width:95%;
        height:27px;
        line-height:27px;
        margin:0 auto;
    }
    .serch-hot a{
        font-size:12px;
        color:#fff;
        padding:0 8px;
        /* 设置a标签中的内容：将整个词全部显示，不会出现半个出现 */
        display: inline-block; 
    }
</style>