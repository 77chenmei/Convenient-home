<template>
  <div id = "shopCar">
        <div class = "loading" v-if = "load">
            <ul class ="load_ul">
                <li v-for = "list in orderList" :key = "list.id" class = "load_li">
                    <h5 class ="load_tittle">
                        <span class ="goToShop">{{list.shopname}}</span>
                        <i class ="	fa fa-angle-right"></i>
                        <span class ="load_fish">已完成</span>
                    </h5>
                    <div class ="load_main">
                        <div class = "load_main_box">
                            <div v-for = "comm in list.comm" :key = "comm.id">
                                <img :src="'/static/images/order/' + comm.image">
                                <p class ="load_price">￥{{comm.price}}元</p>
                                <p class ="load_num">共{{comm.num}}件</p>
                                <p class ="load_post">{{comm.post}}</p>
                            </div>
                            <h5 class ="load_box_tittle">
                                <span class ="load_time">{{list.time}}</span>
                                <span class= "buyAgien">再次购买</span>
                            </h5>
                        </div>
                    </div>
                </li>
                <li class ="load_bottom">已显示全部</li>
            </ul>
        </div>
        <div class = "unloading" v-else>
            <div class = "unloading_box">
                登录后才能查看订单哦<br>
                <router-link to = "login">立即登录</router-link>
            </div>
        </div>
        <Footer :active4 = "active"></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import store from 'storejs';
import Footer from "@/components/common/index.footer";

export default {
    data(){
        return {
            active:'active4',
            orderList:[], //存放已买商品信息
        }
    },
    created(){
        //获取店铺信息
        $.get(this.apiUl + '/order/shop',(res)=>{
            this.orderList = res.data;
        })
    },
    computed:{
        load:{
            get(){
                return store.get('?user')
            },
            set(){}
        }
    },
    components:{Footer},
    props:{}
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
  font-weight:normal;
}
body,html{
    height:100%; 
    background:#f4f4f4;
}
.unloading{
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:#fff;
    padding:100px 0;
}
.unloading_box{ 
    color:#666;
    line-height:20px;
    font-size:14px;
    text-align:center;
    background:url('/static/images/unlogin.png') no-repeat center top;
    background-size:96px 96px;
    padding:100px 0 160px 0;
}
.unloading_box a{
    display: inline-block;
    margin-top:16px;
    padding:0 8px;
    background: #fff;
    color:#47b34f;
    font-size:15px;
    line-height:35px;
    border-radius:3px;
    border:1px solid #47b34f;
}
/*用户已登录*/
.load_ul{
    max-width:100%;
    margin-bottom:60px;
}
.load_ul .load_li{
    color:#484848;
    font-size:14px;
    line-height:40px;
    margin-bottom:10px;
    background:#fff;
    text-align:left;
    border-bottom:1px solid #e8e8e8;
    border-top:1px solid #e8e8e8;
    padding:0 10px;
    position: relative;
}
.load_tittle{
    height:40px;
    font-size:15px;
    position: relative;
}
.load_tittle::after{
    display: inline-block;
    content:'';
    width:100%;
    height:1px;
    border-top:1px solid #e8e8e8;
    position: absolute;
    bottom:0;
    left:0;
}
.goToShop{
    display: inline-block;
    max-width:90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;  
}
.load_tittle i{
    position: absolute;
    top:12px;
    color:#C4C4C4;
    font-size:15px;
    padding-left:5px;
}
.load_fish{
    position: absolute;
    right:10px;
}
.load_main{
    position: relative;
    display:flex;
    padding-left:10px;
}
.load_main_box{
    flex:1;
    padding-top:10px;
}
.load_main_box>div{
    position: relative;
    padding-bottom:10px;
}
.load_main_box>div::after{
    content:'';
    display: inline-block;
    width:100%;
    height:1px;
    border-top:1px solid #e8e8e8;
    position: absolute;
    bottom:-1px;
    left:0; 
}
.load_main_box img{
    display: inline-block;
    width:52px;
    height:52px;
    position: relative;
    top:10px;
    left:0;
}
.load_main_box p{
    line-height: 15px;   
    position: absolute;
    right:0;
}
.load_main_box .load_price{
    top:10px;
    color:red;
    font-size:16px;
}
.load_main_box .load_num{
    top:30px;
    font-size:11px;
    color:#333;
}
.load_main_box .load_post{
    top:50px;
    font-size:11px;
    color:#16a9ff;
    border:1px solid #16a9ff;
    border-radius:2px;
}
.load_box_tittle{
    font-size:15px;
}
.buyAgien{
    float: right;
    line-height:15px;
    padding:6px 8px;
    border-radius:2px;
    border:1px solid #d9d9d9;
    margin-top:6px;
}
.load_bottom{
    padding-bottom:10px;
    font-size:14px;
    text-align:center;
}
</style>
