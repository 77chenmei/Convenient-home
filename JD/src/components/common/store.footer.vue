<template>
    <div class = "footer2">
        <div class ="foot2">
            <div class = "store_car2">
                <div class ="car2_img store_img1 store_img2"></div>
                <div class ="store_car2_tittle">
                    <span class = "selAll">全选</span>
                    <span class ="clearCar">清空购物车</span>
                </div>
                <div class ="store_car2_mess">
                    <ul>
                        <li v-for="goods in shopCar" :key= "goods.id">
                            <span class ="selOne"></span>
                            <router-link to="">
                                <table>
                                    <tr>
                                        <td>
                                            <img :src="'/static/images/store/' + goods.img">
                                        </td>
                                        <td>
                                            <h5>{{goods.name}}</h5>
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
                                        </td>
                                    </tr>
                                </table>
                            </router-link>
                            <div class ="store_add_box">
                                <span class = "mult_box little_box"></span>
                                <span class ="num_box">0</span>
                                <span class = "add_box little_box" @click ="addCar(active)"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- <div class ="footer2_bottom">
                <router-link to="" class ="stores_words">去结算</router-link>
                <div class ="shop_nothing">购物车是空的</div>
            </div> -->
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            shopCar:[], //存储当前商店的购物车信息
            num:0, //购物车中商品的个数 底部显示购物车中的商品数
        }
    },
    methods:{
        addCar(active){
           //store.get('storeId') 商店的id
           // active     add点击添加的商品信息
           var storeId = store.get('storeId');
           this.shopCar.push(active);
           //商品飞入购物车之后
           $('.store_img').addClass('store_img2');
           this.num = this.shopCar.length;
           //
        }
    }
}
</script>

<style>
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
    .footer2{
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background:rgba(0,0,0,0.4);
    }
    /* .footer{
        background:#fff;
        border-top:1px solid #bbb;
        position: fixed;
        bottom:0;
        left:0;
        right:0;
        height:48px;
    } */
    .store_img{
        width:80px;
        position: absolute;
        left:0;
        bottom:0;
    }
    .store_img1{
        height:48px;
        background:url('/static/images/cart.png') no-repeat 10px 5px;
        background-size:auto 120px;
    }
    .store_img2{
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
    .footer2_bottom{
        position: fixed;
        bottom:0;
        left:0;
    }
    .footer2_bottom .shop_nothing{
        height:48px;
        line-height:48px;
        position: absolute;
        left:70px;
        bottom:0;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
    .footer2_bottom .stores_words{
        position: absolute;
       
        bottom:0;
        width:115px;
        height:100%;
        background:#bebebe;
        color:#fff;
        line-height:48px;
        z-index:40px;
        text-align:center;
        text-decoration:none;
    }
    /* 购车有商品 */
    .store_car2{
        position: absolute;
        bottom:48px;
        left:0;
        right:0;
    }
    .car2_img{
        width:80px;
        height:60px;
        position: relative;
    }
    .car2_img::after{
        position: absolute;
        bottom:-2px;
        left:45%;
        content:'';
        width:0;
        height:0;
        border-bottom:8px solid #fff;
        border-left:4px solid transparent;
        border-right:4px solid transparent;
    }
    .store_car2_tittle{
        border-top:1px solid #ebebeb;
        border-bottom:1px solid #ebebeb;
        line-height:40px;
        color:#666;
        font-size:14px;
        padding-left:10px;
        background:#fff;
    }
    /* 购物车中的选择按钮 */
    .selAll{
        /* float:left; */
        display:inline-block;
        background:url('/static/images/store/ck.png') no-repeat 10px 10px;
        background-size:20px auto;
        padding-left:40px;   
    }
    .selAll_Active{
        background-position:10px -190px;
    }
    /* 清除购物车 */
    .clearCar{
        float: right;
        background:url('/static/images/store/delete.png') no-repeat 0px 12px;
        background-size:auto 14px;
        padding:0 12px 0 18px;
    }
    /* 购物车商品展示 */
    .store_car2_mess{
        background:#fff;
    }
    .store_car2_mess li{
        position: relative;
        margin-left:10px;
        border-bottom:1px solid #e8e8e8;
        padding:0 0 10px 30px;
        line-height:36px;
    }
    .store_car2_mess li a{
        position: relative;
        color:#333;
        text-decoration:none;
        width:100%;
    }
    .store_car2_mess table img{
        width:52px;
        height:52px;
        margin-top:10px;
    }
    .store_car2_mess table{
        table-layout:fixed;
    }
    .store_car2_mess table td{
        height:60px;
        text-align:left;
        line-height:0;
        position: relative;
    }
    .store_car2_mess td h5{
        font-size:14px;
        line-height:36px;
        height:36px;
        text-overflow:hidden;
        overflow: hidden;
        white-space: nowrap;
    }
    .store_car2_mess td .store_inte{
        margin:2px 3px 0 0;
        height:12px;
        line-height:12px;
        font-size:10px;
        color:#fff;
        padding:1px 2px;
        border-radius:2px;
    }
    .store_car2_mess .dd_last{
        font-size:0;
    }
    .store_car2_mess .dd_last .store_sprice{
        line-height:20px;
        height:20px;
        color:#ff3434;
        font-size:16px;
        display: inline-block;
    }
    .store_car2_mess .dd_last .store_price{
        text-decoration:line-through;
        color:#999;
        font-size:10px;
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
        background:url('/static/images/store/ck.png') no-repeat 10px 20px;
        background-size:20px auto;
    }
</style>
