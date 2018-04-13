<template>
  <div class = "openApp">
      <div class = "openApp1">
            <router-link to = ''></router-link>
            <button @click = "close"></button>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data(){
      return{}
  },
  methods:{
      close(){
          $('.openApp').css('display','none');
      }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration:none;
}
    .openApp{
        width:100%;
        height: 82px;
        position: fixed;
        bottom:44px;
        left:0;
        font-size:13px;
        background:url('/static/images/download_0808.png') no-repeat center center;
        background-size:100% 80%;
        z-index:99;
    }
    .openApp1 a{
        display: inline-block;
        width:70px;
        height:60px;
        position: absolute;
        top:0;
        right:20px;    
    }
    .openApp1 button{
        width:20px;
        height:30px;
        position: absolute;
        top:0;
        right:0;
        background:transparent;
        border:none;
        outline:none;
    }
</style>
