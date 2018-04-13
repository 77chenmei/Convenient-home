module.exports = (req, res) => {
//伪造数据模块
    const mock = require('mockjs');
    var data = mock.mock({
        'lists': [
            {
                'id': 1,
                'img': '/static/images/ban1.jpg',
                'href':'https://hbh.xici.net/19th/jdbanner?cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.62804&lat=32.05841&coordType=&djAppVersion=5.0.0&res_unit=4&res_type=banner_4&unit_index=3&res_name='
            },
            {
                'id': 2,
                'img': '/static/images/ban2.png',
                'href':'https://daojia.jd.com/activity/reportActivity/index.html?tbactId=36629&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.62804&lat=32.05841&coordType=&djAppVersion=5.0.0&res_unit=1&res_type=banner_4&unit_index=3&res_name='
            },
            {
                'id': 3,
                'img': '/static/images/ban3.png',
                'href':'https://daojia.jd.com/activity/reportActivity/index.html?tbactId=72437&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.62804&lat=32.05841&coordType=&djAppVersion=5.0.0&res_unit=3&res_type=banner_4&unit_index=3&res_name='
            }
        ]
    })
    res.json(data)
}