<template>
  <div id = "register">
    <div class ="agreement-dialog">
        <div class ="agreement-body">
            <h4 class ="agreement-tittle">注册协议及隐私政策</h4>
            <div class ="agreement-content">
                <p>
                在您注册成为京东用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，
                    <span class ="important-tip">请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：</span>
                </p>
                <p class ="link-top"> 
                    <a href="http://m.jd.com//help/app/register.html">《京东用户注册协议》</a>
                </p>
                <p class ="link-content"> 
                    <a href="http://in.m.jd.com/help/app/private_policy.html">《用户隐私政策》</a>
                </p>
                <p class ="link-bottom"> 
                    <a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a>
                </p>
                <p>
                    <span class ="important-tip">【请您注意】如果您不同意上述协议或其中任何条款约定，请您停止注册。您停止注册后将仅可以浏览我们的商品信息但无法享受我们的产品或服务。如您按照注册流程提示填写信息、阅读并点击同意上述协议且完成全部注册流程后，即表示您已充分阅读、理解并接受协议的全部内容；并表明您也同意京东可以依据以上的隐私政策内容来处理您的个人信息。</span>
                    如您对以上协议内容有任何疑问，您可随时与京东客服联系。
                </p>
            </div>
            <div class="agreement-btn-wrap">
                <p class="agreement-notice">
                    <span>点击同意即表示您已阅读并同意
                        <a href="https://m.jd.com//help/app/register.html">《京东用户注册协议》</a>
                        与
                        <a href="//in.m.jd.com/help/app/private_policy.html">《京东隐私政策》</a>
                        并将您的订单信息共享给为完成此订单所必须的第三方合作方。关于
                        <a href="https://in.m.jd.com/help/app/order_sharing_info.html">《订单共享与安全》</a>
                    </span>
                </p>
                <div class="agreement-btns">
                    <a href="javascript:;" class="agreement-btn btn-cancel" @click ="cancel">不同意</a>
                    <a href="javascript:;" class="agreement-btn btn-complete"  @click ="complete">同意</a>
                </div>
            </div>  
        </div>
    </div>
    <div class ="register">
        <div class="register_header">
            <span class = "register_back register_icon" @click = "back1"></span>
            <span class = "register_tittle">京东注册</span>
        </div>
        <div id ="yanzheng">
            <section class ="register_page">
                <div class ="input_container input_cont1">
                    <router-link to ="/provice" class = "input_text">
                    + {{area}}
                    <i class ="reg_icon"></i>
                    </router-link>
                    <input type="text" class = "input_user" placeholder="请输入手机号">
                    <i class = "icon_clear"></i>
                </div>
                <div class ="input_container input_cont2" @click="validation">
                    <div class = "input_text">
                        <img src="/static/images/init.gif">
                    </div>
                    <span>点击完成验证</span>
                </div>
                <div class ="register_notice"></div>
            </section>
            <!-- 验证图片显示框 -->
            <div class ="captcha_dom">
                <div class ="captcha">
                    <div class ="captcha_header">
                        <h5>安全验证
                            <img src="/static/images/refresh.png" @click="refresh">    
                        </h5>    
                    </div>
                    <div class="code">
                        <span v-for ="(iden,index) in identifyCode" :key = "index" :style ="{color:iden.color,fontSize:iden.size,transform:iden.rotate}">
                            {{iden.num}}
                        </span>
                    </div>
                    <div class ="yanzheng">
                        <input type = "text" class = "code_input" placeholder="请输入验证码">
                        <span class ="code_btn" @click = "sure">确认</span>
                    </div>
                    <p class="yan_notice"></p>
                </div>
            </div>
            <div class ="pop-dialog">
                <div class ="pop-body">
                    <div class ="pop-top">
                        <img src="/static/images/icon_warn.png">
                    </div>
                    <p class ="pop-msg">
                        我们将发送短信/语音验证码至：<br>
                        {{phone}}
                    </p>
                    <div class="pop-btns">
                        <a href="javascript:void(0)" @click ="back">取消</a>
                        <a href="javascript:void(0)" @click ="pop_sure">确定</a>
                    </div>
                </div>
            </div>
        </div>
        <div id ="regpage">
            <div class="tips-wrap">
                <span class="pre-span">请输入</span>
                <span class="mobile-span">{{phone}}</span>
                <span class="suffix-span">收到的验证码：</span>
            </div>
            <div class="input-box2">
                <div class="input-container2">
                    <input type="text" placeholder="请输入手机验证码" class="input_user telCode" @input="telCode">
                    <i class="icon_clear"></i>
                </div>
                <button data-mescode="true" class="mesg-code" @click ="sendCode">获取验证码</button>
            </div>
             <a href="javascript:;" class="next-step" @click ="nextStep">下一步</a>
            <div class="question-box">
                <span class="issues">遇到问题？请</span>
                <a href="tel:4006065500" class="customer-service">联系客服</a>
            </div>
            <p class="reg_notice"></p>
            <div class ="pop-dialog2">
                <div class ="pop-body2">
                    <div class ="pop-top">
                        <img src="/static/images/icon_warn.png">
                    </div>
                    <p class ="pop-msg">
                        点击“返回”将中断注册，确定返回？
                    </p>
                    <div class="pop-btns">
                        <a href="javascript:void(0)" @click ="back2">取消</a>
                        <a href="javascript:void(0)" @click ="sure2">确定</a>
                    </div>
                </div>
            </div>
        </div>
        <div id = "reg_password">
            <section class="page">
                <div class = "input_container">
                    <input type = "password" class = "input_user pass" placeholder="请设置6-20位登录密码" @keyup = "passdown">
                    <i class = "icon_clear"></i>
                    <div class = "checkbtn checkbtn1" @click ="checkbtn"></div>
                </div>
                <div class="regpass_notice">
                    <span class="notice-def">密码由6-20位字母、数字或半角符号组成，不能是10位以下纯数字/字母/半角符号，字母需区分大小写</span>
                </div>
                <a href="javascript:;" class="next-step next-step2" @click ="finsh">完成</a>
                <div class="question-box">
                    <span class="issues">遇到问题？请</span>
                    <a href="tel:4006065500" class="J_ping customer-service" report-eventid="MLoginRegister_SetNewPasswordHelp">联系客服</a>
                </div>
            </section>
            <div class ="pop-dialog3">
                <div class ="pop-body3">
                    <div class ="pop-top">
                        <img src="/static/images/icon_warn.png">
                    </div>
                    <p class ="pop-msg">
                        您的登录账户名为：<br>
                        {{phone}}
                    </p>
                </div>
            </div>
        </div>
    </div>
      
  </div>
