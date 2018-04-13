module.exports = (req,res)=>{
	const conn = require('./conn');
	var data = 'select * from `store` where `pid` = "' + req.query.pid + '" and `storeId` = "' + req.query.storeId + '";';
	conn.query(data,(err,result)=>{
		if(err == null){
			//将数据中获取到的折扣活动字符串的转换为数组
			result.map(el=>{
				console.log(el.discoun)
				if(el.discoun != null){
					console.log(el.discoun)
					if(el.discoun.indexOf('-') > 0){
						el.newInt = el.discoun.split('-');
					}else{
						el.newInt = [];
						el.newInt.push(el.discoun);
					}
				}
			});
			res.json(result)
		}else{
			res.json(err)
		}
		
	})
}