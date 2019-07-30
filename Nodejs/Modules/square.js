// assigning to exports will not modify module, must use module.exports
// 
module.exports = class Square {
	constructor(width) {
		this.width = width;
	}

	area() {
		return this.width ** 2;
	}
};