</template>

<script>
import $ from 'jquery';
import store from 'storejs';
//import Page from '@/components/common/register.yan.vue';
//import Toast from '@/components/common/register.toast.vue';

export default {
    name:'register',
    data(){
        return{
            identifyCode:[],//随机生成验证码
            num:'',//生成的验证码字符串
            phone:'',//存放手机号码
            area:'86'//存放区号
        }
    },
    created(){
        this.refresh();
    },
    mounted(){ 
        $('.input_user').map(function(){
            $(this).focus(function(){
                    $(this).siblings('.icon_clear').css('display','block');
                }).blur(function(){
                    if($(this).val() == ''){
                        $(this).siblings('.icon_clear').css('display','none');
                    }  
                }).keydown(function(){
                    $(this).siblings('.icon_clear').css('display','block');
            })
        })
        $('.icon_clear').map(function(){
            $(this).click(function(){
                $(this).siblings('.input_user').val('')
                                                .focus();
            })
        })

        $('.pass').focus(function(){
                    $(this).siblings('.icon_clear').css('display','block');
                }).blur(function(){
                    if($(this).val() == ''){
                        $(this).siblings('.icon_clear').css('display','none');
                        }  
                })
        
        if(this.$route.params.area){
            this.area = this.$route.params.area;
            this.complete();
        }else{
            this.area = "86";
        }
    },
    methods:{
        back(){ //后退一步
            var isregpage = $('#regpage').css('display');
            if(isregpage == 'block'){
                $('#regpage').find('.pop-dialog2').css('display','block');
            }else{
                this.$router.go(-1);
            }
        },
        back1(){
            this.$router.push('/login');
        },
        back2(){ //#regpage 中的取消
             $('#regpage').find('.pop-dialog2').css('display','none');
        },
        sure2(){ //#regpage 中的确定
            this.$router.go(-1);
        },
        cancel(){ //点击agreement不同意
            this.$router.go(-1);
        },
        complete(){ //点击agreement同意
            $('.agreement-dialog').css('display','none');
        },
        validation(){ //点击验证
            var val = $('.input_user').val(),
                regex = /^1[34578][0-9]{9}$/;
            if(regex.test(val)){
                //判断该手机号码是否已经注册
                this.phone = val;
                $.get(this.apiUl + '/register/getuser',{
                    phone:this.phone
                },res=>{
                    if(res.length == 0){
                        $('.input_text img').attr('src','/static/images/loading.gif');
                        $('.input_text').siblings(' span').text('安全检测中');
                        $('.captcha_dom').css('display','block');
                    }else{
                        $('.register_notice').text('该手机号码已注册').fadeIn(1000);
                        $('.input_user').val('').focus();
                        setTimeout(function(){
                            $('.register_notice').text('').fadeOut(1000);
                        },4000)
                    }
                })
            }else{
                $('.register_notice').text('手机号格式错误').fadeIn(1000);
                $('.input_user').val('').focus();
                setTimeout(function(){
                    $('.register_notice').text('').fadeOut(1000);
                },4000)
            }
        },
        makeRandom(min,max){
            return Math.floor(Math.random()*(max-min) + min);
        },
        makeColor(){
            var a = this.makeRandom(0,256),
                b = this.makeRandom(0,256),
                c = this.makeRandom(0,256),
                d = this.makeRandom(0,10);
           $('.code').css('background','rgba('+a +','+ b +','+ c+','+ d/10 +')'); 
        },
        makeCode(){
            var arr = [[0,9],[65,90],[97,122]],
                num = [];
            this.num = '';
            for(var i = 0;i<4;i++){
                var a = arr[this.makeRandom(0,3)],
                    n = this.makeRandom(a[0],a[1]),
                    obj = {
                        color:"rgb("+this.makeRandom(0,256)+"," +this.makeRandom(0,256)+","+this.makeRandom(0,256) +")",
                        rotate:"rotate(" + this.makeRandom(0,91)+"deg)",
                        size:this.makeRandom(18,31) + 'px',
                    }
                if(n < 10){
                    obj.num = n;
                }else{
                    obj.num = String.fromCharCode(n);
                }
                this.num += obj.num;
                num.push(obj);
            }
            this.identifyCode = num;
        },
        refresh(){
            this.makeColor();
            this.makeCode();
        },
        sure(){
            var val = $('.code_input').val(),
                regex = RegExp('^' + this.num + '$','i'); //动态生成正则表达式
            if(regex.test(val)){
                $('.captcha_dom').css('display','none');
                $('.input_text img').attr('src','/static/images/scuess.gif');
                $('.input_text').siblings('span').text('验证完成');
                setTimeout(function(){
                    $('.pop-dialog').fadeIn(1000,function(){
                        $('.pop-body').fadeIn(4000);
                    });
                    $('.input_text img').attr('src','/static/images/init.gif');
                    $('.input_text').siblings('span').text('点击完成验证');
                },2000)

            }else{
                $('.yan_notice').text('验证码输入有误,请重新输入');
                this.refresh();
            }
        },
        pop_sure(){
            $('#yanzheng').css('display','none');
            $('#regpage').css('display','block');
        },
        sendCode(){ 
            //点击获取验证码
            var isSend = $('.mesg-code').attr('data-mescode');
            if(isSend == 'true'){
                $('.mesg-code').attr('data-mescode',false);
                var code = '';
                for(var i = 0;i<4;i++){
                    code += this.makeRandom(0,10);
                }
                console.log(code)
                store.set('code',code);
                var time = 120;
                $('.mesg-code').text('重新发送'+ time +'s');
                //开启倒计时
                var timer = setInterval(function(){
                    time --;
                    $('.mesg-code').text('重新发送'+ time +'s');
                    if(time == 0){
                        $('.mesg-code').text('获取验证码');
                        $('.mesg-code').attr('data-mescode',true);
                        clearInterval(timer)
                    }
                },1000)
            }
        },
        telCode(){
            //有值变化
            if($('.telCode').val() != ''){
                $('.telCode').parent().siblings('.next-step').css('opacity',1);
            }else{
               $('.telCode').parent().siblings('.next-step').css('opacity',0.3);
            }   
        },
        nextStep(){
            var code = store.get('code'),
                val = $('.telCode').val();
            if(code == val){
                $('#regpage').css('display','none');
                $('#reg_password').css('display','block');
            }else{
                $('.reg_notice').text('验证码输入有误').fadeIn();
                setTimeout(function(){
                    $('.reg_notice').fadeOut();
                },2000)
                $('.telCode').val('').focus();
            }
        },
        checkbtn(){ //点击密码显示和隐藏
            var type = $('.pass').prop('type');
            if(type == 'password'){
                $('.checkbtn').removeClass('checkbtn1').addClass('checkbtn2');
                $('.pass').prop('type','text')
            }else{
                $('.checkbtn').removeClass('checkbtn2').addClass('checkbtn1');
                $('.pass').prop('type','password')
            }
        },
        passdown(){ //注册验证码
            $('.pass').siblings('.icon_clear').css('display','block');
            $('.pass').parent().siblings('.next-step').css('opacity',0.3);
            var length = $('.pass').val().length,
                regex1 = /^[0-9a-zA-Z\u0000-\u00FF]{6,20}$/,
                regex2 = /\s/,
               // regex3 = /(?![0-9]+$)(?![a-zA-Z]+$)(?![\u0000-\u00FF]+$)/,
                regex4 = /^(?![^A-Za-z]+$)(?![^0-9]+$)(?![^\u0000-\u00FF]+$)/,

                // regex = /(?![0-9,a-zA-Z,\u0000-\u00FF]{6,10})^[0-9a-zA-Z\u0000-\u00FF]{6,20}$/
                val = $('.pass').val();
            if(length < 6){
                if(regex2.test(val)){
                    $('.regpass_notice').text('登录密码仅支持字母、数字或半角字符，不可包含空格');
                }else{
                    $('.regpass_notice').text('登录密码长度需在6-20位字符之间');
                }
            }else if(length < 21){
                if(regex2.test(val)){
                    $('.regpass_notice').text('登录密码仅支持字母、数字或半角字符，不可包含空格');
                }else if(regex1.test(val)){
                    if(length <= 10){
                        //10位以下纯数字/字母/半角符号
                        if(regex4.test(val)){
                            $('.regpass_notice').text('');
                            $('.pass').parent().siblings('.next-step').css('opacity',1);
                        }else{
                            $('.regpass_notice').text('登录密码不能是10位以下纯数字/字母/半角符号');
                        }
                    }else{
                        $('.regpass_notice').text('');
                        $('.pass').parent().siblings('.next-step').css('opacity',1);
                    }
                }
            }else{
                $('.regpass_notice').text('登录密码长度需在6-20位字符之间');
            }
        },
        finsh(){ //注册密码
            var opa = $('.pass').parent().siblings('.next-step').css('opacity');
            if(opa == 1){
                $('#reg_password').find('.pop-dialog3').css('display','block');
                store.set('user',{
                    username:'jd1111',
                    phone:this.phone,
                })
                //将注册完的用户放置到数据库中
                $.get(this.apiUl + '/register/user',{
                    username:'jd1111',
                    phone:this.phone,
                    password:$('.pass').val()
                },res=>{},'json')
                setTimeout(()=>{
                    console.log(1)
                    $('#reg_password').find('.pop-dialog3').fadeOut(1500)
                    this.$router.push('/shopcar')
                },2000)
            }
        }
    },
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
    outline:none;
    border:none;
}
input::-webkit-input-placeholder{ 
    color:#ccc;
}
.agreement-dialog{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.4);
    z-index:999;
}
.agreement-body{
    position: absolute;
    bottom:0;
    background:#f8f8f8;
    width:100%;
    border-radius:5px;
    padding:0 10px;
    box-sizing:border-box;
}
.agreement-tittle{
    width:100%;
    font-size:18px;
    padding:12.5px 0;
    border-bottom:1px solid #d7d7d7;
}
.agreement-content{
    width:100%;
    height:290px;
    overflow-y:scroll;
    overflow-x:hidden;
    color:black;
    font-size:13px;
    padding-top:12.5px;
    text-align:left;
}
.agreement-content p{
    font-size:13px;
    line-height:18px;
}
.important-tip{
    font-weight:bold;
    text-decoration:underline;
}
.agreement-content p a{
    color:#000;
}
.link-top{
    margin-top:10px;
}
.link-bottom{
    margin-bottom:10px;
}
.agreement-btn-wrap{
    background:#f8f8f8;
    box-sizing:border-box;
    position: fixed;
    left:0;
    bottom:0;
    padding:10px;
}
.agreement-notice{
    text-align:left;
    font-size:13px;
    padding:10px 5px 0 0;
    box-sizing:border-box;
}
.agreement-notice span{
    font-weight:bold;
    line-height:13px;
}
.agreement-notice a{
    text-decoration:underline;
    color:#e93b3d;
}
.agreement-btns{
    height:55px;
    font-size:16px;
    text-align:center;
}
.agreement-btns a{
    display: inline-block;
    text-align:center;
    width:40%;
    line-height:39px;
    margin:8px 0;
    border-radius:3px;
}
.btn-cancel{
    color:#000;
    background:#fff;
    border:1px solid #d7d7d7;
    margin-left:10px;
}
.btn-complete{
    color:#fff;
    background:#e93b3d;
    border:1px solid #e93b3d;
    margin-right:10px;
}
.register{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
}
 .register_header{
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
.register_icon{
    display:inline-block;
    width:22px;
    height:22px;
    background:url('/static/images/iconBg.png') no-repeat;
    background-size:100% auto;
    position: absolute;
}
.register_back{
    background-position: 0 -64px;
    top:12px;
    left:12px;
}
 .register_page{
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
    color:#333;
}
.reg_icon{
    width:0;
    height:0;
    border-top:5px solid #ababab;
    border-left:4px solid transparent;
    border-right:4px solid transparent;
    display: inline-block;
    margin:10px 7px 0 2px;
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
.register_notice{
    margin:80px auto;
    background:rgba(0,0,0,0.4);
    width:50%;
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
.captcha_header img{
    width:20px;
    height:auto;
    position: absolute;
    right:10px;
    top:10px;
}
.code{ 
    margin: 10px auto;
    width: 114px;
    height: 50px;
    border:1px solid #e8e8e8;
}
.code span{
    display: inline-block;
    line-height:50px;
    padding:0 2px;
    font-weight:bold;
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
.yan_notice{
    color:red;
    font-size:12px;
    text-align:left;
}
.pop-dialog,
.pop-dialog2,
.pop-dialog3{
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background:rgba(0,0,0,0.4);
    z-index:999;
    display:none;
}
.pop-body,
.pop-body2,
.pop-body3{
    width:270px;
    padding:15px 15px 0 15px;
    position: absolute;
    top:25%;
    left:50%;
    margin-left:-135px;
    border-radius:2px;
    box-sizing:border-box;
    background:#fff;
    text-align:center;
}
.pop-top img{
    width:50px;
    height:50px;
    margin:10px 0 12.5px;
}
.pop-msg{
    font-size:16px;
    line-height:24px;
    margin-bottom:21px;
    color:#333;
}
.pop-btns{
    width:270px;
    margin-left:-15px;
}
.pop-btns a{
    float:left;
    width:50%;
    height:44px;
    line-height:44px;
    border-radius:2px;
    font-size:14px;
    border-top:1px solid #e5e5e5;
    box-sizing:border-box;
}
.pop-btns a:nth-child(1){
    color:#333;
    border-right:1px solid #e5e5e5;
}
.pop-btns a:nth-child(2){
    color:#e93b3d;
}
#regpage{
    padding:5px 20px 20px;
    margin:45px auto 0;
    box-sizing:border-box;
    display:none;
}
.tips-wrap{
    margin-top:20px;
    text-align:left;
    font-size:14px;
}
.input-box2{
    position: relative;
}
.input-container2{
    position: relative;
    width:100%;
    height:45px;
    line-height:45px;
    padding:5px;
    margin-top:15px;
    background:#fff;
    box-sizing:border-box;
    overflow: hidden;
}
.telCode{
    padding:0 32px 0 0;
    box-sizing:border-box;
    position: absolute;
    top:12.5px;
    left:5px;
    right:0;
}
.telCode+.icon_clear{
    right:115px;
    top:10px;
}
.mesg-code{
    width:110px;
    height:23px;
    line-height:23px;
    border-left:1px solid #d7d7d7;
    position: absolute;
    right:0;
    top:12.5px;
    background:#fff;  
}
.next-step{
    display: block;
    background:#e93b3d;
    color:#fff;
    line-height:46px;
    opacity:0.3;
    border-radius:4px;
    margin-top:15px;
}
.question-box{
    margin-top:10px;
    color:#848689;
    text-align:left;
    font-size:14px;
}
.question-box a{
    color:#616161;
    text-decoration:underline;
}
.reg_notice{
    margin:80px auto;
    background:rgba(0,0,0,0.4);
    width:50%;
    line-height:40px;
    height:40px;
    border-radius:5px;
    display:none;
}
#reg_password{
    display:none;
    padding:15px;
    margin:45px auto 0;
    box-sizing:border-box;
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
.regpass_notice{
    font-size:12px;
    line-height:30px;
    color:#e93b3d;
    min-height:15px;
    text-align:left;
}
.notice-def{
    color:#333;
}
.next-step2{
    margin-top:0;
}
#reg_password .icon_clear{
    right:40px;
}
#reg_password .pass{
    padding:0;
}
</style>
