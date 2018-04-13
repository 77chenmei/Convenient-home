<template>
    <div id = "store">
        <div>
            <div class ="jump"></div>   
            <StoreDetails :shopId = "shopId"></StoreDetails>
            <div class = "main">
                <div class = "top"> 
                    <div class = "search">
                        <i class = "iconToSearch"></i>
                        <router-link to = "search">
                            <input type="search" placeholder="搜索店内商品"> 
                        </router-link>
                    </div>
                </div>
                <div class = "center">
                    <div class ="center_left">
                        <!-- <el-collapse  accordion class ="center_ul" v-model="activeName">
                            <el-collapse-item v-for = "(tit,index) in tittle" :key = "tit.id" :name ="index" class ="li" :class ="tit.label? 'center_li':''">
                            <template slot="title">
                                <span>{{tit.tittle}}</span>
                                <i v-if = "tit.label" class="center_i"></i>
                            </template>
                            <div v-for = "tt in tit.items" :key = "tt.id" @click = "loadShop(tit.id,tt.id)">
                                <p>{{tt.tittle}}</p>
                            </div>
                        </el-collapse-item>
                        </el-collapse> -->

                        <ul class ="center_ul">
                            <li v-for = "(tit,index) in tittle" :key = "tit.id" :name ="index" :class ="tit.label? 'center_li':''">
                                <p class ="center_ul_p" @click ="showTittle(index)" data-show = false>
                                    <span>{{tit.tittle}}</span>
                                    <i v-if = "tit.label" class="center_i"></i>
                                </p>
                                <ul class ="center_son_ul">
                                    <li v-for = "(tt,ind) in tit.items" :key = "tt.id" @click = "loadShop(tit.id,tt.id,ind,index)">
                                        <p>{{tt.tittle}}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class = "center_right">
                        <div class ="center_right_box">
                            <div v-if = "firstNum == 2">
                                <ul class ="center_cards">
                                    <li class = "center_li">
                                        <div class = "card_box" v-if ="cardsNum > 0">
                                            <div class = "center_right_card1">
                                                <h5>{{cardsNum}}张优惠卷</h5>
                                                <p>{{cardsStr}}</p>
                                            </div>
                                            <div class = "card_right_card2">
                                                <i></i>
                                                <div class="card_right card_right2">
                                                    <span>领券</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="/static/images/store/store1.jpg">
                                    </li>
                                    <li>
                                        <img src="/static/images/store/store2.jpg">
                                    </li>
                                </ul>
                            </div>
                            <div class ="store_shops">
                                <h5 class ="store_num">{{firstText}}( {{firstLength}} )</h5>
                                <ul class ="store_shops_ul">
                                    <li v-for = "active in activeFirst" :key="active.id">
                                        <router-link to = "">
                                            <img :src="'/static/images/store/'+ active.img">
                                            <dl class ="store_shops_dl">
                                                <dt >{{active.name}}</dt>
                                                <dd>
                                                    <span>月售{{active.sale}}件</span>
                                                    <span class = "store_line"></span>
                                                    <span>好评{{active.introduce}}</span>
                                                </dd>
                                                <dd>
                                                    <span v-for = "(inte,num) in active.newInt" :key = "num" class ="store_inte" :class = ' inte == "秒杀"? "ms" : inte == "满减" ? "mult": inte == "打包" ? "db" :inte == "直降" ? "zj":""'>
                                                        {{inte}}
                                                    </span>
                                                </dd>
                                                <dd class ="dd_last">
                                                    <p class ="store_sprice">
                                                        <i>￥</i>
                                                        <span>{{active.sprice}}</span>
                                                    </p>
                                                    <span class ="store_price" v-if = "active.price != null">
                                                        ￥{{active.price}}
                                                    </span>
                                                </dd>
                                            </dl>
                                        </router-link>
                                        <div class ="store_add_box">
                                            <span class = "mult_box little_box" @click ="delCar(active)" v-if = "active.num"></span>
                                            <span class ="num_box" v-if = "active.num">{{active.num}}</span>
                                            <span class = "add_box little_box" @click ="addCar(active)"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class = "footer">
                    <div class="bgCover"></div>
                    <div class ="footer_store_words">
                        <router-link to="" class ="stores_card" :class=" shopLength == 0? '' :'stores_card_active'">去结算</router-link>
                        <div class ="store_total" :class="shopLength == 0? '' :'shop_money'">{{ shopLength == 0? '购物车是空的': '￥' + total}}</div> 
                    </div>  
                    <div class ="store_rise">
                        <!-- 购物车图片 -->
                        <div class = 'store_img store_img2' @click ="riseCar" v-if = "shopLength > 0">
                            <sup class ="sup">{{shopLength}}</sup>
                        </div>
                        <div class ='store_img store_img1' @click ="riseCar" v-else></div>

                        <div class = "store_car" style="z-index:50;">
                            <div class ="store_car_tittle">
                                <p class = "selAll sel_Active" @click= "selection('all')">全选</p>
                                <span class ="selAll_sum" v-if = "selectNum > 0">(已选{{selectNum}}件,共{{selectWeight}}kg)</span>
                                <span class ="clearCar" @click = "clearCar">清空购物车</span>
                            </div>
                            <div class ="store_car_mess">
                                <ul>
                                    <li v-for="(goods,index) in shopCar" :key= "goods.id">
                                        <span class ="selOne selOne_active"  @click= "selection('one',index,goods)"></span>
                                        <router-link to="">
                                            <table>
                                                <tr>
                                                    <td>
                                                        <img :src="'/static/images/store/' + goods.img">
                                                    </td>
                                                    <td>
                                                        <h5>{{goods.name}}</h5>
                                                        <div v-if = "goods.num > 2 && goods.newInt.indexOf('秒杀') >-1" style = "font-size:10px;">
                                                            <p class ="store_max_sprice">
                                                                <i>秒杀</i>
                                                                <span> ￥{{goods.sprice}} <em>X 2</em></span>
                                                            </p>
                                                            <p class ="store_max_price">
                                                                <i>原价</i>
                                                                <span>{{goods.price}} <em>X {{goods.num- 2}}</em></span>
                                                            </p>
                                                            <p class ="store_max" >
                                                                <span v-if = "goods.num > 2 && goods.newInt.indexOf('秒杀') >-1" >秒杀价格限购两件</span>
                                                                <span v-if = "goods.num >= goods.stock">仅剩{{goods.num}}件</span>
                                                            </p>
                                                        </div>
                                                        <div v-else>
                                                            <span v-for = "(inte,num) in goods.newInt" :key = "num" class ="store_inte" :class = ' inte == "秒杀"? "ms" : inte == "满减" ? "mult": inte == "打包" ? "db" :inte == "直降" ? "zj":""'>
                                                                {{inte}}
                                                            </span>
                                                            <div class ="dd_last"> 
                                                                <p class ="store_sprice">
                                                                    <i>￥</i>
                                                                    <span>{{goods.sprice}}</span>
                                                                </p>
                                                                <span class ="store_price" v-if = "goods.price != null">
                                                                    <i>￥</i>
                                                                    <del>{{goods.price}}</del>
                                                                </span>  
                                                            </div>
                                                        </div>
                                                    
                                                    </td>
                                                </tr>
                                            </table>
                                        </router-link>
                                        <div class ="store_add_box">
                                            <span class = "mult_box little_box" @click ="delCar(goods,index)"></span>
                                            <span class ="num_box">{{goods.num}}</span>
                                            <span class = "add_box little_box" @click ="addCar(goods)"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import store from 'storejs'
