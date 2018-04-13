<template>
  <div class = "shopCar">
        <div class = "load" v-if = "!isEmpty">
            <div class = "load_tittle" v-if = "!isLoad">
                登录后将同步购物车中商品
                <router-link to = "login">登录</router-link>
            </div>
            <ul class ="load_ul">
                <li v-for = "(list,shopId,index) in shopList" :key = "list.id" class = "load_li" v-if ="list.num">
                    <div class="address address1" v-if ="index == 0">
                        <p>
                            {{list.address}}
                            <i>(当前位置)</i>
                        </p>
                    </div>
                    <div class ="address address2" v-if ="index == 1">
                        <p>其他位置</p>
                    </div>
                    <div class= "shopcar_details">
                        <router-link :to="{name:'store',query:{id:shopId}}">
                            <h5 class ="shopcar_details_top">
                                {{list.shopName}}
                            </h5>
                            <ul class ="shopCar_ul" v-if = "list.num < 5">
                                <li v-for="item in list.items" :key = "item.id">
                                    <img :src="'/static/images/store/' + item.img">
                                    <i>{{item.num}}</i>
                                    <p>￥{{item.sprice}}</p>
                                </li>
                            </ul>
                            <ul class ="shopCar_ul" v-else>
                                <li v-for = "(item,index) in list.items" :key = "item.id" v-if = "index < 2">
                                    <img :src="'/static/images/store/' + item.img">
                                    <i>{{item.num}}</i>
                                    <p>￥{{item.sprice}}</p>
                                </li>
                                <li class="ellipsis">
                                </li>
                                <li class="shopCar_num">
                                    共{{list.num}}件
                                </li>
                            </ul>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div class = "unload" v-else>
            <div class = "unload_box">
                购物车还空空如也哦~<br>
                登录后将同步购物车中商品<br>
                <router-link to = "login">立即登录</router-link>
            </div>
        </div>
        <Footer :active3 = "active"></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import store from 'storejs';
import Footer from "@/components/common/index.footer";
export default {
    data(){
        return {
            active:'active3',
            shopList:{},
            isEmpty:false, //判断购物车中是否有存在
            isLoad:false, //判断用户是否登录
            shopNum:0, //用于判断该购物车中的商品存在情况，防止出现购物车存在，但购物车中不存在商品
        }
    },
    created(){
        if(store.get('?shopCar')){
            if(store.get('?user')){
                this.isLoad = true;
            }
            //对数据处理 将商店中名中的地址分离出来
            var shopList = store.get('shopCar');
            var shopNum = 0;
            $.each(shopList,function(id,el){
                el.address = el.shopName.split('-')[1];
                el.num = el.items.length;
                shopNum += Number(el.items.length);     
            })
            this.shopNum = shopNum
            this.shopList = shopList;
            if(this.shopNum < 1){
                this.isEmpty = true;
            }
        }else{
            this.isEmpty = true;
        }
    },
    components:{Footer},
    computed:{
        load:{
            get(){
                return store.get('?username')
            },
            set(){}
        },
    },
    props:{}
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
  font-style:normal;
  font-weight:normal;
}
body,html{
    height:100%;
}
.unload{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:#fff;
    padding:100px 0;
}
.unload_box{ 
    color:#666;
    line-height:20px;
    font-size:14px;
    text-align:center;
    background:url('/static/images/unlogin.png') no-repeat center top;
    background-size:96px 96px;
    padding:100px 0 160px 0;
}
.unload_box a{
    display: inline-block;
    margin-top:16px;
    padding:0 8px;
    background: #47b34f;
    color:#fff;
    font-size:15px;
    line-height:35px;
    border-radius:3px;
}
/*用户已登录*/
.load_tittle{
    line-height:20px;
    background:#fbf8e4;
    border-bottom:1px solid #e1d0af;
    color:#fb8217;
    font-size:12px;
    padding:8px 0 7px 0;
    text-align:center;
}
.load_tittle a{
    display: inline-block;
    padding:0 14px;
    background:#fb8217;
    border-radius:3px;
    font-size:11px;
    color:#fff;
}
.load_ul{
    max-width:100%;
    margin-bottom:60px;
}
.load_ul .load_li{
    color:#484848;
    font-size:14px;
    line-height:40px;
    margin-bottom:10px;
    text-align:center;
    padding:0 5px;
    position: relative;
}
.address{
    display: inline-block;
    margin:15px 0 10px 0;
    
    border-radius:32px;
    padding:6px 7px;  
}
.address p{
    line-height:22px;
    height:22px;
    font-size:14px;
    border-radius:32px;
    background-size:auto 12px;
    padding:0 14px 0 30px;
    color:#fff;
}
.address p i{
    font-size:12px;
}
.address.address1{
    background:#d1e7d3; 
}
.address1 p{
    background:#47b34f url('/static/images/index_icon_locate.png') no-repeat 10px 4px;
    background-size:auto 12px;
}
.address.address2{
    background-color:#e2e2e2;
}
.address2 p{
    background:#999 url('/static/images/index_icon_locate.png') no-repeat 10px 4px;
    background-size:auto 12px;
}
.shopcar_details{
    background:#fff;
    margin:0 6px 7px;
    padding-left:2.4%;
}
.shopcar_details>a{
    display:block;
    height:147px;
    line-height:30px;
    color:#333;
    font-size:12px;
    padding:0 5px;
}
.shopcar_details_top{
    border-bottom:1px solid #F7F7F7;
    text-align:left;
}
.shopcar_details ul li{
    float: left;
    width:53px;
    height:83px;
    margin:13px 5px 0 0;
    padding:10px 5px 0 5px;
    position: relative;
}
.shopcar_details>a h5{
    font-size:15px;
    line-height:40px;
    background:url('/static/images/m.png') no-repeat right 10px;
    background-size:auto 20px;
}
.shopCar_ul img{
    width:53px;
    height:53px;
}
.shopCar_ul>li>i{
    position: absolute;
    top:5px;
    right:0px;
    display: inline-block;
    min-width:18px;
    height:18px;
    background:#ff5757;
    color:#fff;
    border-radius:50%;
    line-height:18px;
    font-size:10px;
    text-align:center;
}
.shopCar_ul > li > p{
    margin-top:-10px;
}
.shopCar_ul > li.ellipsis{
    background:#fff url('/static/images/store/ddd.png') no-repeat left center;
    background-size:25px 5px;
}
.shopCar_num{
    text-align:right;
    line-height:80px;
    font-size:15px;
}
</style>
