<template>
  <div id ="provice">
        <div class="provice_header">
            <span class = "provice_back provice_icon" @click = "back"></span>
            <span class = "provice_tittle">选择国家或者地区</span>
        </div>
        <div class ="area">
            <div class ="pro_box">
                <section class ="pro-picker">
                    <dl v-for = "(pro,index,n) in provice" :key ="n" :id = "index">
                        <dt>{{index}}</dt>
                        <dd v-for = "(pp,p) in pro" :key = "p">
                            <p v-for ="(pm,m,am) in pp" :key ="'pro' + am" @click ="pick(pm)">
                                <span class ="desc">{{m}}</span>
                                <span class ="number">+{{pm}}</span>
                            </p>
                        </dd>
                    </dl>
            </section>
            </div>
            <div class="navbar">
                <a href="#A">A</a>
                <a href="#B">B</a>
                <a href="#C">C</a>
                <a href="#D">D</a>
                <a href="#E">E</a>
                <a href="#F">F</a>
                <a href="#G">G</a>
                <a href="#H">H</a>
                <a href="#I">I</a>
                <a href="#J">J</a>
                <a href="#K">K</a>
                <a href="#L">L</a>
                <a href="#M">M</a>
                <a href="#N">N</a>
                <a href="#O">O</a>
                <a href="#P">P</a>
                <a href="#Q">Q</a>
                <a href="#R">R</a>
                <a href="#S">S</a>
                <a href="#T">T</a>
                <a href="#U">U</a>
                <a href="#V">V</a>
                <a href="#W">W</a>
                <a href="#X">X</a>
                <a href="#Y">Y</a>
                <a href="#Z">Z</a>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data(){
        return{
            provice:[]
        }
     },
    created(){
        $.get(this.apiUl + '/provice',res=>{
            this.provice = res;
        })
    },
    methods:{
        back(){
            this.$router.go(-1);
        },
        pick(num){
            this.$router.push({
                name:'register',
                params:{
                    area:num
                }
            })
        }
  }
}
</script>

<style>
*{
    margin:0;
    padding:0;
    list-style:none;
    text-decoration:none;
    outline:none;
    border:none;
}
.provice_header{
    width:100%;
    height:45px;
    line-height:45px;
    font-size:17px;
    color:#616161;
    background:#f9f9f9;
    border-bottom:1px solid #bbb;
    text-align:center;
    position: fixed;
    top:0;
    left:0;
    z-index:99;
}
.provice_icon{
    display:inline-block;
    width:22px;
    height:22px;
    background:url('/static/images/iconBg.png') no-repeat;
    background-size:100% auto;
    position: absolute;
}
.provice_back{
    background-position: 0 -64px;
    top:12px;
    left:12px;
}
.area{
    position: relative;
    top:0;
    bottom:0;
    left:0;
    right:0;
    padding-top:50px;
}
.pro_box{
    height:100%;
}
.pro-picker{
    position: relative;
    top:0;
    left: 0;
    bottom: 0;
    background-color: #fff;
    overflow: auto;
    width: 100%;
}
.pro-picker dt {
    background-color: #f5f5f5;
    padding: 0 23px 0 15px;
    line-height:43px;
    color: #999;
    text-align: left;
}
.pro-picker dd {
    line-height:43px;
    border-bottom: 1px solid #dbdbdb;
    margin: 0 23px 0 15px;
    font-size: 18px;
    text-align: left;
}
.area .number {
    float: right;
    padding-right:12px;
    color: #999;
    font-size:13px;
}
.navbar{
    position: fixed;
    top:45px;
    right:0;
    margin-top: 43px;
    right: 0;
    width: 23px;
    background: white;
    font-size: 11px;
    color: #2d90ff;
    
}
.navbar a {
    display: block;
    text-align: center;
    color: #2d90ff;
    margin: 0;
    height: 13px;
    line-height:13px;
}
</style>