import StoreDetails from '@/components/common/store.details.vue'

export default {
    name:'store',
    data(){
        return{
            shopName:'',//存放店铺名称
            shopId:this.$route.query.id, //店铺id
            cardsNum:0,
            cardsStr:'',
            tittle:[],
            activeName:'0',
            firstNum:0,
            firstText:'',   
            firstLength:0,
            activeFirst:[],
            //购物车数据的存放
            shopCar:[], //存储当前商店的购物车信息
            //shopLength:0, //购物车中商品的个数 底部显示购物车中的商品数
            isFooter:true, //判断此时是foot1出现(true) foot2出现(false)
            total:0, //购物车总价
            selectNum:0, //购物车中商品选中个数
            selectWeight:0, //购物车中选中商品的总重量
            isSelAll:true, //设置全选开关，当这个为true时表示全部选中，否则取消了全选
            selArr:[], //购物车中选中的信息存放
        }
    },
    props:[],
    created(){
        //判断缓存中是否存在该商品的购物车信息
        if(!store.get('shopCar')){
            store.set('shopCar',{})
        }
        var shopCar = store.get('shopCar')[this.shopId];
        if(shopCar){
            this.shopCar = shopCar.items;
            this.shopName = shopCar.shopName;
        }
        this.selArr = this.shopCar; //将购物车和购物车选中的关联

        $.get(this.apiUl + '/index/shop',{id:this.shopId},(res)=>{
            this.cardsNum = res.newCard ? res.newCard.length : 0;
            this.cardsStr =  this.cardsNum > 0 ? res.cards.join(',') : '';
            this.shopName = res.tittle;
        })

        $.get(this.apiUl +'/shop/tittle',{id:this.shopId},(res)=>{
            this.tittle = res.data;
            //默认页面刷新的时候 打开的是一个tittle中第一个子标签的下面的内容
            //先获取该子标签的id
            this.firstNum = this.tittle[0].items[0].id;
            this.firstText = this.tittle[0].items[0].tittle;
            //根据这个子标签的id 和 商铺id 获取 商品信息
            $.get(this.apiUl + '/store/getStore',{
                pid:this.firstNum,
                storeId:1 //店铺的id地址(缓存中获取或者路由传参)
            },(res)=>{
                this.firstLength = res.length;
                this.activeFirst = res;
            })
        },'json')  

        //页面created默认的标签样式   
        setTimeout(() => {
            this.$nextTick(function(){
                $('.center_ul > li').eq(0).find('.center_ul_p').addClass('center_ul_tittle')
                                    .siblings('.center_son_ul').css('height','100%')
                                                           .find('li').eq(0).addClass('center_son_li');
            })
        },100)
    }, 
    watch:{
        shopCar(newVal,oldVal){
            if(store.get('?shopCar')){
                var shopCar = store.get('shopCar');
            }else{
                var shopCar = {};
            }
            var newArr = {};
            newArr.shopName = this.shopName;
            newArr.items = newVal;
    
            shopCar[this.shopId] = newArr;
            store.set('shopCar',shopCar);
        },
        selArr(newVal,oldVal){
            this.sum(newVal)
        }
    },
    computed:{
        shopLength:{
            get(){
                var length = 0;
                this.shopCar.forEach(el=>{
                    length += el.num;
                })
                if(length < 1){
                    this.hideCar();
                }
                return length;
            },
            set(newVal){
                return newVal;
            }
        }
    },
    updated(){
        //飞入购物车
        $('.add_box').on('click',function(){
            var flyBox = $(this).clone().css('opacity','0');
            $(this).parent().append(flyBox)
            flyBox.css({
                'z-index': 99,
                'background':'red',
                'border-radius': '50%',
                'position': 'absolute',
                'height': $(this).height() + 'px',
                'width': $(this).width() + 'px',
                'top':'0px',
                'right':'opx',
            });
            flyBox.animate({
                'top':'-40px',
                'left':'0px',
                'opacity':'1',
            },200, function () {
                flyBox.animate({
                    'top': $(document).height()-$(this).parent().offset().top + 'px',
                    'left': '-' + ($(document).width() - $('.store_add_box').width()) + 'px',
                }, 500, function () {
                    flyBox.remove();   
                })
            })
        })
    },
    methods:{
        loadShop(titId,id,index,eq){
            this.firstNum = id;
            $.get(this.apiUl + '/store/getStore',{
                pid:id,
                storeId:1
            },(res)=>{
                this.firstLength = res.length;
                this.activeFirst = res;
            })
            //点击该标签,则默认该标签下的子标签的第一菜单
            $('.center_son_li').removeClass('center_son_li');
            $('.center_son_ul').eq(eq).find('li').eq(index).addClass('center_son_li');
        },
        addCar(active,index){
           //store.get('storeId') 商店的id
           // active     add点击添加的商品信息
            //判断购物车中该商品已经添加过
            if(this.shopLength == 0){ //购物车为空
                active.num = 1; //该商品再购物车中的数量
                active.isSelOne = false; //给每个商品的选中添加一个开关
                this.shopCar.push(active); //将该商品推入购物车中
            }else{ //购物车不为空
                var isNO = false;
                
                // 方法一 =================
                this.shopCar.forEach((el,index) => { 
                        if(el.id == active.id){ //判断要添加的商品是否存在购物车中
                            if(el.num >= el.stock){
                                el.num = el.stock;
                            }else{
                                el.num ++; //该商品的数量增加1
                            }
                            isNO = true;
                            this.shopCar.splice(index,1,el)
                            return
                        }  
                    });

                // 方法二  =================
                // for(var i = 0;i<this.shopCar.length;i++){
                //     if(this.shopCar[i].id == active.id){
                //         if(this.shopCar[i].num >= this.shopCar[i].stock){
                //             this.shopCar[i].num = el.stock;
                //         }else{
                //             this.shopCar[i].num ++; //该商品的数量增加1
                //         }
                //         this.shopCar.splice(i,1,this.shopCar[i])
                //         return
                //     } 
                // }
                //
                if(!isNO){
                    active.num = 1;
                    active.isSelOne = false; //给每个商品的选中添加一个开关
                    this.shopCar.push(active);
                }
            }
            if(this.isSelAll){
                this.sum(this.shopCar);
            }else{
                this.sum(this.selArr);
            }
        },
        delCar(active,index){
            this.shopCar.forEach((el,eq) => {
                if(el.id == active.id){ //判断要添加的商品是否存在购物车中
                    el.num --; //该商品的数量减1
                    // this.shopLength--;
                    //判断此时的该商品加入购物车的数量
                    if(el.num < 1){  //小于1
                        this.shopCar.splice(eq,1) //将购物车中该商品的信息删除
                        if(!this.isFooter){
                            var height = $('.store_rise').height() - 48;
                            $('.store_rise').css('transform','translateY(-'+ height+'px');
                        }
                    }else{ //大于1 
                        this.shopCar.splice(eq,1,el) //将数据库中的该条商品信息替换
                    }
                    return 
                }
            });
            if(this.isSelAll){
                this.sum(this.shopCar);
            }else{
                this.sum(this.selArr);
            }
            
        },
        sum(array){//计算总价
            var sum = 0,
                weight = 0,
                length = 0;
            array.forEach(el=>{
                var num = Number(el.num),
                    sprice = Number(el.sprice),
                    price = Number(el.price);
                if(el.newInt.indexOf('秒杀') >-1 && el.num > 2){
                    sum += 2 * sprice + (el.num - 2) * price;
                }else{
                    sum += num * sprice;
                }
                length += num;
                //判断商品重量的单位是kg 或是 g;
                var index = el.weight.indexOf('kg');
                if(index > -1){
                    //截取字符串 
                    weight += Number(el.weight.substr(0,index)) * num; //截取字符串，获取重量
                }else{
                    //单位是g的时候，转化单位
                    var index = el.weight.indexOf('g'); 
                    weight += Number(el.weight.substr(0,index)/1000) * num;
                }
            })
            this.total = sum.toFixed(2); //保留两位小数
            this.selectNum = length;
            this.selectWeight = weight.toFixed(2);
        },
        selection(type,index,goods){ //购物车中的商品选择
            //点击全选按钮 ：全选 or 取消全选
            if(type == 'all'){
                var selAll = $('.selAll');
                //判读此时是否处于全选的状态
                if(this.isSelAll){ 
                    //取消全选
                   $('.store_car_mess').find('.selOne').removeClass('selOne_active');
                   this.selectNum = 0; //选中的数目为0 
                   this.total = 0; //选中商品的总价为0
                   this.selArr = [];
                }else{
                    //全部选中
                    $('.store_car_mess').find('.selOne').addClass('selOne_active');
                    this.sum(this.shopCar) //重新计算选中的价格 选中数目 
                }
                this.isSelAll = !this.isSelAll;
                $(selAll).toggleClass('sel_Active');
            }
            //点击单独一个商品选项按钮
            if(type == 'one'){
                $('.store_car_mess').find('.selOne').eq(index).toggleClass('selOne_active');
                //判断界面处于全选状态
                if(this.isSelAll){
                    this.selArr = this.selArr.filter((el,ind) =>{
                        return ind != index;
                    })
                    this.isSelAll = false; //此时不是全选状态下
                    $('.selAll').removeClass('sel_Active');
                }else{
                    //判断该物品是否已经存在与this.selArr中，存在就取消，不存在就添加
                    var isCur = true;
                    this.selArr.forEach((el,ind) => {
                        if(el.id == goods.id){ //判断要添加的商品是否存在购物车中
                            this.selArr.splice(ind,1)
                            isCur = false;
                        }
                    });
                    if(isCur){
                        this.selArr.push(goods);
                        if(this.selArr.length == this.shopLength){
                            $('.selAll').addClass('sel_Active');
                            this.isSelAll = true;
                        }
                    }
                }
                this.sum(this.selArr);
            }
        },
        clearCar(){ //清空购物车
            //实验
            this.shopCar.forEach(el =>{
                el.num = 0;
            })
            this.shopCar = [];
            this.selArr = [];
            this.total = 0;
            this.isSelAll = true;
            $('.selAll').addClass('sel_Active');
            this.hideCar();
        },
        hideCar(){
            $('.store_rise').css('transform','translateY(0px)');
            $('.store_total').css('transform','translateX(0px)');
            $('.bgCover').css('display','none'); //背景层隐藏
            $('.details').css('z-index',90); //头部的层级调高 
        },
        riseCar(){
            var height = $('.store_rise').height();
            if(this.isFooter){
                $('.bgCover').css('display','block'); //背景层显示
                $('.details').css('z-index',0); //头部的层级降低
                $('.store_rise').css('transform','translateY(-'+ ( height + 48) +'px)');
                $('.store_total').css('transform','translateX(-45px)');
                this.isFooter = false;
            }else{
                $('.bgCover').css('display','none'); //背景层隐藏
                $('.details').css('z-index',90); //头部的层级调高
                $('.store_rise').css('transform','translateY(0px)');
                $('.store_total').css('transform','translateX(0px)');
                this.isFooter = true;
            }
        },
        showTittle(index){
            var th = $('.center_ul>li').eq(index).find('.center_ul_p');
            var isdrop = $(th).attr('data-show');
            if(isdrop == 'false'){
                //菜单栏中的子标签出现
                $('.center_ul_tittle').siblings('.center_son_ul').css('height','0');
                $(th).siblings('.center_son_ul').css('height','100%');

                //菜单栏标签左侧栏出现绿边框
                $('.center_ul_tittle').removeClass('center_ul_tittle');
                $(th).addClass('center_ul_tittle');

                //父级标签发生滚动
                //计算滚动的高度
                var height = $(th).parent().index() * $(th).parent().height();
                $('.center_ul').scrollTop(height);

                //点击该标签,则默认该标签下的子标签的第一菜单
                $(th).siblings('.center_son_ul').find('li').eq(0).trigger('click')
                                                                 .addClass('center_son_li')
                $(th).attr({'data-show':true})
            }else{
                //菜单恢复原样
                $(th).siblings('.center_son_ul').css('height','0');
                $(th).attr({'data-show':false})
                //点击该标签,则默认该标签下的子标签的第一菜单
                $(th).siblings('.center_son_ul').find('li').eq(0).trigger('click');
            }
        }
    },
    components:{StoreDetails},
}

