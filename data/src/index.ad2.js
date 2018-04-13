module.exports = (req, res) => {
//伪造数据模块
    const mock = require('mockjs');
    var data = mock.mock({
        'lists': [
            {
                'id': 1,
                "tittle":'来伊份',
                'word':'满69减30',
                'img':'/static/images/5a8ee076N2d0cdbcf.jpg',
                'href':'https://daojia.jd.com/activity/reportActivity/index.html?tbactId=27395&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.62804&lat=32.05841&coordType=&djAppVersion=5.0.0&res_unit=1&res_type=act_2&unit_index=3&res_name='
            },
            {
                'id': 2,
                "tittle":'健康团圆',
                'word':'68减30',
                'img': '/static/images/5a965c5bN0d1f4f36.png',
                'href':'https://daojia.jd.com/activity/reportActivity/index.html?tbactId=71482&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.62804&lat=32.05841&coordType=&djAppVersion=5.0.0&res_unit=2&res_type=act_2&unit_index=3&res_name='
            }
        ]
    })
    res.json(data)
}