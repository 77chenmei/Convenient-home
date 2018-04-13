<template>
<div class = "recommend">
    <div class = "shop">
        <div class="sh">
        <span>附近的店铺</span>
        </div>
        <div class = "shopList"> 
        <ul>
          <li v-for = "(shop,index) in shops" :key = "'shop' + index">
            <router-link class = "shopLeft" :to = "{name:'store',query:{id:shop.id}}">
              <!-- <router-link class = "shopLeft" :to = "'stroe' + shop.id"> -->
              <div class = "shopLeft">
                <img :src="'/static/images/' + shop.img">
              </div>
              <span class = "newshop" v-if = "shop.newshop"></span>
            </router-link>
            <div class = "shopRight">
              <router-link :to = "{path:'/store',query:shop.id}">
              <h3>{{shop.tittle}}</h3>
              <div class = "store_honor_box">
                <span class = "fite store_honor_icon" v-if = "shop.fite"></span>
                <span class = "seven store_honor_icon" v-if = "shop.seven"></span>
                <span class = "free store_honor_icon" v-if = "shop.free"></span>
              </div>
              <p class = "dd" v-show = "shop.close">{{shop.close}}</p>
              <p :class = "(shop.postType).indexOf('专送') >-1 ? 'cc' : 'dd'">
                  <span>{{shop.postType}}</span> 
                  <span> - </span>
                  <span>{{shop.postMin}}</span>
              </p>
              <p class = "star">
                <span class = "stars">
                  <i v-for = '(i,index) in shop.stars' :key = 'index' :class = "i == 0? 'zero':i== 1 ? 'little' : i== 2 ? 'half' : i== 3 ? 'max':'full'"></i>
                </span>
                <span class = "bill">月售{{shop.bill}}单</span>
              </p>
              <p class = "words">{{shop.words}},{{shop.word2}}</p>
              </router-link>
              <div class = "box">
                <div class = "sale">
                <!-- <div class = "sale" :class = "'sale' + index" > -->
                  <p v-if = "shop.newCards" class = "cards">
                    <span>领券</span>
                    <span>{{shop.newCards}}</span>
                  </p>
                  <p v-if = "shop.give" class = "give">
                    <span>买赠</span>
                    <span>{{shop.give}}</span>
                  </p>
                  <p v-if = "shop.first" class = "first">
                    <span>首单</span>
                    <span>{{shop.first}}</span>
                  </p>
                  <p v-for = "(mult,multIn) in shop.mult" :key = "'mult' + index + multIn" class = "mult1">
                    <span>满减</span>
                    <span> {{mult}} </span>
                  </p>
                  <p v-if = "shop.fre" class = "fre">
                    <span>运费</span>
                    <span>{{shop.fre}}</span>
                  </p>
                </div>
                <div class = "drop">
                <!-- <div class = "drop" :class = "'drop' + index"  data-show = 0 @click = "add(index)"> -->
                  <i></i>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="7">
      <div class = "slideDown" v-if = 'isok'>
        <i></i>
        <span>继续滑动查看更多内容</span>
      </div>
    </div>
    <div class="noShops" v-if = '!isok'> 
      <span>
        <i class = "node-left"></i>
        没有更多商家啦
        <i class = "node-right"></i>
      </span> 
    </div> 
</div>
</template>

<script>
import $ from "jquery";
import infiniteScroll from "vue-infinite-scroll"; //页面加载更多