</script>

<style>
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
    .bgCover{
        position:fixed;
        top:0;
        bottom:48px;
        left:0;
        right:0;
        background:rgba(0,0,0,0.4);
        display:none;
    }
    .main{
        width:100%;
        position: fixed;
        top:108px;
        left:0;
        bottom:0;
    }
    .top{
        width:100%;
        height:44px;
        line-height:44px;
        text-align:center;
        background:#fff;
        position: relative;
        background:#eaeaea;
    }
    .top .search{
        position: absolute;
        top:8px;
        left:8px;
        right:8px; 
        height:28px;
        line-height:28px;
        border:1px solid #e6e6e6;
        border-radius:2px;
        padding:0 5px 0 20px;
        background:#fff;
    }
    .top .iconToSearch{
        position: absolute;
        left:0;
        top:0;
        width:28px;
        height:28px;
        background:url('/static/images/search_bar_sprites.png') no-repeat -8px -8px;
        background-size:44px auto; 
    }
    .top .search a{
        padding-left:5px;
    }
    .footer{
        background:#fff;
        border-top:1px solid #bbb;
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        height:48px;
    }
    .footer_store_words{
        position: absolute;
        bottom:0;
        left:0;
        right:0;
        height:48px;
        background:#fff;
    }
    .stores_card{
        position: absolute;
        right:0;
        bottom:0;
        width:115px;
        height:48px;
        background:#bebebe;
        color:#fff;
        line-height:48px;
        z-index:40px;
        text-align:center;
        text-decoration:none;
    }
    .stores_card_active{
        background: #5FBC65;
    }
    .store_total{
        position: absolute;
        left:70px;
        bottom:0;
        height:48px;
        line-height:48px;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
        background-color:#fff;
        transition:0.5s;
    }
    .shop_money{
        color:#ff3434;
    }
    .store_total2{
        color:#ff3434;
        font-size:18px;
        text-align:left;
        left:20px;
    }
    .store_rise{
        position: absolute;
        top:48px;
        left:0;
        width:100%;
        transition:0.5s;
    }
    .store_img{
        width:80px;
        position: absolute;
        left:0;
        
        top:-50px;
        z-index:90;
        transition:0.5s;
    }
    .store_img1{
        height:48px;
        background:url('/static/images/cart.png') no-repeat 10px 5px;
        background-size:auto 120px;
    }
    .store_img2{
        top:-60px;
        height:58px;
        background:url('/static/images/cart.png') no-repeat 10px -85px;
        background-size:auto 140px;
    }
    .store_img2 .sup{
        width:15px;
        height:15px;
        border-radius:50%;
        background:red;
        color:#fff;
        line-height:15px;
        position: absolute;
        top:0;
        right:10px;
        text-align:center;
        font-size:8px;
    }

    /* 购车有商品 */
    .store_car_tittle{
        border-top:1px solid #ebebeb;
        border-bottom:1px solid #ebebeb;
        line-height:40px;
        color:#666;
        font-size:14px;
        padding-left:10px;
        background:#fff;
    }
    /* 购物车中的选择按钮*/
    .selAll{
        display:inline-block;
        background:url('/static/images/store/ck.png') no-repeat 10px 10px;
        background-size:20px auto;
        padding-left:40px;   
    }
    .sel_Active{
        background-position:10px -190px;
    }
     /* 清除购物车  */
    .clearCar{
        float: right;
        background:url('/static/images/store/delete.png') no-repeat 0px 12px;
        background-size:auto 14px;
        padding:0 12px 0 18px;
    }
     /* 购物车商品展示  */
    .store_car_mess{
        background:#fff;
    }
    .store_car_mess li{
        position: relative;
        margin-left:10px;
        border-bottom:1px solid #e8e8e8;
        padding:0 0 10px 30px;
        line-height:36px;
    }
    .store_car_mess li a{
        position: relative;
        color:#333;
        text-decoration:none;
        width:100%;
    }
    .store_car_mess table img{
        width:52px;
        height:52px;
        margin-top:10px;
    }
    .store_car_mess table{
        table-layout:fixed;
    }
    .store_car_mess table td{
        height:60px;
        text-align:left;
        line-height:0;
        position: relative;
    }
    .store_car_mess td h5{
        font-size:14px;
        line-height:36px;
        height:36px;
        text-overflow:hidden;
        overflow: hidden;
        white-space: nowrap;
    }
    .store_car_mess td .store_inte{
        margin:2px 3px 0 0;
        height:12px;
        line-height:12px;
        font-size:10px;
        color:#fff;
        padding:1px 2px;
        border-radius:2px;
    }
    .store_car_mess .dd_last{
        font-size:0;
    }
    .store_car_mess .dd_last .store_sprice{
        line-height:20px;
        height:20px;
        color:#ff3434;
        font-size:16px;
        display: inline-block;
    }
    .store_car_mess .dd_last .store_price{
        text-decoration:line-through;
        color:#999;
        font-size:10px;
        padding-left:5px;
    }
    .store_max{
        color:#ff5757;
        line-height:16px;
        font-size:12px;
    }
    .store_max_sprice,
    .store_max_price{
        line-height:20px;
        height:20px;
        font-size:16px;
        color:#ff3434;
    }
    .store_max_sprice i,
    .store_max_price i{
        display: inline-block;
        padding:1px 2px;
        line-height:12px;
        font-size:10px;
        color:#fff;
        border-radius:2px;
        vertical-align:top;
        margin-top:2px;
    }
    .store_max_sprice i{
        background:#ff5c5d;
    }
    .store_max_price i{
        background:#cacaca;
    }
    .store_max_sprice em,
    .store_max_price em{
        color:#999;
        font-size:12px;
        padding-left:5px;
    }
    .store_car2_mess .store_add_box{
        bottom:10px;
    }
    .selOne{
        position: absolute;
        left:0;
        top:50%;
        margin-top:-30px;
        width:50px;
        height:60px;
        background:url('/static/images/store/ck.png') no-repeat 10px 10px;
        background-size:20px auto;
    } 
    .selOne_active{
        background-position:10px -190px;
    }
    .center{
        position: absolute;
        top:44px;
        bottom:48px;
        left:0;
        right:0;
    }
    /* 左侧手风琴效果 */
    .center_left{
        width:87px;
        height:100%;
        position: relative;
    }
    .center_left .center_ul{
        height:100%;
        position: absolute;
        top:0;
        bottom:48px;
        left:0;
        padding-bottom:48px;
        overflow-y:auto;
    }
    .center_ul > li{ 
        position: relative;      
        width:87px;
    }
    /* 手风情的父标签 */
    .center_ul > li > p{
        height:46px;
        line-height:46px;
        text-align:center;
        font-size:13px;
        color:#666;
        background:#f4f4f4;
         border:1px solid #e8e8e8;
         position: relative;
       /* border-left:3px solid transparent; */
    }
    .center_ul > li .center_i{
        position: absolute;
        top:12px;
        left:0;
        width:24px;
        height:22px;
        background:url('/static/images/store_sprites_4.6.png') no-repeat -10px -190px;
        background-size:220px auto;
    }
    .center_left .center_li > p{
        padding-left:20px;
    }
    .center_ul_tittle{
        color:#47b34f;
    }
    .center_ul_tittle::before{
        content: '';
        display: inline-block;
        position: absolute;
        left:0;
        top:0;
        width:1px;
        height:100%;
        border-left:3px solid #47b34f;
    }
    /* 手风情的子标签 */
    .center_son_ul{
        padding-bottom:0;
        font-size:12px;
        background:#fff;
        height:0;  
        transition:height 0.5s linear 0s;
    }
    .center_son_ul > li{
        width:70px;
        border:1px dotted rgba(241,241,241,0.8);
        border-left-color:transparent;
        padding:0 4px 0 10px;
        position: relative;
    }
    .center_son_ul > .center_son_li::before{
        content: '';
        display: inline-block;
        position: absolute;
        left:0;
        top:0;
        width:1px;
        height:100%;
        border-left:1.5px solid #47b34f;
    }
    .center_son_ul > li > p{
        width:70px;
        height:46px;
        line-height:20px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        vertical-align:middle;
        -webkit-box-orient:vertical;
        -webkit-box-pack:center; 
    }
    /* .center_ul > li span{
        padding-left:24px;
    } */
    /* elem 插件
    .center_left .li{
        font-size:13px;
        color:#666;
        background:#f4f4f4;
        border:1px solid #e8e8e8;
        border-left:none;
        position: relative;
        text-align:center;
        width:87px;
    }
    .center_left .li .center_i{
        position: absolute;
        top:12px;
        left:0;
        width:24px;
        height:22px;
        background:url('/static/images/store_sprites_4.6.png') no-repeat -10px -190px;
        background-size:220px auto;
    }
    .center_left .li .li_tittle{
        border-left:3px solid 
    }
    .center_left .center_li .el-collapse-item__header{
        padding-left:24px;
    }
    .el-icon-arrow-right::before{
        content:'';
    }
    .el-collapse-item__header{
        width:56px;
        background-color:#f4f4f4;
        padding:0 0 0 10px;
    }
    .el-collapse-item__content{
        padding-bottom:0;
        width:70px;
        font-size:12px;
        background:#fff;   
    }
    .el-collapse-item__content div{
        width:70px;
        border:1px dotted rgba(241,241,241,0.8);
        border-left-color:#fff;
        padding:0 4px 0 10px;
    }
    .el-collapse-item__content div p{
        width:70px;
        height:46px;
        line-height:20px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        vertical-align:middle;
        -webkit-box-orient:vertical;
        -webkit-box-pack:center; 
    } */
    .center_right{
        position: absolute;;
        top:0;
        left:87px;
        bottom:0;
        right:0;
    } 
    .center_right_box{
        height:100%;
        overflow-y:scroll; 
    }
    .center_cards{
        padding-top:10px;
    }
    .center_cards li{
        width:100%;
        padding:0 10px 10px;
        box-sizing:border-box;
    }
    .card_box{
        height:70px;
        border-left:3px solid #ff5757;
        white-space: nowrap;   
        border-radius:5px;
    }
    .center_cards .center_right_card1{
        width:70%;
        height:70px;
        float:left;
        border:1px solid #ff9d9d;
        border-left:none;
        border-right:none;
        border-radius:5px 0 0 5px;
        box-sizing:border-box;
        padding:0 10px 0 12px;
    }
    .center_right_card1 h5{
        margin-top:16px;
        color:#FF5757;
        font-size:15px;
    }
    .center_right_card1 p{
        font-size:11px;
        color:#666;
        text-overflow:ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .card_box .card_right_card2{
        width:30%;
        height:70px;
        float:right; 
    }
    .card_box .card_right_card2 i{
        width:12%;
        height:70px;
        background:url('/static/images/store_act_new_conpon.png') no-repeat center center;
        background-size:100% 70px;
        float:left;
        border-left:1px solid #E0D8D6;
        border-right:1px solid #E0D8D6;
    }
    .card_right2{
        display: inline-block;
        width:84%;
        height:70px;
        box-sizing:border-box;
        border:1px solid #ff9d9d;
        border-left:none;
        border-radius:0 5px 5px 0;
    }
    .card_right2 span{
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
    ul.center_cards li img{
        display: inline-block;
        width:100%;
        height:auto;
    }
    .store_shops{
        background:#f4f4f4;
        color:#666;
        font-size:12px;
    }
    .store_shops .store_num{
        padding-left:12px;
        font-size:12px;
        line-height: 30px;
    }
    .store_shops_ul li{
        padding-left:10px;
        background:#fff;
        position: relative;
    }
    .store_shops_ul li a{
        display: block;
        padding:10px 10px 0 0;
        overflow: hidden;
        text-decoration:none;
    }
    .store_shops_ul li img{
        width:65px;
        height:65px;
        padding-top:4px;
        float: left;
    }
    .store_shops_dl{
        margin-left:70px;
    }
    .store_shops_dl dt{
        font-size:14px;
        color:#333;
        text-overflow:ellipsis;
        overflow: hidden;
        -webkit-line-clamp:2;
        line-height:21px;
        max-height:42px;
        padding-left:5px;
    }
    .store_shops_dl dd{
        font-size:11px;
        padding:3px 0 2px 5px;
        line-height:14px;
        color:#999;
    }
    .store_shops_dl dd .store_line{
        display: inline-block;
        width:8px;
        height:10px;
        background:url('/static/images/store/icon_line_split.jpg') no-repeat center center;
        background-size:auto 10px;
    }
    .store_shops_dl dd .store_inte{
        border-radius: 2px;
        display: inline-block;
        padding: 1px 2px;
        line-height: 14px;
        font-size: 10px;
        color:#fff;
        margin-right:2px;
    }
   .mult{
        background:#5FBC65;
    }
    .db{
        background:#ff6a00;
    }
    .zj{
        background:#FFCE0B;
    }
    .store_shops_dl .store_sprice{
        font-size: 0;
        color: #ff3434;
        padding-top: 2px;
        white-space: nowrap;
        display: inline-block;
    }
    .store_shops_dl .store_sprice i{
        font-style: normal;
        font-size: 10px;
    }
    .store_shops_dl .store_sprice span{
        font-size: 16px;
    }
    .store_shops_dl .store_price{
        padding-left: 5px;
        color: #999;
        font-size: 0;
        text-decoration: line-through;
        display: inline-block;
    }
    .store_shops_dl .store_price i{
        font-size:10px;
    }
    .store_shops_dl .store_price del{
        font-size:13px;
    }
    .store_shops_dl .store_shops_ul li a::after{
        display: inline-block;
        content: '';
        width:100%;
        height:1px;
        border-bottom:1px solid #e8e8e8;
    }
    dd.dd_last{
        margin-top:5px;
    }
    .store_add_box{
        width:80px;
        height:30px;
        position: absolute;
        right:10px;
        bottom:15px;
    }
    .little_box{
        display: inline-block;
        position: absolute;
        top:0;
        width:28px;
        height:28px;
        border-radius:50%;
        background:url('/static/images/store/addNumSprite.png') no-repeat 0 0;
        background-size:auto 28px;
    }
    .mult_box{
        left:0;
        background-position:-41px 0;    
    }
    .add_box{
        right:0;
    }
    .num_box{
        display: inline-block;
        width: 24px;
        height:28px;
        color:#333;
        position: absolute;
        top:0;
        left:28px;
        text-align:center;
        line-height:28px;
    }
</style>
