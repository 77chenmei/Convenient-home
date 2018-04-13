module.exports = (req, res) => {
//伪造数据模块
const mock = require('mockjs');
    var data = mock.mock({
        'lists': [
            {
                'id': 1,
                'tittle': '白加黑',
                'href':'#channelPage/channelId:3983/channelName:%5Bobject%20Object%5D/res_unit:1/res_type:ball_10/unit_index:1/res_name:%E8%B6%85%E5%B8%82%E7%94%9F%E9%B2%9C'
            },
            {
                'id': 2,
                'tittle': '盐酸',
                'href':'#channelPage/channelId:3997/channelName:%5Bobject%20Object%5D/res_unit:2/res_type:ball_10/unit_index:1/res_name:%E6%96%B0%E9%B2%9C%E6%B0%B4%E6%9E%9C'
            },
            {
                'id': 3,
                'tittle': '婴宝',
                'href':'#channelPage/channelId:8/channelName:%5Bobject%20Object%5D/res_unit:3/res_type:ball_10/unit_index:1/res_name:%E7%BE%8E%E9%A3%9F%E7%83%98%E7%84%99'
            },
            {
                'id': 4,
                'tittle': '甘草片',
                'href':'#channelPage/channelId:1118/channelName:%5Bobject%20Object%5D/res_unit:4/res_type:ball_10/unit_index:1/res_name:%E9%B2%9C%E8%8A%B1%E8%9B%8B%E7%B3%95'
            },
            {
                'id': 5,
                'tittle': '满天星',
                'href':'#channelPage/channelId:7/channelName:%5Bobject%20Object%5D/res_unit:5/res_type:ball_10/unit_index:1/res_name:%E5%8C%BB%E8%8D%AF%E5%81%A5%E5%BA%B7'
            },
            {
                'id': 6,
                'tittle': '面包',
                'href':'https://daojia.jd.com/html/index.html?h5hash=vip&channel=vip_indexball&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.8748&lat=31.33617&coordType=&djAppVersion=5.0.0&res_unit=6&res_type=ball_10&unit_index=1&res_name=VIP%E4%BC%9A%E5%91%98'
            },
        ]
    })
    res.json(data)
}