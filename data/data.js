const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//伪造数据模块
const mock = require('mockjs');
//获取首页头部导航信息
app.get('/index/header',require('./src/index.header'))
//获取首页导航列表数据
app.get('/index',require('./src/index.lists'))
//获取首页轮播
app.get('/index/banner',require('./src/index.banner'))
//获取首页ad部分的数据
app.get('/index/ads',require('./src/index.ads'))
//获取首页ad2部分的数据
app.get('/index/ad2',require('./src/index.ad2'))
//获取首页秒杀部分的数据
app.get('/index/ms',require('./src/index.ms'))
//获取首页轮播
app.get('/index/banner2',require('./src/index.banner2'))
//获取附近店铺
app.get('/index/shop',require('./src/index.shop'))

//获取热门搜索
app.get('/search/hot',require('./src/search.hot'))
//分类部分 =================== 使用数据库
app.get('/classify/lists',require('./src/classify.lists.js'))

//购物车信息=================== 数据库中获取
app.get('/shop/tittle',require('./src/shop.tittle.js'))
//获取商品的商品展示信息==================数据库
app.get('/store/getStore',require('./src/store.getStore.js'))

//订单部分
//获取购买商品的店铺id
app.get('/order/shop',require('./src/order.shop.js'))

//用户登录========================================
//用户账户登录的验证 根据用户名和密码从数据库中获取数据，如果获取到则表示给用户存在，否则用户不存在
app.post('/login/user',require('./src/login.user.js'))
app.post('/login/phone',require('./src/login.phone.js'))

//获取省份
app.get('/provice',require('./src/register.provice.js'));

//判断用户是否注册
app.get('/register/getuser',require('./src/register.getuser.js'))
//用户注册信息
app.get('/register/user',require('./src/register.user.js'))
app.listen('80');