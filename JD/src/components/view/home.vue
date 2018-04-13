<template>
  <div id = "home">
    <Head></Head>
    <div id = "main">
      <router-link class = "fad" to = "">
        <img src="/static/images/fad.png">
      </router-link>
      <div id="ad">
        <a href="https://img30.360buyimg.com/mobilecms/jfs/t17623/94/574724356/80152/e28f71e5/5a962c05N41c89f2b.jpg">
            <img src="/static/images/ad.gif">
        </a>
      </div>
      <Lists></Lists>
      <Banner1></Banner1>
      <Adve></Adve>
      <Ms></Ms>
      <Banner2></Banner2>
      <!-- 店铺信息 -->
      <shops></shops>
      <Openapp></Openapp>
    </div>
    <Footer :active1 = "active"></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import { Swiper, Slide } from "vue-swiper-component";

import Head from "@/components/common/home.header";
import Lists from "@/components/common/home.lists";
import Banner1 from "@/components/common/home.banner1";
import Ms from "@/components/common/home.ms";
import Adve from "@/components/common/home.ad";
import Banner2 from "@/components/common/home.banner2";
import Shops from "@/components/common/home.shops";
import Openapp from "@/components/common/home.app";
import Footer from "@/components/common/index.footer";

export default {
  name: "home",
  data() {
    return {
      active:'active1',
      ismove: true
    };
  },
  created() {
    $(window).on("touchmove", function() {
      $(".fad").removeClass("show-out");

      // $('.fad').addClass('show-in')
      $(".fad")
        .addClass("show-in")
        .css({
          opacity: 0.7,
          right: "-50px"
        });
    });
    $(window).on("touchend", function() {
      $(".fad").removeClass("show-in");
      $(window).ready(function() {
        $(".fad")
          .addClass("show-out")
          .css({
            opacity: 1,
            right: "0px"
          });
      });
    });
  },
  components: {
    Head,
    Shops,
    Openapp,
    Lists,
    Ms,
    Banner1,
    Adve,
    Banner2,
    Footer
  },
  props:{}
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
}
#main {
  background: #fff;
  padding-bottom: 44px;
  height:100%;
}
#main .fad {
  display: inline-block;
  width: 75px;
  height: auto;
  position: fixed;
  bottom: 20%;
  right: 0;
  z-index: 99;
  animation-fill-mode: both;
}
.fad img {
  width: 100%;
  height: auto;
}
.show-in {
  transition: all 0.7s;
}
.show-out {
  transition: all 1.75s linear 0.75s;
  /* animation:show-out 1.75s linear 0.75s; */
}
/* @keyframes show-out {
    0%{
        opacity:0.7;
        right:-50px; */
/* transform:translateX(0px); */
/* }
    100%{
        opacity:1;
        right:0; */
/* transform:translateX(-50px);
    }
} */
#ad {
  width: 100%;
  overflow: hidden;
}
#ad a {
  width: 100%;
}
#ad img {
  width: 100%;
  height: auto;
}
</style>

