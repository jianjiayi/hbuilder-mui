var category = [
	{
		'text':'主粮',
		'value':'11000',
		'twoClassify':[]
	},{
		'text':'杂粮',
		'value':'12000',
		'twoClassify':[]
	},{
		'text':'干果',
		'value':'13000',
		'twoClassify':[]
	},{
		'text':'水果',
		'value':'14000',
		'twoClassify':[]
	},{
		'text':'蔬菜',
		'value':'15000',
		'twoClassify':[]
	},{
		'text':'休闲食品',
		'value':'16000',
		'twoClassify':[]
	},{
		'text':'保健产品',
		'value':'17000',
		'twoClassify':[]
	},{
		'text':'茶\咖啡\饮料',
		'value':'18000',
		'twoClassify':[]
	},{
		'text':'特色小吃',
		'value':'19000',
		'twoClassify':[]
	},{
		'text':'肉类\蛋类',
		'value':'20000',
		'twoClassify':[]
	},{
		'text':'海味',
		'value':'21000',
		'twoClassify':[]
	},{
		'text':'山珍',
		'value':'22000',
		'twoClassify':[]
	},{
		'text':'调味品',
		'value':'23000',
		'twoClassify':[]
	},{
		'text':'文化用品\礼品\纪念品',
		'value':'24000',
		'twoClassify':[]
	},{
		'text':'美食',
		'value':'25000',
		'twoClassify':[]
	},{
		'text':'养生专品',
		'value':'26000',
		'twoClassify':[]
	},{
		'text':'其他',
		'value':'27000',
		'twoClassify':[]
	}
];

var spec = [
	{
		'text':'KG',
		'value':'10000'
	},
	{
		'text':'g',
		'value':'20000'
	},
	{
		'text':'斤',
		'value':'30000'
	}
];

var unit = [
	{
		'text':'桶',
		'value':'10000'
	},
	{
		'text':'袋',
		'value':'20000'
	},
	{
		'text':'盒',
		'value':'30000'
	},
	{
		'text':'包',
		'value':'40000'
	},
	{
		'text':'箱',
		'value':'50000'
	}
];

var conditionPostage=[
	{
		'text':'根据件数',
		'value':'1'
	},
	{
		'text':'根据钱数',
		'value':'2'
	},
	{
		'text':'件数和地域限制',
		'value':'3'
	},
	{
		'text':'钱数和地域限制',
		'value':'4'
	}
];
//“2014-05-08 00:22:11 ”转换成时间戳
function get_unix_time(dateStr){
    var newstr = dateStr.replace(/-/g,'/'); 
    var date =  new Date(newstr); 
    var time_str = date.getTime().toString();
    return time_str.substr(0, 10);
}
