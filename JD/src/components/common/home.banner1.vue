<template>
  <div class="banner">
        <!-- <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(banner,index) in banners" :key = "index">
            <router-link to = 'banner.href'>
                <img :src="banner.img">
            </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper> -->
        <Swiper v-if = "banners.length > 0" :autoPlay='true' :showIndicator='true' interval="2500" duration="500" >
            <Slide  v-for="(banner,index) in banners" :key = "index">
                <router-link to = 'banner.href'>
                    <img :src="banner.img">
                </router-link>
            </Slide>
        </Swiper>
    </div>
</template>

<script>
import { Swiper, Slide} from 'vue-swiper-component';
import $ from 'jquery';

export default {
    data() {
        return {
            banners: [], //存放轮播图数据
            /*
            swiperOption: {
                loop: true,
                autoplay: true,
                speed: 2000,
                pagination: {
                el: ".swiper-pagination",
                clickable: true
                },
                autoHeight: true
            },
            */
        }
    },
    created(){
          //获取首页轮播
        $.get(this.apiUl + "/index/banner",
        res => {
            this.banners = res.lists;
        },
        "json"
        );
    },
    components: { Swiper,Slide}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
}
.banner {
  padding: 0 10px;
  margin: 10px auto;
}
.wh_slide {
  min-height: 0;
}
.wh_slide img {
  display: block;
  width: 100%;
  height: auto;
}
.wh_indicator_item {
  background: transparent;
  width: 3px;
  height: 3px;
  border: 2px solid #fff;
  margin: 1px 5px;
}
.wh_show_bgcolor {
  background: #fff;
}

/* 
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
*/
</style>
