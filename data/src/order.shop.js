module.exports = (req,res)=>{
	const conn = require('./conn.js');
	const mock = require('mockjs');
	//获取店铺信息
	var data = 'select * from `buyed_shop`;';
	conn.query(data,(err,result)=>{
		if(err == null){
			var datalist = 'select * from `buyed_name`;'
			conn.query(datalist,(error,end)=>{
				if(error == null){
					//处理数据
					result.map(el=>{
						el.comm = end.filter(ele=>{
							return ele.shopId == el.id
						})
						el.time = mock.Random.datetime('yyyy-MM-dd HH:mm:ss');
					})
					res.json({
						error:0,
						data:result,
						errorInfo:null
					})
				}else{
					res.json({
						error:1,
						data:null,
						errorInfo:error
					})
				}
			})
		}else{
			res.json({
				error:2,
				data:null,
				errorInfo:err
			})
		}
	})
}