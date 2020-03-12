/*
class Shipping {
	constructor() {
			this.company = {};
	}

	setStrategy(company) {
			this.company = company;
	}

	calculate(packages) {
			return this.company.calculate(packages);
	}
}

// 下面是不同快递公司针对包裹的计价策略 如果有新的快递公司可供选择在下面增加该公司的包裹计价策略即可
// 1. 以function的形式定义策略，使用时需要实例化
const UPS = function() {
	this.calculate = function(package) {
			// calculations...
			return "$45.95";
	}
};

const USPS = function() {
	this.calculate = function(package) {
			// calculations...
			return "$39.40";
	}
};

const Fedex = function() {
	this.calculate = function(package) {
			// calculations...
			return "$43.20";
	}
};

let package = { from: "76712", to: "10012", weigth: "lkg" };

// the 3 strategies
var ups = new UPS();
var usps = new USPS();
var fedex = new Fedex();

var shipping = new Shipping();
shipping.setStrategy(ups);
console.log(shipping.calculate(package))

shipping.setStrategy(usps);
console.log(shipping.calculate(package))

shipping.setStrategy(fedex);
console.log(shipping.calculate(package))

// $45.95
// $39.40
// $43.20
// 再增加排序算法，可以选取运费最少的快递公司发货
*/


class Shipping {
	constructor() {
			this.company = {};
	}

	setStrategy(company) {
			this.company = company;
	}

	calculate(packages) {
			return this.company(packages);
	}
}

// 2. 以Object形式定义策略,在这里专注于运费算法,有新的快递公司加入时在这里添加。使用时遍历属性
const companyStr = {
	ups: function(package) {
		// calculations...
		return "45.95";
	},
	usps: function(package) {
		// calculations...
		return "39.40";
	},
	Fedex: function(package) {
		// calculations...
		return "43.20";
	}
}

let package = { from: "76712", to: "10012", weigth: "lkg" };

function BestOption(pack) {
	let shipping = new Shipping();
	let temp = []
	for(let key in companyStr) {
		shipping.setStrategy(companyStr[key])
		// console.log(shipping)
		console.log(`${key} fee:`, shipping.calculate(package))
		temp.push({key, fee: shipping.calculate(package)})
	}
	function sortNumber(a,b)
	{
		return a.fee - b.fee
	}

	temp.sort(sortNumber)
	return temp[0]
}
console.log(BestOption())
// { key: 'usps', fee: '39.40' }


/**
 * 计算奖金的策略模式
 */
var calculateBonus = function(performanceLevel, salary){
	if ( performanceLevel === 'S' ){
			return salary * 4;
	}
	if ( performanceLevel === 'A' ){
			return salary * 3;
	}
	if ( performanceLevel === 'B' ){
			return salary * 2;
	}
};

calculateBonus( 'B', 20000 ); // 输出：40000
calculateBonus( 'S', 6000 ); // 输出：24000