const modifyArray = (nums) => {
    return nums.map(val => val = (val % 2 === 0) ? val * 2 : val * 3)
}

class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}

Rectangle.prototype.area = function () {
    return this.w * this.h;
}
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength)
    }
}