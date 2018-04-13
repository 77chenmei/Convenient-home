<template>
    <div id = "search">
        <div class = "search-top"> 
            <div class = "cancel">
                <span class = "BtnBox" @click="back">
                    <i class ="cancleBtn"></i>
                </span>
                <div class = "cance">
                    <i class = "iconToSearch"></i>
                    <input type="search" placeholder="搜索附近的商家、商品">
                </div>
                <span class="search-span">搜索</span>
            </div>
        </div>
        <div class = "search-hot">
            <p class = "hot-tittle">热门搜索</p>
            <div class = "hot-words">
                <router-link v-for = "word in hotworrds" :key = "word.id"   :to = "word.href"> 
                    <span @click ="save(word)"> {{word.words}} </span>
                </router-link>
                
            </div>
        </div>
        <div class = "search-history">
            <p class = "hot-tittle"  v-if = "history.length != 0">搜索历史</p>
            <ul class = "histroy-word">
                <li v-for = "his in history" :key = "his.id">
                    <router-link to = "his.href"> {{his.words}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class = "clear-history" v-if = "history.length != 0">清除搜索历史</div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    data(){
        return {
            hotworrds:[],
            history:[],
        }
    },
    created(){
        //获取热门搜索
        $.get(
        this.apiUl + "/search/hot",
        res => {
            this.hotworrds= res.lists;
        },
        "json"
        );
        //搜索历史
        // this.history = Cookies.get();
        // console.log(this.history)
    },
    methods:{
        back(){
            this.$router.go(-1)
        },
        save(word){
            var num = Object.keys(this.history).length;
            Cookies.set('word'+ num ,word)
            // this.history = Cookies.get()
            // console.log(this.history)
            
            
        }
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
    .search-top{
        position: fixed;
        top:0;
        left:0;
        right:0;
        height:44px;
        line-height:44px;
        text-align:center;
        background:#fff;
    }
    .cancel .BtnBox{
        display:inline-block;
        width:34px;
        height:44px;
        position: absolute;
        left:0;
    }
    .cancel .cancleBtn{
        display: inline-block;
        width:12px;
        height:12px;
        border-left:2px solid #848484;
        border-bottom:2px solid #848484;
        transform:rotateZ(45deg);
        margin-left:14px;
        vertical-align:middle;
    }
    .cance{
        position: absolute;
        top:8px;
        left:38px;
        right:70px; 
        height:28px;
        line-height:28px;
        border:1px solid #e6e6e6;
        border-radius:2px;
        padding:0 5px 0 20px;
    }
    .iconToSearch{
        position: absolute;
        left:0;
        top:0;
        width:28px;
        height:28px;
        background:url('/static/images/search_bar_sprites.png') no-repeat;
        background-size:44px auto; 
        background-position: -8px -8px;
    }
    .cance input{
        width:100%;
        height:28px;
        line-height:28px;
        max-width:90%;
        vertical-align:top;
        font-size:14px;
        padding:3px 0;
        outline:none;
        border:none;
    }   
    .search-span{
        position: absolute;
        top:8px;
        right:13px;
        padding:0 10px;
        height:30px;
        line-height:30px;
        background:#e5e5e5;
        border-radius:3px;
        font-size:14px;
        color:#333;
    }
    .search-hot{
        margin-top:44px;
    }
    .hot-tittle{
        font-size:14px;
        padding:8px;
        text-align:left;
        background:url('/static/images/search_bar_sprites.png') no-repeat;
        background-size:44px auto; 
        padding-left:28px;
    }
    .search-hot .hot-tittle{
        background-position: -8px -93px;
    }
    .search-history .hot-tittle{
        background-position: -8px -47px;
    }
    .hot-words{
        background:#fff;
        padding:15px 0 0 10px;
        text-align:left;
    }
    .hot-words a{
        text-decoration:none;
        color:#555;
        display: inline-block;
        width:20%;
        height:25px;
        line-height:25px;
        border:1px solid #e8e8e8;
        border-radius:5px;
        margin-bottom:15px;
        margin-right:10px;
        text-align:center;
        vertical-align:top;
    }
    .histroy-word li{
        list-style:none;
        height:40px;
        line-height:40px;
        background:#fff;
        border-bottom:1px solid #e8e8e8;
    }
    .histroy-word li a{
        display:block;
        padding-left:2px;
        color:#333;
        text-align:left;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .clear-history{
        width:130px;
        height:40px;
        line-height:40px;
        color:#47b34f;
        border:1px solid #47b34f;
        border-radius:4px;
        margin:20px auto;
        background:#fff;
    }
</style>
