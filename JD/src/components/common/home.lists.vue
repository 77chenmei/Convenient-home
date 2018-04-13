<template>
    <ul id = "lists">
        <li v-for = 'list in lists' :key = 'list.id'>
            <a :href="list.href">
            <img :src = "'/../' + list.img" onerror="this.src=url">
            <p>{{list.tittle}}</p>
            <span v-if="list.id == 10">领鲜豆</span>
            </a>
        </li>
    </ul>
</template>

<script>
import $ from 'jquery';

export default {
  data(){
      return {  
        lists: [], //存放列表去数据
        url: "static/images/index_ball.png", //默认或加载出错的图片
      }
  },
  created(){
     //获取首页导航列表数据
    $.get(
      this.apiUl + "/index",
      res => {
        this.lists = res.lists;
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
#lists li {
  width: 20%;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
#lists li a {
  text-decoration: none;
  display: block;
  width: 100%;
  text-align: center;
  color: #000000;
  line-height: 12px;
  font-size: 12px;
  margin-top: 15px;
  /* 单行省略 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#lists li img {
  display: block;
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  border-radius: 40px;
  background: url("/static/images/index_ball.png");
  background-size: 100%;
}
#lists li span {
  position: absolute;
  left: 38%;
  top: 20%;
  background: #ff5757;
  font-size: 12px;
  color: #fff;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 33px;
  border: 1px #ff5757 solid;
  overflow: hidden;
}
</style>
