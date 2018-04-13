module.exports = (req, res) => {
//伪造数据模块
    const mock = require('mockjs');
    var data = mock.mock({
        'lists': [
            {
                'id': 1,
                "tittle":'鲜家-浦口店',
                "price":'4.99',
                'sale':'1',
                'img':'/static/images/ms1.jpg',
                'href':''
            },
            {
                'id': 2,
                "tittle":'鲜家-浦口店',
                "price":'9.99',
                'sale':'16.99',
                'img':'/static/images/ms2.jpg',
                'href':''
            },
            {
                'id': 3,
                "tittle":'萝卜青菜-凡星菜市场',
                "price":'4.86',
                'sale':'2.9',
                'img':'/static/images/ms3.jpg',
                'href':''
            },
            {
                'id': 4,
                "tittle":'鲜家-浦口店',
                "price":'6.5',
                'sale':'4.5',
                'img':'/static/images/ms4.jpg',
                'href':''
            },
            {
                'id': 5,
                "tittle":'萝卜青菜-凡星菜市场',
                "price":'7.59',
                'sale':'1',
                'img':'/static/images/ms5.jpg',
                'href':''
            },
            {
                'id': 6,
                "tittle":'鲜家-浦口店',
                "price":'7.5',
                'sale':'2.99',
                'img':'/static/images/ms6.jpg',
                'href':''
            },
            {
                'id': 7,
                "tittle":'幸福西饼蛋糕-南京店',
                "price":'178',
                'sale':'109',
                'img':'/static/images/ms7.jpg',
                'href':''
            },
            {
                'id': 8,
                "tittle":'麦诺蛋糕鲜花-南京浦口店',
                "price":'178',
                'sale':'142',
                'img':'/static/images/ms8.jpg',
                'href':''
            },
            {
                'id': 9,
                "tittle":'幸福西饼蛋糕-南京店',
                "price":'168',
                'sale':'79',
                'img':'/static/images/ms9.jpg',
                'href':''
            },
            {
                'id': 10,
                "tittle":'萝卜青菜-凡星菜市场',
                "price":'9.81',
                'sale':'7.5',
                'img':'/static/images/ms10.jpg',
                'href':''
            },
             {
                'id': 11,
                "tittle":'幸福西饼蛋糕-南京店',
                "price":'178',
                'sale':'109',
                'img':'/static/images/ms11.jpg',
                'href':''
            },
            {
                'id': 12,
                "tittle":'鲜家-浦口店',
                "price":'4',
                'sale':'1',
                'img':'/static/images/ms12.jpg',
                'href':''
            },
            {
                'id': 13,
                "tittle":'鲜家-浦口店',
                "price":'5.5',
                'sale':'3.8',
                'img':'/static/images/ms13.jpg',
                'href':''
            },
             {
                'id': 14,
                "tittle":'萝卜青菜-凡星菜市场',
                "price":'1.98',
                'sale':'1',
                'img':'/static/images/ms14.jpg',
                'href':''
            },
            {
                'id': 15,
                "tittle":'麦诺蛋糕鲜花-南京浦口店',
                "price":'188',
                'sale':'150',
                'img':'/static/images/ms15.jpg',
                'href':''
            },
            {
                'id': 16,
                "tittle":'萝卜青菜-凡星菜市场',
                "price":'6.89',
                'sale':'3.9',
                'img':'/static/images/ms16.jpg',
                'href':''
            },
            {
                'id': 17,
                "tittle":'鲜家-浦口店',
                "price":'4.99',
                'sale':'2.8',
                'img':'/static/images/ms18.jpg',
                'href':''
            },
            {
                'id': 18,
                "tittle":'鲜家-浦口店',
                "price":'12',
                'sale':'7.8',
                'img':'/static/images/ms18.jpg',
                'href':''
            },
            {
                'id': 19,
                "tittle":'萝卜青菜-凡星菜市场',
                "price":'1.98',
                'sale':'1',
                'img':'/static/images/ms19.jpg',
                'href':''
            },
            {
                'id': 20,
                "tittle":'鲜家-浦口店',
                "price":'3.9',
                'sale':'2.99',
                'img':'/static/images/ms20.jpg',
                'href':''
            }
        ]
    })
    res.json(data)
}