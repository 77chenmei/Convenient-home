<template>
    <div id = 'footer'>
        <router-link to="/" class = "footer-index" :class = 'active1'>首页</router-link>
        <router-link to="/classify" class = "footer-classify" :class = 'active2'>分类</router-link>
        <router-link to="/shopcar" class = "footer-shop" :class = 'active3'>购物车</router-link>
        <router-link to="/order" class = "footer-order" :class = 'active4'>订单</router-link>
        <router-link to="/my" class = "footer-my" :class = 'active5'>我的</router-link>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    props:['active1','active2','active3','active4','active5'],
    // props:{
    //     active1:{
    //         type:String
    //     },
    //     active2:{
    //         type:String
    //     },
    //     active3:{
    //         type:String
    //     },
    //     active4:{
    //         type:String
    //     },
    //     active5:{
    //         type:String
    //     }
    // },
    data(){
        return {}
    },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
}
    #footer{
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        height:50px;
        background:#fff;
        border-top:1px solid #d9d9d9;
        font-size:0;
        z-index:999;
    }
    #footer a{
        display: inline-block;
        width:20%;
        height:20px;
        font-size:12px;
        color:#555;
        text-align:center;
        text-decoration:none;
        background:url('/static/images/foot.png') no-repeat center -300px;
        background-repeat:no-repeat;
        padding-top:30px;
        background-size:24px 600px;
    }
    #footer .footer-index{
        background-position:center -250px;
    }
    #footer .footer-classify{
        background-position:center -300px;
    }
    #footer .footer-shop{
        background-position:center -350px;
    }
    #footer .footer-order{
        background-position:center -400px;
    }
    #footer .footer-my{
        background-position:center -450px;
    }
    #footer .footer-index.active1{
        background-position:center 0;
    }
    #footer .footer-classify.active2{
        background-position:center -50px;
    }
    #footer .footer-shop.active3{
        background-position:center -100px;
    }
    #footer .footer-order.active4{
        background-position:center -150px;
    }
    #footer .footer-my.active5{
        background-position:center -200px;
    }
     #footer .foot-active{
         color:#39ac69;
     }
</style>
