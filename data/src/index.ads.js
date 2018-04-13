module.exports = (req, res) => {
//伪造数据模块
    const mock = require('mockjs');
    var data = mock.mock({
        'lists': [
            {
                'id': 1,
                'img': '/static/images/5a96d76fN2a565453.png',
                'href':'https://daojia.jd.com/activity/reportActivity/index.html?tbactId=27395&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.62804&lat=32.05841&coordType=&djAppVersion=5.0.0&res_unit=1&res_type=act_2&unit_index=3&res_name='
            },
            {
                'id': 2,
                'img': '/static/images/5a976074N4b9b2d0b.png',
                'href':'https://daojia.jd.com/activity/reportActivity/index.html?tbactId=71482&cityId=904&city=%E5%8D%97%E4%BA%AC%E5%B8%82&lng=118.62804&lat=32.05841&coordType=&djAppVersion=5.0.0&res_unit=2&res_type=act_2&unit_index=3&res_name='
            }
        ]
    })
    res.json(data)
}