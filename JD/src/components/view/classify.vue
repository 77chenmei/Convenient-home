<template>
    <div id ="classify">
        <div class = "search-top"> 
            <div class = "nocancel">
                <i class = "iconToSearch"></i>
                <router-link to = "search">
                   <input type="search" placeholder="搜索附近的商家、商品" > 
                </router-link>
            </div>
        </div>
        <div class = "classify_main">
            <ul class = "classify_main_left">
                <li class = "left_li" v-for = "(list,index) in lists" :key = "list.id" :class = "index == 0? 'left_li_active':''" @click = "change(index)">
                    {{list.tittle}}
                </li>   
            </ul>
            <div class = "classify_main_right">
                <div class = "classify_right_box">
                    <div v-for = "(item,inde) in data" :key = "'item' + inde">
                        <h5>{{item.tittle}}</h5>
                        <a href="" v-for = "img in item.items" :key = "img.id">
                            <img :src="'/static/images/classify/' + img.image">
                            <span>{{img.tittle}}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer :active2 = "active"></Footer>
    </div>
</template>

<script>
import $ from 'jquery'
import Footer from "@/components/common/index.footer";

export default {
    name:'classify',
    data(){
        return {
            active:'active2',
            lists:[],
            data:[],
        }
    },
    created(){
        $.get(this.apiUl + '/classify/lists',(res)=>{
            //处理数据
            var data = res.data;
            this.lists = data.filter((dat,index)=>{
                var dataCh = data.filter((datC,ind)=>{
                    return datC.pid == dat.id
                })
                if(dataCh.length != 0){
                    dat.items = dataCh
                }
                return dat.pid == 0;
            })
            this.data = this.lists[0].items;
        })
    },
    mounted(){
        $('.classify_main_left').on('click','li',function(){
            $('.left_li_active').removeClass('left_li_active');
            $(this).addClass('left_li_active');
        })
    },
    methods:{
        change(index){
            this.data = this.lists[index].items;
        }
    },
    components:{Footer}
}
</script>
<style scoped>
    * {
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration:none;
    }
    .search-top{
        position: fixed;
        top:0;
        left:0;
        right:0;
        height:44px;
        line-height:44px;
        text-align:center;
        background:#fff;
    }
    .nocancel{
        position: absolute;
        top:8px;
        left:8px;
        right:8px; 
        height:28px;
        line-height:28px;
        border:1px solid #e6e6e6;
        border-radius:2px;
        padding:0 5px 0 20px;
    }
    .iconToSearch{
        position: absolute;
        left:0;
        top:0;
        width:28px;
        height:28px;
        background:url('/static/images/search_bar_sprites.png') no-repeat -8px -8px;
        background-size:44px auto; 
    }
    .nocancel input{
        width:100%;
        height:28px;
        line-height:28px;
        max-width:90%;
        vertical-align:top;
        font-size:14px;
        padding:3px 0;
        outline:none;
        border:none;
    }
    .classify_main_left{
        position: fixed;
        left:0;
        top:45px;
        bottom:50px;
        width:90px;
        z-index:2;
        overflow:auto;
        background:#f4f4f4;
    }
    .classify_main_left .left_li{
        height:43px;
        background:#f8f8f8;
        border-bottom:1px solid #e8e8e8;
        border-right:1px solid #e8e8e8;
        color:#666;
        padding-left:14px;
        line-height:44px;
        font-size:14px;
        white-space:nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
    .classify_main_left .left_li_active{
        padding-left:11px;
        color:#47b34f;
        background:#fff;
        border-left:3px solid #47b34f;
        border-right-color:#fff;
    }
    .classify_main_right{
        margin-top:45px;
        min-height:428px;
    }
    .classify_right_box{
        padding-left:95px;
        padding-bottom:45px;
        background:#fff;
        min-height:428px;
        text-align:left;
    }
    .classify_right_box div{
        padding-top:9px;
    }
    .classify_right_box h5{
        height:19px;
        margin:9px 0 9px 7%;
        line-height:19px;
        font-size:13px;
        color:#666;
        font-weight:normal;
        
    }
    .classify_right_box a{
        display:inline-block;
        width:33%;
        min-height:94px;
        margin-top:6px;
        color:#555;
    }
    .classify_right_box a img{
        display:block;
        width:62px;
        height:62px;
        margin:0 auto;
        background-image:url('/static/imamges/show_default.png');
        background-size:100%;
        background-color:#f4f4f4;
    }
    .classify_right_box a span{
        display:block;
        width:100%;
        text-align:center;
        font-size:12px;
        color:#7d7d7d;
        padding:8px 0;
    }
    
</style>
