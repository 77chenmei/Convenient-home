<template>
    <div>
        <div class="adct1">
            <ul>
                <li v-for = "ad in ads" :key="ad.id">
                    <router-link to = "ad.href">
                      <img :src="ad.img">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="adct1 adct2">
            <ul>
                <li v-for = "ad in ad2" :key="ad.id">
                <router-link to = "ad.href">
                    <div class = "adleft">
                    <h5>{{ad.tittle}}</h5>
                    <p>{{ad.word}}</p>
                    </div>
                    <img :src="ad.img">
                </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      ads: [],
      ad2: []
    };
  },
  created() {
    //获取首页ad部分的数据
    $.get(
      this.apiUl + "/index/ads",
      res => {
        this.ads = res.lists;
      },
      "json"
    );
    //获取首页ad2部分的数据
    $.get(
      this.apiUl + "/index/ad2",
      res => {
        this.ad2 = res.lists;
      },
      "json"
    );
  }
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
}
.adct1 {
  padding: 0 10px;
}
.adct1 ul {
  width: 100%;
}
.adct1 li {
  width: 50%;
  display: inline-block;
}
.adct1 li a {
  display: block;
  width: 100%;
  overflow: hidden;
}
.adct1 li img {
  width: 100%;
  height: auto;
}
.adct2 li {
  vertical-align: middle;
}
.adct2 li .adleft {
  width: 60%;
  height: 80px;
  float: left;
}
.adleft h5 {
  margin-top: 24px;
  font-size: 14px;
  color: #333;
  font-weight: normal;
}
.adleft p {
  font-size: 12px;
  color: #ff5757;
}
.adct2 li img {
  width: 60px;
  height: 60px;
  float: right;
  margin-top: 10px;
}
</style>