export default {
  directives: { infiniteScroll },
  data() {
    return {
      shops: [], //存放店铺信息
      busy: false,
      params: 0,
      isok: true,
      length:1,
    };
  },
  created() {
    $.get(this.apiUl + "/index/shop",{params:this.params},res => {
      res = this.changeStar(res)
      this.shops = this.shops.concat(res);
    },"json");
    this.params++;  
  },
  updated(){
    //商店列表的小箭头的出现和显示的控制
    this.$nextTick(function(){
      //遍历箭头 和 活动信息的父标签
      $('.box').each(function(index,el){
        //获取父标签下所有的p标签的个数
        var length = $(this).find('p').length;
        if( length == 0){
          //个数是0个的时候，父标签隐藏
          $(this).css('display','none');
        }else if(length >2){
          //个数大于2的时候，小箭头出现
          $(this).find('.drop').css('display','block');
          //设置p标签两个以下都隐藏
          $(this).find('.sale').find('p').slice(2).css('display','none');
        }
      })
     })  
      $('.box').map(function(el,index){
        //给每个小箭头加入一个点击事件，通过事件监听
        var isdrop = false;
        $(this).find('.drop').click(function(){
          if(isdrop){
            $(this).find('i').css("backgroundPosition", "center -370px");
            $(this).siblings('.sale').find('p').slice(2).css('display','none');
            isdrop = false;
          }else{
            $(this).find('i').css("backgroundPosition", "center -330px");
            $(this).siblings('.sale').find("p").css("display", "block");
            isdrop = true;
          }
        })
      })
  },
  methods: {
    //这个方法需要给每个加上class名进行
    add(index) {
      var isok = $(".drop" + index).attr("data-show");
      if (isok == "1") {
        $(".drop" + index + " i").css("backgroundPosition", "center -370px");
        // var sale = $(".sale" + index).find("p"),
        //     length = $(sale).length;
        // for (var i = 2; i < length; i++) {
        //   $(sale).eq(i).css("display", "none");
        // }
        $('.sale' + index).find('p').slice(2).css('display','none');
        $(".drop" + index).attr({ "data-show": 0 });
      } else {
        $(".drop" + index + " i").css("backgroundPosition", "center -330px");
        $(".sale" + index).find("p").css("display", "block");
        $(".drop" + index).attr({ "data-show": 1 });
      }
    },
    changeStar(res){
      res.forEach(el => {
          var arr = el.star,
              int = Math.floor(arr),
              dou = arr * 10 % 10,
              newArr = [];
          if(int != 0){
            while(newArr.length < int){
              newArr.push(4);
            }
          }
          if(dou == 0){
            newArr.push(0)
          }else if(dou<=3){
            newArr.push(1)
          }else if(dou<=6){
            newArr.push(2)
          }else if(dou<=8){
            newArr.push(3)
          }else{
            newArr.push(4)
          }
          while(newArr.length <5){
            newArr.push(0)
          }
          el.stars = newArr;
          if(el.cards.length != 0){
            el.newCards = el.cards.join(',');
          }
      });
      return res
    },
    loadMore: function() {
      this.busy = true;
      if(this.length != 0){
        $.get(this.apiUl + "/index/shop",{ params: this.params},res => {
            if(res.length != 0){
                setTimeout(() => {
                  res = this.changeStar(res)
                  this.shops = this.shops.concat(res);
                }, 1000);
            }else{
              this.length = 0;
              this.isok = false;
            } 
        })
      }else{
        this.isok = false;
      }
      this.busy = false;
      this.params ++;
    }
  },
  mounted:function(){
          
    
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
}
.recommend {
  background: #f4f4f4;
}
.shop {
  background: #fff;
}
.shop .sh {
  height: 50px;
  line-height: 50px;
  position: relative;
  color: #70704e;
}
.shop .sh::before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -114px;
  display: inline-block;
  content: "";
  width: 228px;
  height: 1px;
  border-top: 1px solid #70704e;
}
.shop .sh span {
  position: relative;
  padding: 0 5px;
  background: #fff;
  font-size: 17px;
  font-weight: bold;
  color: #333;
  height: 48px;
  line-height: 48px;
}
.shopList li {
  position: relative;
  padding: 15px 10px;
  border: 1px solid #e7e9e4;
  min-height: 70px;
}
.shopLeft img {
  width: 64px;
  height: 64px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  float: left;
}
.newshop{
  position: absolute;
  left:0;
  top:0;
  display: inline-block;
  width:38px;
  height:38px;
  background:url('/static/images/icon_new_store.png') no-repeat left top;
  background-size:38px auto;
}
.shopRight {
  margin-left: 76px;
  font-size: 12px;
  color: #999;
  text-align: left;
  position: relative;
}
.shopRight h3 {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}
.store_honor_box{
  display: inline-block;
  position: absolute;
  right:0;
  top:-1px;
}
.free{
  background:url('/static/images/free.png');
}
.seven{
  background:url('/static/images/seven.png');
}
.fite{
  background:url('/static/images/cdbe.png');
}
.store_honor_icon{
  display: inline-block;
  width:18px;
  height:20px;
  background-position:center center;
  background-size:auto 20px;
  background-repeat:no-repeat;
}

