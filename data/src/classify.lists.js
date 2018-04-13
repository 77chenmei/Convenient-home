module.exports = function(req,res){
	const conn = require('./conn');
	var data = 'select `id`,`tittle`,`pid`,`image` from `classify`;';
	conn.query(data,function(err,result) {
		if(err == null){
			res.json({
				error:0,
				message:'成功',
				data:result,
				errorInfo: null
			})
		}else{
	        res.json({
	            error: 1,
	            message: '数据查找失败',
	            data: null,
	            errorInfo: err
	        })
		}
	})
}