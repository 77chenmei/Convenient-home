<template>
    <div class = "details">
        <div class = "store">
            <img :src="'/static/images/' + mess.img">
            <div class = "store_words">
                <h2>{{mess.tittle}}</h2>
                <p class = "post">
                    <span>{{mess.postType}}</span>
                    <span class = "lin_sp"></span>
                    <span>{{mess.postMin}}</span>
                </p>
                <p class="post">{{mess.word2}}</p>
            </div>
            <i class = "love"></i>
            <span class = "fix_drop" @click = "drop1">店铺信息</span>
        </div>
        <div class = "detail_drop">
            <ul class ="drop_ul">
                <li v-for = "(mult,index) in mess.mult" :key = "'mult' + index">
                    <span class = "tit">满减</span>
                    <span>{{mult}}</span>
                </li>
            </ul>
            <div class = "drop_sport" @click = "drop1" v-if ="length != 0">
                {{length}}个活动 
                <i class = "icon2"></i>
            </div>
            <div v-if = "length > 5" class = "drop_much" @click = "drop2">
                <span>查看更多</span>
                <i class = "icon2"></i>
            </div>
        </div>
        <div class = "notice ad">
            <i>公告</i>
            <p>
                尊敬的顾客，感谢您选择永辉超市。在您购物后有任何问题请及时联系我们客服，客服电话‭(025) 5227 0517‬，也可以加微信18912953651直接反馈问题。
            </p>
        </div>
        <div class = "introduce ad">
            <div class = "detail_cards" v-if = "mess.newCard">
                <div class = "cards_tittle">
                    <h5>店铺优惠券</h5>
                </div>
                <ul class ="cards">
                    <li v-for="(card,index) in mess.newCard " :key = "index">
                        <div class = "card_box">
                            <div class = "card_left">
                                {{card.a}} 
                                <span v-if = "card.a.indexOf('.') >-1">折</span>
                                <span v-else>元</span>
                            </div> 
                            <div class="card_right">
                                <span>领券</span>
                            </div>
                            <div class = "dd"></div>
                            <div class = "card_mid">
                                <div>
                                    <h5>{{card.b}}</h5> 
                                    <p>领取后当日有效</p>
                                </div>
                                
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class = "shop_eval">
                <div class = "cards_tittle">
                    <h5>店铺评价</h5>
                </div>
                <ul class = "shop_ev">
                    <li class ="shop1">
                        <div class = "shop_a">
                            <h4>4.9</h4>
                            <p>综合评分</p>
                        </div>
                        <div>
                            <h4>6542</h4>
                            <p>评论数</p>
                        </div>
                    </li>
                    <li class ="shop2">
                        <img src="/static/images/evaluateHeader.jpg">
                        <p class = "span_p">
                            <span class="spanLeft">M***生</span>
                            <span class="spanRight">2018-03-08 16:34:54</span>
                        </p>
                        <p class = "stars">
                            <i v-for ="i in 5" :key = "i"></i>
                        </p>
                    </li>
                    <li class ="shop3">
                        <router-link to= "">查看用户的全部评价 ></router-link>
                    </li>
                </ul>
            </div>
            <div class= "shop_mess">
                <div class = "cards_tittle">
                    <h5>店铺信息</h5>
                </div>
            </div>
            <div class ="intro_footer" @click = "drop3">
                <i></i>
                <p>点击继续购物</p>
            </div>
        </div>      
    </div>
</template>

<script>
import $ from 'jquery'
import store from 'storejs'

export default {
    props:['shopId'],
    data(){
        return{
            mess:{},
            length:0,
        }
    },
    created(){
        $.get(this.apiUl + '/index/shop',{id:this.shopId},(res)=>{
            this.mess = res;
        },'json')
    }, 
    updated(){
        $('.drop_ul li').slice(1).css('display','none');
        this.length = $('.drop_ul li').length;  
    },
    methods:{
        drop1(){
            $('.drop_ul li').slice(0,5).css('display','block');
            $('.drop_sport').css('display','none');
            $('.ad').css('display','block');
            if(this.mess.mult.length > 5){
                $('.drop_much').css('display','block');
            }
            $('.details').addClass('details2');
            $('.main').css('display','none');
        },
        drop2(){
            var text = $('.drop_much span').text();
            if(text == '查看更多'){
                $('.drop_ul li').css('display','block');
                $('.drop_much span').text('点击收起');
                $('.drop_much .icon2').css('backgroundPosition','-174px -148px');
            }else{
                $('.drop_ul li').slice(5).css('display','none');
                $('.drop_much span').text('查看更多');
                $('.drop_much .icon2').css('backgroundPosition','-150px -148px');
            } 
        },
        drop3(){
            $('.drop_ul li').slice(1).css('display','none');
            $('.drop_sport').css('display','block');
            $('.drop_much').css('display','none');
            $('.ad').css('display','none');
            var text = $('.drop_much span').text();
            if(text == '点击收起'){
                $('.drop_ul li').slice(5).css('display','none');
                $('.drop_much span').text('查看更多');
                $('.drop_much .icon2').css('backgroundPosition','-150px -148px');
            }
            $('.details').removeClass('details2');
            $('.main').css('display','block');
        },
    },
}

