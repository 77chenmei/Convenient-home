module.exports = (req,res)=>{
	const conn = require('./conn.js');
	var data = 'select * from `storetitt`;';
	conn.query(data,function(err,result) {
		//数据处理
		var list = result.filter(function(el){
            var newdata = result.filter((ele)=>{
                return ele.pid == el.id;
            })
            if(newdata.length>0){
                el.items = newdata;
            }
            if(el.tittle.indexOf('优惠')> 0 ||
               el.tittle.indexOf('促销') >0 ||
               el.tittle.indexOf('折') >0||
               el.tittle.indexOf('包价') >0){
                   el.label = true;
            }
            return el.pid == 0;
        });
		if(err == null){
			res.json({
				error:0,
				message:'成功',
				data:list,
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