<template>
  <div class = "ms">
        <div class="ms-tittle">
            <router-link to = "#grabList/res_type:seckill_20/longitude:118.62804/latitude:32.05841/city:%E5%8D%97%E4%BA%AC%E5%B8%82">
              更多
            </router-link>
        </div>
        <div class = "ms-list">
          <router-link to="" v-for = "mm in ms" :key = "mm.id">
            <div>
              <img :src="mm.img">
              <span>{{mm.tittle}}</span>
            </div>
            <p>￥<strong>{{mm.sale}}</strong></p>
            <del>￥<i>{{mm.price}}</i></del>
          </router-link> 
          <router-link to = "" id = "last">
            <div  class = "ms-left">查看更多</div>
          </router-link>
        </div>
      </div>
</template>
<script>
import $ from 'jquery';

export default {
  data() {
    return {
      ms: [], //存放秒杀区数据
    };
  },
  created(){ 
    //获取首页秒杀部分的数据
    $.get(
       this.apiUl + "/index/ms",
      res => {
        this.ms = res.lists;
      },
      "json"
    );
  }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
}
.ms-tittle {
  height: 30px;
  line-height: 30px;
  padding: 5px 10px;
  background: url("/static/images/seckill-title.png") no-repeat 10px center;
  background-size: auto 20px;
}
.ms-tittle a {
  font-size: 12px;
  color: #ff5757;
  background: url("/static/images/seckill-right.png") no-repeat right center;
  background-size: auto 12px;
  padding-right: 10px;
  float: right;
}
.ms-list {
  padding: 5px 10px 10px 0;
  white-space: nowrap;
  overflow: auto;
  width: auto;
  position: relative;
  font-size: 0;
}
.ms-list a {
  width: 20%;
  display: inline-block;
  font-size: 12px;
  margin: 0 0 0 10px;
  overflow: hidden;
  text-align: center;
}
.ms-list a div {
  position: relative;
}
.ms-list a img {
  display: block;
  width: 100%;
  height: auto;
}
.ms-list a span {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 9px;
  color: #fff;
  background: rgba(255, 87, 87, 0.6);
  border-radius: 10px;
  padding: 1px 5px;
  width: 100%;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ms-list p {
  color: #ff5757;
}
.ms-list p strong {
  font-size: 16px;
}
.ms-list del {
  color: #999;
  text-decoration:line-through;
}
.ms-list del i {
  font-size: 12px;
  font-style:normal;
}
.ms-list #last {
  background: url("/static/images/seckill-more.png") no-repeat left center;
  background-size: auto 20px;
  padding-left: 30px;
  width: 12px;
  font-size: 12px;
  color: #999;
  white-space: normal;
  margin-left: 10px;
  position: relative;
  top: -40px;
  display: inline-block;
  margin-right: 0;
}
</style>
