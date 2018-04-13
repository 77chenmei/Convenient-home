<template>
     <div id = "forgetPass">
        <div class="pass_header">
            <span class = "pass_back pass_icon" @click ="backTo"></span>
            <span class = "pass_tittle">忘记密码</span>
        </div>
        <section class ="forget_page">
            <div class ="input_container input_cont1">
                <div class = "input_text">账号</div>
                <input type="text" class = "input_user" placeholder="用户名/邮箱/已验证手机">
                <i class = "icon icon_clear"></i>
            </div>
            <div class ="input_container input_cont2" @click="showImg">
                <div class = "input_text">
                    <img src="/static/images/init.gif">
                </div>
                <span>点击完成验证</span>
            </div>
            <div class ="pass_notice">请输入用户名</div>
        </section>
        
        <!-- 验证图片显示框 -->
        <div class ="captcha_dom">
            <div class ="captcha">
                <div class ="captcha_header">
                    <h5>
                        安全验证
                        <img src="/static/images/refresh.png" @click="refreshCode">
                    </h5>    
                </div>
                <div class="code">
                    <Sidentify :identifyCode="identifyCode"></Sidentify>
                </div>
                <div class ="yanzheng">
                    <input type = "text" class = "code_input" placeholder="请输入验证码">
                    <span class ="code_btn" @click = "sure">确认</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import Sidentify from '@/components/common/identify.vue'
// Vue.use(SIdentify)

export default {
    data(){
        return{
            identifyCodes: "1234567890",
            identifyCode: ""
        }
    },
    created(){

    },
    methods:{
        backTo(){ //后退一步
            this.$router.go(-1);
        },
        showImg(){
            if($('.input_user').val() == ''){
                $('.pass_notice').text('请输入用户名').fadeIn(500);
                $('.input_user').focus();
                setTimeout(function(){
                    $('.pass_notice').fadeOut(500);
                },3000)
            }else{
                var regex = /^1[34578][0-9]{9}$/;
                if(regex.test($('.input_user').val())){
                    $('.input_text img').attr('src','/static/images/loading.gif');
                    $('.input_text').siblings(' span').text('安全检测中');
                    setTimeout(function(){
                        $('.captcha_dom').css('display','block');
                    },1000)
                }else{
                    $('.pass_notice').text('手机号码格式输入有误').fadeIn(500);
                    $('.input_user').val('').focus();
                    setTimeout(function(){
                        $('.pass_notice').fadeOut(500);
                    },3000)
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
        sure(){
            var val = $('.code_input').val();
            if(val == this.identifyCode){
                $('.input_text img').attr('src','/static/images/init.gif');
                $('.input_text').siblings(' span').text('点击完成验证');
                $('.captcha_dom').css('display','none');
            }
        }
    },
    mounted() {
        $('.input_user').focus(function(){
                            $('.icon_clear').css('display','block');
                        }).blur(function(){
                            if($(this).val() == ''){
                                $('.icon_clear').css('display','none');
                            }  
                        }).keydown(function(){
                            $('.icon_clear').css('display','block');
                        })
       
        $('.icon_clear').click(function(){
                $('.input_user').val('')
                                .focus();
        })
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    },
    components:{Sidentify}
}
</script>

<style scoped>
    *{
        margin:0;
        padding:0;
        text-decoration:none;
        list-style:none;
        font-weight:normal;
    }
    input::-webkit-input-placeholder{ 
	    color:#ccc;
	}
    #forgetPass{
        height:100%;
        overflow: hidden;
    }
    .pass_header{
        width:100%;
        height:45px;
        line-height:45px;
        font-size:17px;
        color:#616161;
        background:#f9f9f9;
        border-bottom:1px solid #bbb;
        text-align:center;
        position: fixed;
        top:0;
        left:0;
    }
    .pass_icon{
        display:inline-block;
        width:22px;
        height:22px;
        background:url('/static/images/iconBg.png') no-repeat;
        background-size:100% auto;
        position: absolute;
    }
    .pass_back{
        background-position: 0 -64px;
        top:12px;
        left:12px;
    }
    .forget_page{
        width:100%;
        padding:5px 20px 20px;
        margin:45px auto 0;
        box-sizing:border-box;
    }
    .input_container{
        position: relative;
        width:100%;
        height:48px;
        line-height:48px;     
        padding:0 5px;
        box-sizing:border-box;
        text-align:left;
        background:#fff;
        border-radius:2px;
        margin-top:10px;
    }
    .input_cont1{
        border:1px solid #d7d7d7;
    }
    .input_cont2{
        border:1px solid #409eff;
    }
    .input_text{
        position: absolute;
        display: inline-block;
        width:60px;
        text-align:left;
    }
    .input_text img{
        width: auto;
        height:22px;
        padding-top:10px;
    }
    .input_container input{
        border:none;
        outline:none;
        display: inline-block;
        box-sizing:border-box;
    }
    .input_user{
        width:100%;
        padding:3px 60px;
    }
    .input_container span{
        margin:0 45px;
        color:#409eff;
    }
    .icon_clear{
        width:22px;
        height:22px;
        background:url('/static/images/iconBg.png') no-repeat;
        background-size:100% auto;
        position: absolute;
        display:none;
        top:16px;
        right:10px;
    }
    .pass_notice{
        margin:80px auto;
        background:rgba(0,0,0,0.4);
        width:60%;
        line-height:40px;
        height:40px;
        border-radius:5px;
        display:none;
        text-align:center;
    }
    .captcha_dom{
        position: fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        background:rgba(0,0,0,0.4);
        display:none;
    }
    .captcha{
        position: fixed;
        width:80%;
        top:20%;
        left:10%;
        background:#f8f8f8;
        border-radius:5px;
        font-family:PingFang-SC-Regular;
    }
    .captcha_header{
        line-height:45px;
        font-size:18px;
        color:#333;
        text-align:center;
    }
    .captcha_header h5{
        text-align:center;
    }
    .captcha_header img{
        width:20px;
        height:auto;
        position: absolute;
        right:10px;
        top:10px;
    }
    .code { 
        margin: 10px auto;
        width: 114px;
        height: 50px;
    }
    .yanzheng{
        margin-bottom:20px;
        text-align:left;
        padding:0 30px;
    }
    .yanzheng .code_input{
        width:60%;
        line-height:30px;
        border-radius:5px;
        outline:none;
    }
    .yanzheng .code_btn{
        display: inline-block;
        border:1px solid lightgray;
        line-height:20px;
        padding:5px;
        border-radius:4px;
        background:grey;
        color:#fff;
        margin:0 10px;
    }
</style>
