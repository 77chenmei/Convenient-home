<template>
   <div class="banner2">
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(banner,index) in banner" :key = "index">
            <router-link to = 'banner.href'>
              <img :src="banner.img">
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
</template>

<script>
import $ from "jquery";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
    data() {
        return {
            banner: [], //存放轮播图数据
            swiperOption: {
                notNextTick: true,
                loop: true,
                autoplay: 30000,
                speed: 2000,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                autoHeight: true,
            }   
        }
    },
    created(){
        //获取首页轮播
        $.get(
        this.apiUl + "/index/banner2",
        res => {
            this.banner = res.lists;
        },
        "json"
        );
    },
    components: {swiper,swiperSlide},
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.banner2{
  padding: 0 10px;
  margin: 10px auto;
} 
.swiper-container {
  overflow: hidden;
}
.swiper-container img {
  display: block;
  width: 100%;
  height: auto;
} 
.swiper-pagination-bullet {
  width: 3px;
  height: 3px;
  background: transparent;
  border: 2px solid #fff;
  margin: 2px 2px;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
</style>
