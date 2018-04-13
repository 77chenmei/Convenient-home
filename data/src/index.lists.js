module.exports = (req, res) => {
//伪造数据模块
const mock = require('mockjs');
    var data = mock.mock({
        'lists': [
            {
                'id': 1,
                'img': 'static/images/list1.png',
                'tittle': '超市生鲜',
                'href':'#channelPage/channelId:3983/channelName:%5Bobject%20Object%5D/res_unit:1/res_type:ball_10/unit_index:1/res_name:%E8%B6%85%E5%B8%82%E7%94%9F%E9%B2%9C'
            },
            {
                'id': 2,
                'img': 'static/images/list2.png',
                'tittle': '新鲜水果',
                'href':'#channelPage/channelId:3997/channelName:%5Bobject%20Object%5D/res_unit:2/res_type:ball_10/unit_index:1/res_name:%E6%96%B0%E9%B2%9C%E6%B0%B4%E6%9E%9C'
            },
            {
                'id': 3,
                'img': 'static/images/list3.png',
                'tittle': '美食烘焙',
                'href':'#channelPage/channelId:8/channelName:%5Bobject%20Object%5D/res_unit:3/res_type:ball_10/unit_index:1/res_name:%E7%BE%8E%E9%A3%9F%E7%83%98%E7%84%99'
            },
            {
                'id': 4,
                'img': 'static/images/list4.png',
                'tittle': '鲜花蛋糕',
                'href':'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:1/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
            },
            {
                'id': 5,
                'img': 'static/images/list5.png',
                'tittle': '医药健康',
                'href':'#channelPage/channelId:7/channelName:%5Bobject%20Object%5D/res_unit:5/res_type:ball_10/unit_index:1/res_name:%E5%8C%BB%E8%8D%AF%E5%81%A5%E5%BA%B7'
            },
            {
                'id': 6,
                'img': 'static/images/list6.png',
                'tittle': 'VIP会员',
                'href':'https://daojia.jd.com/html/index.html?h5hash=vip&channel=vip_indexball&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.8748&lat=31.33617&coordType=&djAppVersion=5.0.0&res_unit=6&res_type=ball_10&unit_index=1&res_name=VIP%E4%BC%9A%E5%91%98'
            },
            {
                'id': 7,
                'img': 'static/images/list7.png',
                'tittle': '新人专享',
                'href':'https://daojia.jd.com/activity/specialActivity/newPeopleActivity.html?channel_id=h5&membertype=1&channel=xrzq_indexball&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.8748&lat=31.33617&coordType=&djAppVersion=5.0.0&res_unit=7&res_type=ball_10&unit_index=1&res_name=%E6%96%B0%E4%BA%BA%E4%B8%93%E4%BA%AB'
            },
            {
                'id': 8,
                'img': 'static/images/list8.png',
                'tittle': '帮助中心',
                'href':'https://daojia.jd.com/activity/invite/index.html?channel=fxyl_indexball&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.8748&lat=31.33617&coordType=&djAppVersion=5.0.0&res_unit=9&res_type=ball_10&unit_index=1&res_name=%E5%88%86%E4%BA%AB%E6%9C%89%E7%A4%BC'
            },
            {
                'id': 9,
                'img': 'static/images/list9.png',
                'tittle': '分享有礼',
                'href':'https://daojia.jd.com/activity/invite/index.html?channel=fxyl_indexball&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.8748&lat=31.33617&coordType=&djAppVersion=5.0.0&res_unit=9&res_type=ball_10&unit_index=1&res_name=%E5%88%86%E4%BA%AB%E6%9C%89%E7%A4%BC'
            },
            {
                'id': 10,
                'img': 'static/images/list10.png',
                'tittle': '签到',
                'href':'https://daojia.jd.com/activity/market/signIn/index.html?channel=qiandao_indexball&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.8748&lat=31.33617&coordType=&djAppVersion=5.0.0&res_unit=10&res_type=ball_10&unit_index=1&res_name=%E7%AD%BE%E5%88%B0'
            }
        ]
    })
    res.json(data)
}