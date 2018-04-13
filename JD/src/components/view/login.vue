<template>
    <div id = "login">
        <div class ="header-box">
            <div class="login-header">
                <span class = "header-back icon" @click = "back"></span>
                <span class = "header-tittle">京东登录</span>
            </div>
            <ul class = "login-type">
                <li class = "login-pas login-pm"  @click = "loginType('login-pas')">
                    <span>账号密码登录</span>
                </li>
                <li  class = "login-mes"  @click = "loginType('login-mes')">
                    <span>短信验证码登录</span>
                </li>
            </ul>
        </div>   
        <div class = "wrapper">
            <div class = "login-username" v-show = "type=='users'">
                <div class = "input-container">
                    <div class = "input-text">账号</div>
                    <input type="text" class = "user" placeholder="用户名/邮箱/已验证手机" v-model="username">
                    <i class = "icon icon-clear"></i>
                </div>
                <div class = "input-container">
                    <div class = "input-text">密码</div>
                    <input type="password" class = "pass" placeholder="请输入密码" v-model="password">
                    <i class = "icon icon-clear"></i>
                    <div class = "checkbtn checkbtn1"></div>
                </div>
                <div class="input-container img_code_box">
                    <input type="text" placeholder="请输入图片验证码" class = "img_input">
                    <span class = "img_code" @click = "refreshCode">
                        <Sidentify :identifyCode="identifyCode"></Sidentify>
                    </span>
                </div>
            </div>
            <div class = "login-phone" v-show="type == 'phone'">
                <div class = "sms-input-box">
                    <div class = "input-container">
                        <div class = "area-box">
                            <span class = "area-code">+86</span>
                            <i class = "area-drop"></i>
                        </div>
                        <input type="text" class = "phone" placeholder="请输入手机号" v-model= "phone">
                    </div> 
                    <button class = "mes-code" data-mescode = 'true' @click = "sendCode">获取验证码</button> 
                </div>
                <div class="input-container">
                    <input type="text" placeholder="请输入收到的验证码" class = "telCode" v-model = "code">
                    <i class = "icon icon-clear"></i>
                </div>
            </div>
            <div class = "notice">&nbsp;</div>
            <router-link to = "" class= "login_btn login_btn1" :class ="logb" @click.native ="login" data-abled = false>登录</router-link>
            <router-link to = "" class= "login_btn btn-onestep">一键登录</router-link>
            <div class = "clearfix">
                <router-link to = "/forgetPass" class = "clear_left">
                    <i class = "icon icon_clock"></i>
                   忘记密码
                </router-link>
                <router-link to = "/register" class = "clear_right">
                    <i class = "icon icon_reg"></i>
                   手机快速注册
                </router-link>
            </div>
        </div> 
        <div class = "quick-login">
                <h4 class = "txt-otherLogin">其他登录方式</h4>
                <router-link to = "" class = "quick_qq">
                    <i class = "icon icon_qq"></i>
                </router-link>
                <router-link to = "" class="quick_wx">
                    <i class = "icon icon_wx"></i>
                </router-link>
                <div class="agreement-tips">
                    <p>
                        登录即代表您已同意
                        <a href="//in.m.jd.com/help/app/private_policy.html">京东隐私政策</a>
                    </p>
                </div>
            </div>
    </div>
</template>

<script>
import $ from 'jquery';
import store from 'storejs';
import Sidentify from '@/components/common/identify.vue'

