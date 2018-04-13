module.exports = (req, res) => {
//伪造数据模块
    const mock = require('mockjs');
    var data =mock.mock({
        'res': [
            {
                'id':1,
                'guid':'@guid',
                'img':'shop1.png',
                'tittle':'来伊份-文昌路店',
                'postType':'达达专送',
                'postMin':'60分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离239m',
                'word2':'基础运费4元',
                'cards':['满69减30'],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':2,
                'guid':'@guid',
                'img':'shop2.jpg',
                'tittle':'鲜家-浦口店',
                'postType':'达达专送',
                'postMin':'66分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'55元起送，距离319m',
                'word2':'基础运费4元',
                'cards':['满35减15','满39减15','满30减12','满30减10','满30减10'],
                'give':'',
                'first':'满39减2，新人专享特惠商品',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-2':true,
                'fite|1-2':true,
                'newshop|1-6':true,
            },
            {
                'id':3,
                'guid':'@guid',
                'img':'shop3.jpg',
                'tittle':'幸福西饼蛋糕-南京店',
                'postType':'商家自送',
                'postMin':'5小时',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离19.38km',
                'word2':'免基础运费',
                'cards':['满599减100','满299减50','满199减30','满29减10'],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':4,
                'guid':'@guid',
                'img':'shop4.jpg',
                'tittle':'马鞍山同城鲜花蛋糕速递',
                'close':'明日00:00起送',
                'postType':'商家自送',
                'postMin':'5小时',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离44.43km',
                'word2':'免基础运费',
                'cards':[],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'满99元免运费',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':5,
                'guid':'@guid',
                'img':'shop5.png',
                'tittle':'南京罗曼蒂鲜花-总店',
                'postType':'商家自送',
                'postMin':'107分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离12.93km',
                'word2':'免基础运费',
                'cards':['满599减100','满299减50','满199减30','满29减10'],
                'give':'',
                'first':'',
                'mult':['满减促销满99减30','满188减50'],
                'fre':'免运费',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':6,
                'guid':'@guid',
                'img':'shop6.jpg',
                'tittle':'希里拉蛋糕鲜花南京店',
                'postType':'商家自送',
                'postMin':'120分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离15.04km',
                'word2':'基础运费6元',
                'cards':['满388减20','满338减15','满238减8'],
                'give':'',
                'first':'',
                'mult':['全场满198减5','满288减10','满388减15'],
                'fre':'满198元减6元运费',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':7,
                'guid':'@guid',
                'img':'shop7.jpg',
                'tittle':'小花鲜花-南京',
                'postType':'商家自送',
                'postMin':'3小时',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离14.87km',   
                'word2':'免基础运费',
                'cards':[],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
            },
            {
                'id':8,
                'guid':'@guid',
                'img':'shop8.png',
                'tittle':'沃尔玛-新街口店',
                'postType':'达达专送',
                'postMin':'56分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离835m',
                'word2':'基础运费4元',
                'cards':['8.8折劵','满200减20','满40减12','满39减10','满39减8'],
                'give':'',
                'first':'',
                'mult':['部分商品满198减40','口腔护理系列满30减5','思念汤圆满35减8','思念水饺满35减8','啤酒精选满50减10','休闲饼干满50减10','湾仔汤圆水饺满35减5','蒙牛酸奶爆款满25减5','巧克力部分满50减10'],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':9,
                'guid':'@guid',
                'img':'shop9.jpg',
                'tittle':'优选极速达-珠江路店',
                'postType':'达达专送',
                'postMin':'51分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离1.41km',
                'word2':'基础运费4元',
                'cards':['满69减20','满39减15','满49减15','满30减15'],
                'give':'购买指定商品，可得赠品（赠完为止)',
                'first':'立减2',
                'mult':['思念汤圆满35减8'],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,            },
            {
                'id':10,
                'guid':'@guid',
                'img':'shop10.png',
                'tittle':'永辉超市-茂业天地店',
                'postType':'达达专送',
                'postMin':'71分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离2.16km',
                'word2':'基础运费4元',
                'cards':['8.8折劵','7.0折劵','满200减20','满39减10','满39减8'],
                'give':'',
                'first':'',
                'mult':['美的满200减30','雕牌满38减8','安井满30减5','绿帮拉拉裤满200减50'],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,            },
            {
                'id':11,
                'guid':'@guid',
                'img':'shop11.jpg',
                'tittle':'百果园-铜井巷店',
                'postType':'达达专送',
                'postMin':'60分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离239m',
                'word2':'基础运费4元',
                'cards':['满69减30'],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':12,
                'guid':'@guid',
                'img':'shop12.jpg',
                'tittle':'绿地G-Super凯瑟琳店',
                'postType':'达达专送',
                'postMin':'66分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'55元起送，距离319m',
                'word2':'基础运费4元',
                'cards':['满35减15','满39减15','满30减12','满30减10','满30减10'],
                'give':'',
                'first':'满39减2，新人专享特惠商品',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':13,
                'guid':'@guid',
                'img':'shop13.png',
                'tittle':'南京鲜丰水果-延龄巷店',
                'postType':'商家自送',
                'postMin':'5小时',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离19.38km',
                'word2':'免基础运费',
                'cards':['满599减100','满299减50','满199减30','满29减10'],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':14,
                'guid':'@guid',
                'img':'shop14.png',
                'tittle':'益丰-珠江路二店',
                'postType':'达达专送',
                'postMin':'66分钟',
                'close':'明日00:00起送',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离44.43km',
                'word2':'免基础运费',
                'cards':[],
                'give':'',
                'first':'',
                'mult':'',
                'fre':'满99元免运费',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':15,
                'guid':'@guid',
                'img':'shop15.jpg',
                'tittle':'先声再康-文昌巷',
                'postType':'商家自送',
                'postMin':'107分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离12.93km',
                'word2':'免基础运费',
                'cards':['满699减50','满498减30','满99减30','满298减20','满188减8'],
                'give':'',
                'first':'',
                'mult':['满减促销满99减30','满188减50'],
                'fre':'免运费',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':16,
                'guid':'@guid',
                'img':'shop16.jpg',
                'tittle':'妙生鲜-建邺路店',
                'postType':'商家自送',
                'postMin':'5小时',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离15.04km',
                'word2':'基础运费6元',
                'cards':['满388减20','满338减15','满238减8'],
                'give':'',
                'first':'',
                'mult':['全场满198减5','满288减10','满388减15'],
                'fre':'满198元减6元运费',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':17,
                'guid':'@guid',
                'img':'shop17.jpg',
                'tittle':'萝卜青菜-精品有机蔬菜店',
                'postType':'商家自送',
                'postMin':'5小时',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离14.87km',
                'word2':'免基础运费',
                'cards':[],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':18,
                'guid':'@guid',
                'img':'shop18.jpg',
                'tittle':'五色蔬果南京-建邺路市场',
                'postType':'达达专送',
                'postMin':'56分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离835m',
                'word2':'基础运费4元',
                'cards':['8.8折劵','满200减20','满40减12','满39减10','满39减8'],
                'give':'',
                'first':'',
                'mult':['部分商品满198减40','口腔护理系列满30减5','巧克力部分满50减10'],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':19,
                'guid':'@guid',
                'img':'shop19.jpg',
                'tittle':'农鲜生-田园果蔬旗舰店',
                'postType':'达达专送',
                'postMin':'51分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离1.41km',
                'word2':'基础运费4元',
                'cards':['满69减20','满39减15','满49减15','满30减15'],
                'give':'购买指定商品，可得赠品（赠完为止)',
                'first':'立减2',
                'mult':['思念汤圆满35减8'],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,            
            },
            {
                'id':20,
                'guid':'@guid',
                'img':'shop20.jpg',
                'tittle':'紫燕百味鸡-太平商场店',
                'postType':'达达专送',
                'postMin':'40分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离2.16km',
                'word2':'基础运费4元',
                'cards':['满69减20','满39减15','满49减15','满30减15'],
                'give':'购买指定商品，可得赠品（赠完为止)',
                'first':'立减2',
                'mult':['思念汤圆满35减8'],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,            
            },
            {
                'id':21,
                'guid':'@guid',
                'img':'shop21.jpg',
                'tittle':'一鸣真鲜奶吧-侯家奶吧',
                'postType':'达达专送',
                'postMin':'60分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离239m',
                'word2':'基础运费4元',
                'cards':['满69减30'],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':22,
                'guid':'@guid',
                'img':'shop22.png',
                'tittle':'零食工坊-三条巷店',
                'postType':'达达专送',
                'postMin':'66分钟',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'55元起送，距离319m',
                'word2':'基础运费4元',
                'cards':['满35减15','满39减15','满30减12','满30减10','满30减10'],
                'give':'',
                'first':'满39减2，新人专享特惠商品',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':23,
                'guid':'@guid',
                'img':'shop23.jpg',
                'tittle':'苏皖草鸡蛋销售部-新街口店',
                'postType':'商家自送',
                'postMin':'5小时',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离19.38km',
                'word2':'免基础运费',
                'cards':['满599减100','满299减50','满199减30','满29减10'],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
            {
                'id':24,
                'guid':'@guid',
                'img':'shop24.jpg',
                'tittle':'四季鲜果蔬-后宰门会员店',
                'postType':'达达专送',
                'postMin':'66分钟',
                'close':'明日00:00起送',
                'star|0-4.1':1,
                'bill|1-4':'0',
                'words':'0元起送，距离44.43km',
                'word2':'免基础运费',
                'cards':[],
                'give':'',
                'first':'',
                'mult':[],
                'fre':'满99元免运费',
                'free|1-2':true,
                'seven|1-3':true,
                'fite|1-4':true,
                'newshop|1-8':true,
            },
        ]
    }) 
	var num = req.query.params,
		min = num * 8,
		arr = [],
        list = data.res,
        index = req.query.id;
    if(index){
        //d对取出的数据处理格式
        var dataList = list[index-1],
            newCard = [];
        if(dataList.cards.length != 0){
            dataList.cards.forEach(el => {
                var obj = {},
                    index = el.indexOf('减'),
                    index2 = el.indexOf('折');
                if(index < 0 && index2 >0){
                    obj = {
                        a:el.substr(0,index2),
                        b:' 满29~40元享折扣 ',
                    }
                }else{
                    obj = {
                        a:el.substr(index+1),
                        b:el.substr(0,index)
                    }
                }
                newCard.push(obj);
            });
            dataList.newCard = newCard;
        }
       res.json(dataList)
    }else{
        for(var i = 0;i<8;i++){
            if(list[min+i] == null){
                res.json(arr)
                return
                break;
            }else{
                //对每个加入的数据进行格式的修改
                var dataList = list[min+i],
                    newCard = [];
                if(dataList.cards.length != 0){
                    dataList.cards.forEach(el => {
                        var obj = {},
                            index = el.indexOf('减'),
                            index2 = el.indexOf('折');
                        if(index < 0 && index2 >0){
                            obj = {
                                a:el.substr(0,index2),
                                b:' 满29~40元享折扣 ',
                            }
                        }else{
                            obj = {
                                a:el.substr(index+1),
                                b:el.substr(0,index)
                            }
                        }
                        newCard.push(obj);
                    });
                    dataList.newCard = newCard;
                }
                arr.push(dataList)
            }
        } 
        console.log(arr) 
        res.json(arr)
    }
	
}