.shopRight .cc,
.shopRight .dd {
  display: inline;
  font-size: 10px;
  padding: 2px;
}
.shopRight .cc {
  border: 1px solid #16a9ff;
  color: #16a9ff;
}
.shopRight .dd {
  border: 1px solid #b6b6b6;
  color: #999;
}
.shopRight .words {
  font-size: 11px;
  color: #999;
  margin-top: 8px;
}
.shopRight .star {
  height: 14px;
  margin-top: 8px;
}
.shopRight .star .stars {
  height: 12px;
  padding-top: 2px;
}
.star .stars i {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-size: auto 10px;
  margin-right: 1px;
}
.stars .zero {
  background: url("/static/images/newStar.png") no-repeat -40px 0;
}
.stars .little {
  background: url("/static/images/newStar.png") no-repeat -30px 0;
}
.stars .half {
  background: url("/static/images/newStar.png") no-repeat -20px 0;
}
.stars .max {
  background: url("/static/images/newStar.png") no-repeat -10px 0;
}
.stars .full {
  background: url("/static/images/newStar.png") no-repeat 0 0;
}
.star .bill {
  background: url("/static/images/icon_line_split.jpg") no-repeat left center;
  background-size: auto 10px;
  padding-left: 5px;
  color:#999;
  font-size:12px;
}
.shopRight .sale {
  margin-top: 12px;
  font-size: 0;
}
.shopRight .sale::before {
  display: inline-block;
  content: "";
  width: 100%;
  height: 1px;
  border-top: 1px dotted #ccc;
}
.shopRight .sale p {
  width: 86%;
  font-size: 10px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sale p span:nth-child(1) {
  display: inline-block;
  padding: 2px;
  margin-right: 4px;
  border-radius: 2px;
  color: #fff;
  font-size: 10px;
  font-style: normal;
}
.sale .cards span:nth-child(1),
.sale .first span:nth-child(1) {
  background: #ff6c57;
}
.sale .mult1 span:nth-child(1) {
  background: #5fbc65;
}
.sale .fre span:nth-child(1) {
  background: #5ca7ff;
}
.sale .give span:nth-child(1){
  background:#fe332f;
}
.box {
  position: relative;
}
.drop {
  position: absolute;
  top: 3px;
  right: -10px;
  padding: 10px;
  display:none;
}
.drop i {
  display: inline-block;
  width: 18px;
  height: 10px;
  background: url("/static/images/index.png") no-repeat;
  background-position: center -370px;
}
.slideDown {
  background: #f4f4f4;
  margin-bottom: 5px;
}
.slideDown i {
  display: block;
  width: 18px;
  height: 18px;
  background: url("/static/images/index_icon_301.png") no-repeat -21px -212px;
  background-size: 60px 238px;
  margin: 10px auto 0;
}
.slideDown span {
  display: inline-block;
  font-size: 11px;
  color: #999;
  line-height: 21px;
}
.noShops {
  position: relative;
}
.noShops:before {
  display: inline-block;
  content: "";
  width: 60%;
  height: 1px;
  border-top: 1px solid #dedede;
  position: absolute;
  top: 50%;
  left: 20%;
}
.noShops {
  background: #f4f4f4;
  line-height: 40px;
  color: #999;
  font-size: 14px;
}
.noShops span {
  position: relative;
  display: inline-block;
  background: #f4f4f4;
  padding: 0 10px;
}
.noShops i {
  display: inline-block;
  width: 4px;
  height: 4px;
  background: #dedede;
  border-radius: 50%;
  position: absolute;
  top: 19px;
}
.noShops .node-left {
  left: 0;
}
.noShops .node-right {
  right: 0;
}
</style>