</script>

<style scoped>
*{
        padding:0;
        margin:0;
        list-style:none;
        font-style:normal;
        font-weight:normal;
        outline:none;
        border:none;
        text-align:left;
    }
     html,body{
        height:100%;
    }
    .jump{
        position: fixed;
        right:0;
        bottom:60px;
        width:36px;
        height:36px;
        border:1px solid #757575;
        border-radius:5px 0 0 5px;
        background:rgba(0,0,0,0.7) url('/static/images/bm.png') no-repeat 7px 7px;
        background-size:65px 20px;
    }
    .details{
        width:100%;
        background:url('/static/images/store_industry_1.jpg') no-repeat 0 0;
        background-size:100% 100%;
        padding:5px 10px;
        box-sizing:border-box;
        position: fixed;
        top:0;
        left:0;
        z-index:99;
    }
    .details2{
        position: relative;
        min-height:550px;
    }
    .store{
        width:100%;
        position: relative;
        color:#fff;
        min-height:62px;
    }
    .store img{
        position: absolute;
        top:6px;
        left:2px;
        width:52px;
        height:53px;
        border-radius:4px;
        border:1px solid rgba(255,255,255,0.8);
        background:#fff;
    }
    .store_words{
        padding-left:66px;
        line-height:20px;
        padding-right:58px;
        min-height:64px;
        overflow: hidden;
        text-overflow:ellipsis;
        text-align:left;
    }
    .store_words h2{
        line-height:25px;
        font-size:18px;
        padding-top:1px;
        margin-top:5px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-weight:normal;
    }
    .store_words .post{
        line-height:14px;
        font-size:10px;
    }
    .store_words .lin_sp{
        display: inline-block;
        width:8px;
        height:10px;
        background:url('/static/images/icon_line_split.jpg') no-repeat center 2px;
    }
    .love{
        position: absolute;
        top:5px;
        right:5px;
        width:22px;
        height:18px;
        background:url('/static/images/focus.png') no-repeat 0 -2px;
        background-size:60px auto;
    }
    .fix_drop{
        display:inline-block;
        position: absolute;
        top:42px;
        right:0;
        width:54px;
        height:15px;
        background:rgba(70,70,70,0.5);
        border-radius:4px;
        font-size:10px;
        line-height:16px;
        padding-left:5px;
        text-align:left;
    }
    .fix_drop::after{
        display: inline-block;
        content:'';
        width:12px;
        height:15px;
        background:url('/static/images/store_sprites_4.6.png') no-repeat;
        background-size:220px auto;
        background-position:-150px -146px;
        position: absolute;
        top:0;
        right:0;
    }
    .detail_drop{
        padding-top:14px;
        text-align:left;
        position: relative;
    }
    .drop_ul{
        width:76%;
        font-size:10px;
        display: inline-block;
        color:#fff;
    }
    .drop_ul li{
        margin-bottom:8px;
    }
    .drop_ul li .tit{
        background:#5FBC65;
        padding:0 2px;
        border-radius:2px;
    }
    .drop_sport{
        position: absolute;
        top:20px;
        right:0;
        width:24%;
        font-size:10px;
        color:#fff;
        text-align:right;
    }
    .icon2{
        display: inline-block;
        width:16px;
        height:10px;
        background:url('/static/images/store_sprites_4.6.png') no-repeat;
        background-size:220px auto;
        background-position:-150px -148px;
    }
    .drop_much{
        position: absolute;
        right:0;
        bottom:4px;
        background:rgba(0,0,0,0.5);
        color:#fff;
        font-size:11px;
        border-radius:2px;
        padding-left:6px;
        display:none;
    }
    .notice{
        line-height:16px;
        margin-bottom:5px;
        display:none;
    }
    .notice i{
        background:#fff;
        color:#333;
        font-size:10px;
        float:left;
        line-height:14px;
        height:14px;
        padding:0 2px;
        border-radius:2px;
        margin-top:2px;
    }
    .notice p{
        padding:0 26px 0 30px;
        color:#fff;
        font-size:10px;
        text-align:left;
    }
    .introduce{
        padding:5px 0 35px;
        display: none;
    }
    .cards_tittle{
        margin-bottom:20px;
        position: relative;
    }
    .cards_tittle h5{
        width:32%;
        margin:0 auto;
        font-size:15px;
        line-height:18px;
        color:#fff;
        text-align:center;
    }
    .cards_tittle h5::before{
        content:'';
        position: absolute;
        top:9px;
        left:0;
        right:63%;
        border-top:1px solid rgba(255,255,255,0.4);
    }
    .cards_tittle h5::after{
        content:'';
        position: absolute;
        top:9px;
        left:63%;
        right:0;
        border-top:1px solid rgba(255,255,255,0.4);
    }
    .cards li{
        height:70px;
        margin:9px;
        border-left:3px solid #ff5757;
        border-radius:5px;
    }
    .card_box{
        height:100%;
        border-radius:5px;
        box-sizing:border-box;
    }
    .card_left{
        width:60px;
        height:70px;
        line-height:70px;
        font-size:20px;
        font-size:20px;
        color:#ff4f64;
        border-right:1px solid rgb(250,245,244);
        border-top:1px solid #ff9d9d;
        border-bottom:1px solid #ff9d9d;
        border-radius:5px 0 0 5px;
        float:left;
        background:#fff;
        box-sizing:border-box;
    }
    .card_left span{
        font-size:15px;
        margin-left:-4px;
    }
    .dd{
        width:8px;
        height:70px;
        background:url('/static/images/store_act_new_conpon.png') no-repeat center center;
        background-size:auto 70px;
        display: inline-block;
        border-right:1px solid #E0D8D6;
        border-left:1px solid #E0D8D6;
        box-sizing:border-box;
        float:right;
    }
    .card_right{
        height:70px;
        float:right;
        width:61px;
        border:1px solid #ff9d9d;
        border-left:none;
        border-radius:0 5px 5px 0;
        background:#fff;
        box-sizing:border-box;
    }
    .card_right span{
        display: inline-block;
        width:50px;
        height:20px;
        margin:25px auto;
        background:#ff5757;
        color:#fff;
        font-size:13px;
        border-radius:10px;
        text-align:center;
    }
    .card_mid{
        margin-left:60px;
        margin-right:68px;
        background:#fff;
        height:70px;
        border-top:1px solid #ff9d9d;
        border-bottom:1px solid #ff9d9d;
        box-sizing:border-box;
    }
    .card_mid div{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align:left;
        margin-left:6px;
    }
    .card_mid div h5{
        font-size:14px;
        color:#333;
        margin-bottom:4px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .card_mid div p{
        font-size:11px;
        color:#666;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .shop_eval,
    .shop_mess{
        padding-top:25px;
    }
    .shop_ev{
        background:rgba(255,255,255,0.1);
        color:#fff;
        padding:10px 10px 0;
    }
    .shop1{
        white-space: nowrap;
        position: relative;
    }
    .shop1 div{
        display: inline-block;
        width:50%;
        padding:15px 0;
        position: relative;
    }
    .shop1 div h4{
        height:36px;
        line-height:36px;
        font-size:27px;
        font-weight:bold;
    }
    .shop1 div p{
        height:18px;
        line-height:18px;
        font-size:12px;
    }
    .shop_a::after{
        content:'';
        width:1px;
        height:100%;
        border-left:1px solid #e8e8e8;
        position: absolute;
        top:0;
        right:0;
        transform:scaleY(0.5);
    }
    .shop1::after,
    .shop2::after{
        content:'';
        display: inline-block;
        width:100%;
        height:1px;
        border-bottom:1px dashed #fff;
        position: absolute;
        bottom:0;
        left:0;
    }
    .shop2{
        padding:10px 0 20px;
        position: relative;
    }
    .shop2 img{
        width:35px;
        height:35px;
        border-radius:50%;
        float: left;
    }
    .shop2 p{
        margin-left:40px;
    }
    .span_p{
        line-height:16px;
        font-size:12px;
        overflow: hidden;
    }
    .spanLeft{
        float:left;
    }
    .spanRight{
        float:right;
    }
    .stars{
        text-align:left;
    }
    .stars i{
        display: inline-block;
        width:10px;
        height:10px;
        background:url('/static/images/newStar.png') no-repeat 0 0;
        background-size:auto 10px;
    }
    .shop3 a{
        display:block;
        height:46px;
        line-height:46px;
        font-size:14px;
        color:#fff;
        text-decoration:none;
    }
    .intro_footer{
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        height:36px;
        background:#f2f8f3;
        color:#666;
        padding-top:10px;
        box-shadow:0 0 9px rgba(0,0,0,0.6);
        text-align:center;
    }
    .intro_footer i{
        width:15px;
        height:8px;
        display: inline-block;
        background:url('/static/images/store_sprites_4.6.png') no-repeat -14px -18px;
        background-size:220px auto;
    }
    .intro_footer p{
        font-size:10px;
        text-align:center;
    }
</style>