export default {
    data(){
        return {
            type:'users',//账户登录
            username:'', //用户名
            password:'', //用户密码
            phone:'', //用户手机
            code:'', //用户验证码
            identifyCodes: "1234567890",
            identifyCode: "",
        }
    },
    mounted(){
        $('.input-container input').focus(function(){
            $(this).siblings('.icon-clear').css('display','block');
        }).blur(function(){
            $(this).siblings('.icon-clear').css('display','none');
        })
        $('.checkbtn').click(function(){
            var type = $('.pass').prop('type');
            if(type == 'password'){
                $(this).removeClass('checkbtn1').addClass('checkbtn2');
                $('.pass').prop('type','text')
            }else{
                $(this).removeClass('checkbtn2').addClass('checkbtn1');
                $('.pass').prop('type','password')
            }
        })

        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    methods:{
        loginType(name){ //登录方式选择
            $('.login-pm').removeClass('login-pm');
            $('.' + name).addClass('login-pm');
            if(this.type == 'users'){
                this.type = 'phone';
            }else{
                this.type = 'users';
            }
        },
        back(){ //后退一步
            this.$router.go(-1);
        },
        login(){ //点击登录
            var abled = $('.login_btn1').attr('data-abled');
            if(abled == 'true'){
                var username = $('.user').val(),
                    codeVal = $('.img_input').val();
                if(this.type == 'users'){ //账户密码登录
                    if(codeVal == this.identifyCode){
                        //判断用户登录是否正确
                        $.post(this.apiUl + '/login/user',{
                            username:username,
                        },(res)=>{
                            if(res == null){
                                //验证失败 即登录失败
                                $('.notice').text('账号或密码不正确');
                            }else{
                                //验证成功
                                if(this.password == res.data[0].password){
                                    //将用户名存入缓存中去
                                    store.set('user',{
                                        username:username,
                                        phone:res.data[0].phone
                                    });
                                    this.$router.push('/shopcar');
                                    $('.notice').text('');
                                }else{
                                    $('.notice').text('账号或密码不正确');
                                }
                            }
                        },'json')
                    }else{
                        $('.notice').text('验证码输入有误');
                        this.refreshCode();
                    } 
                }else{
                   var regex = /^1[34578][0-9]{9}$/
                    if(regex.test(this.phone)){
                        if(this.code == store.get('code')){
                            $.post(this.apiUl + '/login/phone',{
                                phone:this.phone,
                            },(res)=>{
                                if(res.data.length == 0){
                                    $('.notice').text('该手机号未注册');
                                }else{
                                    $('.notice').text('');
                                    store.set('user',{
                                        username:res.data[0].username,
                                        phone:this.phone
                                    });
                                    this.$router.push('/shopcar');
                                }
                            },'json')
                        }else{
                            $('.notice').text('验证码输入有误');
                        }
                    }else{
                        $('.notice').text('手机号码格式输入有误');
                    }
                
                }
            }
        },
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
        },
        makeCode(o, l) {
            for (let i = 0; i < l; i++) {
                this.identifyCode += this.identifyCodes[
                this.randomNum(0, this.identifyCodes.length)
                ];
            }
        },
        makeRandom(min,max){
            return Math.floor(Math.random()*(max-min) + min);
        },
        sendCode(){ 
            //点击获取验证码
            if(this.phone == ''){
                $('.notice').text('请输入手机号码');
            }else{
                $('.notice').text('');
                var isSend = $('.mes-code').attr('data-mescode');
                if(isSend == 'true'){
                    $('.mes-code').attr('data-mescode',false);
                    var code = '';
                    for(var i = 0;i<4;i++){
                        code += this.makeRandom(0,10);
                    }
                    console.log(code)
                    store.set('code',code);
                    var time = 30;
                    $('.mes-code').text('重新发送'+ time +'s');
                    //开启倒计时
                    var timer = setInterval(function(){
                        time --;
                        $('.mes-code').text('重新发送'+ time +'s');
                        if(time == 0){
                            $('.mes-code').text('获取验证码');
                            $('.mes-code').attr('data-mescode',true);
                            clearInterval(timer);
                            store.set('code','');
                        }
                    },1000)
                }
            }
        },
    },
    computed:{ 
        logb:{
            get(){
                if(this.type == 'users'){
                    if(this.username != '' && this.password != ''){
                        $('.login_btn1').css({'background':'red','color':'#fff'});
                        $('.login_btn1').attr('data-abled','true');
                        $('.img_code_box').css('display','block');
                    }else{
                        $('.login_btn1').css({'background':'#eee','color':'#acc0df'});
                        $('.login_btn1').attr('data-abled','false');
                    }
                }else{
                    if(this.phone != '' && this.code != ''){
                        $('.login_btn1').css({'background':'red','color':'#fff'});
                        $('.login_btn1').attr('data-abled','true');
                    }else{
                        $('.login_btn1').css({'background':'#eee','color':'#acc0df'});
                        $('.login_btn1').attr('data-abled','false');
                    }
                }
                
            },
            set(){}
        }
    },
    components:{Sidentify}
}
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
        text-decoration:none;
    }
    a:active{
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-user-select: none;
        -moz-user-focus: none;
        -moz-user-select: none;
    }
    html{
        list-style:none;
    }
    body{
        font-size:14px;
        background:#fff;
    }
    input::-webkit-input-placeholder{ 
	    color:#ccc;
	}
    #login{
        height:100%;
        background:#fff;
        /* position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0; */
    }
    .header-box{
        width:100%;
        position: fixed;
        top:0;
        left:0;
    }
    .login-header{
        width:100%;
        height:45px;
        line-height:45px;
        font-size:17px;
        color:#616161;
        background:#f9f9f9;
        border-bottom:1px solid #bbb;
        text-align:center;
    }
    .icon{
        display:inline-block;
        width:22px;
        height:22px;
        background:url('/static/images/iconBg.png') no-repeat;
        background-size:100% auto;
        position: absolute;
    }
    .header-back{
        background-position: 0 -64px;
        top:12px;
        left:12px;
    }
    .login-type{
        height:44px;
        line-height:44px;
        font-size:14px;
        border-bottom:1px solid #d7d7d7;
        background:#fff;
    }
    .login-type li{
        display: inline-block;
        width:50%;
    }
    .login-pas{
        float:left;
    }
    .login-type li span{
        padding:13px 10px;
    }
    .login-pm span{
        border-bottom:2px solid #f23030;
    }
    .wrapper{
        width:100%;
        height:auto;
        padding:0 20px 20px;
        margin:0 auto;
        position: fixed;
        top:90px;
        left:0;
        bottom:48px;
        background:#fff;
        box-sizing:border-box;
    }
    .input-container{
        position: relative;
        width:100%;
        height:48px;
        line-height:48px;
        border-bottom:1px solid #d7d7d7;
        padding:0 5px;
        box-sizing:border-box;
        text-align:left;
    }
    .input-text{
        position: absolute;
        display: inline-block;
        width:60px;
        text-align:left;
    }
    .input-container input{
        border:none;
        outline:none;
        display: inline-block;
        box-sizing:border-box;
    }
    .user{
        width:100%;
        padding:3px 60px;
    }
    .icon-clear{
        display:none;
        top:16px;
        right:10px;
    }
    .pass{
        width:100%;
        padding:7px 60px;
    }
    .pass + .icon-clear{
        right:45px;
    }
    .checkbtn{
        width:30px;
        height:18px;   
        position: absolute;
        right:5px;
        top:15px;
    }
    .checkbtn1{
       background:url('/static/images/hide_password.png'); 
       background-size:100% auto;
    }
    .checkbtn2{
       background:url('/static/images/show_password.png'); 
       background-size:100% auto;
    }
    .area-box{
        position: absolute;
        width:62px;
        text-align:right;
    }
    .area-box .area-drop{
        display: inline-block;
        width:0;
        height:0;
        border-top:5px solid #ABABAB;
        border-left:4px solid transparent;
        border-right:4px solid transparent;
        margin:0 7px 0 2px;
        padding-top:1px;
    }
    .login-phone .sms-input-box{
        position: relative;
    }
    .login-phone .phone{
        width:100%;
        padding:0 130px 0 60px;
    }
    .mes-code{
        position: absolute;
        top:12.5px;
        right:0;
        width:118px;
        border:none;
        outline:none;
        border-left:1px solid #d7d7d7;
        background:#fff;
        height:23px;
        line-height:23px;
        color:#848689;
    }
    .img_code_box{
        display:none;
    }
    .img_code_box input{
        width:100%;
        padding:0 80px 0 0;
    }
    .img_code{
        position: absolute;
        right:-6px;
        top:4.5px;
        width:120px;
        height:40px;
        border-left:1px solid #d7d7d7;
    }
    .img_code .s-canvas{
        width:120px;
        height:40px;
        border:1px solid transparent;
    }
    .notice{
        font-size:12px;
        line-height:30px;
        color:#f23030;
        min-height:15px;
        text-align:left;
    }
    .login_btn{
        display:block;
        color:#acc0df;
        height:45px;
        line-height:45px;
        background:#eee;
        border-radius:2px;
        letter-spacing:5px;
        text-align:center;
    }
    .btn-onestep{
        border:1px solid #f23030;
        background:#fff;
        color:#f23030!important;
        margin-top:10px;
        text-align:center;
    }
    .clearfix{
        margin-top:20px;
        text-align:center;   
        overflow: hidden;
    }
    .clearfix a{
        display: block;
        text-indent:25px;
        color:#333;
        position: relative;
        font-size:12px;
    }
    .clear_left{
        float:left; 
    }
    .icon_clock{
        background-position:0 -25px;
        left:0;
        top:-2px;
    }
    .clear_right{
        float:right;
    }
    .icon_reg{
        background-position:0 -43px;
        left:0;
        top:-2px;
    }
    .quick-login{
        /* margin-top:118px; */
        height:85px;
        padding:24.5px 10px 0 10px;
        border-top:1px solid #d7d7d7;
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        background:#fff;
    }
    .quick-login a{
        display: inline-block;
        position: relative;
        width:72px;
        color:#616161;
        margin:0 10px;
        font-size:14px;
    }
    .txt-otherLogin{
        position: absolute;
        top:-19px;
        left:50%;
        background:#fff;
        padding:5px 15px;
        color:#bfbfbf;
        transform:translateX(-50%);
    }
    .icon_qq{
        background-position:0 -128px
    }
    .icon_wx{
        background-position:0 -155px;
    }
    .agreement-tips{
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        height:30px;
        line-height:30px;
        font-size:14px;
        text-align: center;
    }
    .agreement-tips a{
        width:auto;
        margin:0;
        color:#333;
        text-decoration:underline;
    }
</style>


