<template>
  <div id ="my">
    <section class = "current">
        <div class = "my_header_top">
            <div class ="my_header1">
                <router-link class ="my_header_img" to="/login">
                    <img src="/static/images/my/1.jpg" v-if ="isLoad">
                </router-link>
                <div class ="my_header_mess" v-if = "isLoad">
                    <p>{{username}} <i class ="my_header_icon1"></i></p>
                    <p>{{phone}} <i class="my_header_icon2"></i></p>
                </div>
                <span v-else>登录/注册</span>
            </div>
            <div class ="my_header2">
                <i class ="my_header_m"></i>
                <i class ="my_header_l"></i>
            </div>
            <router-link to = "" class ="my_vip" v-if ="isLoad"></router-link>
        </div>
        <div class = "user-wallet">
            <ul>
                <li>
                    <img src="/static/images/my/icon_packet.png">
                    <p>我的钱包</p>
                </li>
                <li>
                    <i>--</i>
                    <p>优惠券</p>
                </li>
                <li>
                    <i>--</i>
                    <p>白条</p>
                </li>
                <li>
                    <i>--</i>
                    <p>鲜豆</p>
                </li>
            </ul>
        </div>
        <div class = "adu1">
            <img src="/static/images/my/a1.png">
        </div>
        <ul class = "adu11">
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad1.png">
                    <p>我的关注</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad2.png">
                    <p>我的评价</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad3.png">
                    <p>我的地址</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad4.png">
                    <p>会员减运费</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad5.png">
                    <p>签到有惊喜</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad6.png">
                    <p>退款/售后</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad7.png">
                    <p>客服反馈</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad8.png">
                    <p>帮助中心</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad9.png">
                    <p>办公室超市</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad10.png">
                    <p>配送员招募</p>
                </router-link>
            </li>
            <li>
                <router-link to ="">
                    <img src="/static/images/my/ad11.png">
                    <p>关于我们</p>
                </router-link>
            </li>
        </ul>
        <div class ="logOut" v-if ="isLoad" @click ="logOut">
            退出当前登录
        </div>
    </section>
    <Footer :active5 = "active"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/common/index.footer";
import store from 'storejs';
import $ from 'jquery';

export default {
  data(){
      return{
          active:'active5',
          isLoad:false,//用于判断页面是否已登陆
          username:'', //用户名
          phone:'1111'//手机号码
      }
  },
  created(){
      if(store.get('?user')){
          this.isLoad = true;
          this.username = store.get('user').username;
          this.phone = store.get('user').phone;
      }
  },
methods:{
    logOut(){
        //点击退出当前登录,退出登录
        store.remove('user');
        this.isLoad = false;
    }
  },
  components:{Footer},
  props:{}
}
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
        list-style:none;
        font-weight:normal;
        font-style:normal;
        outline:none;
        border:none;
        text-decoration:none;
    }
    .current{
        margin-bottom:48px;
    }
    .my_header_top{
        width:100%;
        min-height:91px;
        background:url('/static/images/my/my_bgnew.png') no-repeat center bottom;
        background-size:cover;
        text-align:left;    
        padding-top:24px;
        position: relative;
        z-index:999;
    }
    .my_header_img{
        display: inline-block;
        width:61px;
        height:61px;
        background:url('/static/images/my/bg_head_new.png') no-repeat;
        background-size:61px auto;
        margin-left:16px;
        vertical-align:middle;
    }
    .my_header_img img{
        width:100%;
        height:100%;
        border:2px solid #fff;
        border-radius:50%;
    }
    .my_header1 span{
        display: inline-block;
        background:#69c575;
        color:#fff;
        padding:7px 10px;
        border-radius:2px;
    }
    .my_header2{
        position: absolute;
        top:0;
        left:0;
        right:0;
        height:40px;
    }
    .my_header2 i{
        display: inline-block;
        width:22px;
        height:22px;
        position: absolute;
        top:20px;
        margin-right:20px;
    }
    .my_header2 .my_header_l{
        right:0;
        background:url('/static/images/my/user_message_icon.png') no-repeat center center;
        background-size:22px auto;
    }
    .my_header2 .my_header_m{
        right:32px;
        background:url('/static/images/my/icon_er.png') no-repeat center center;
        background-size:22px auto;
    }
    .my_vip{
        position: absolute;
        bottom:0;
        right:0;
        width:102px;
        height:65px;
        background:url('/static/images/my/vip_centernew@2x.png') center center;
        background-size:cover;
    }
    .my_header_mess{
        display: inline-block;
        vertical-align:middle;
        color:#fff;
    }
    .my_header_mess p{
        height:21px;
        line-height:21px;
        font-size:15px;
    }
    .my_header_mess p:nth-child(2){
        font-size:13px;
    }
    .my_header_mess i{
        display: inline-block;
        width:14px;
        height:14px;
    }
    .my_header_icon1{
        background:url('/static/images/my/vip_icon_gray.png') no-repeat center center;
        background-size:14px auto;
    }
    .my_header_icon2{
        background:url('/static/images/my/icon_edit.png') no-repeat center center;
        background-size:14px auto;
    }
    .user-wallet{
        padding-left:15px;
        margin-bottom:10px;
        background:#fff;
        position: relative;
        top:-5px;
    }
    .user-wallet ul{
        padding:20px 0 12px;
        vertical-align:middle;
    }
    .user-wallet ul li{
        display:inline-block;
        width:23%;
        box-sizing:border-box;
        line-height:25px;
        font-size:12px;
    }
    .user-wallet li i{
        display: block;
        line-height:25px;
        height:25px;
    }
    .user-wallet li img{
        display:block;
        width:25px;
        height:25px;
        margin:0 auto;
    }
    .adu1 img{
        display: inline-block;
        width:100%;
        height:75px;
    }
    .adu11{
        width:100%;
        background:#fff;
        overflow: hidden;
    }
    .adu11 li{
        width:25%;
        float: left;
        padding:1px 0 25px 0;
        border-bottom:1px solid #e8e8e8;
        text-align:center;
        line-height:35px;
        box-sizing:border-box;
    }
    .adu11 li a{
        color:#323232;
        font-size:13px;
        text-align:center;
    }
    .adu11 a p{
        text-align:center;
    }
    .adu11 a img{
        display:block;
        width:47px;
        height:47px;
        margin:0 auto;
    }
    .logOut{
        display:block;
        width:60%;
        background:rgba(255,0,0,0.4);
        color:#fff;
        font-size:16px;
        padding:5px 7px;
        line-height:30px;
        margin:20px auto;
        border-radius:20px;
        text-align:center;
    }
</style>
