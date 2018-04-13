module.exports = (req, res) => {
//伪造数据模块
    const mock = require('mockjs');
    var data = mock.mock({
        'lists|12-20': [
	        {
				'id|+1':1,
				'words':'@ctitle(2)',
				'href':'@word(3,5)'
	        }
        ]
    })
    res.json(data)
}