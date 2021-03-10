function Bird(type, color) {
    this.type = type;
    this.color = color;
    this.eggs = 0;

    this.fly = function() {
        console.log(`${this.color} ${this.type} is flying!`)
    }

    this.lay_egg = function() {
        this.eggs ++;
        console.log(`${this.color} ${this.type} is laid an egg!`)
    }
}

Bird.prototype.size = "middle";

const bird = new Bird("黄鹂","yellow")
console.log(bird.__proto__ === Bird.prototype) // true
console.log(Bird === Bird.prototype.constructor) // true

bird.fly()
// yellow 黄鹂 is flying!

bird.lay_egg()
// yellow 黄鹂 is laid an egg!

bird.size = "little"
console.log(bird.size) // little

delete bird.size
console.log(bird.size) // middle


// Let’s create a Parrot and inherit it from Bird:
function Parrot(type, color) {
    // We must call parent constructor and pass this to it 
    Bird.call(this, type, color);
    this.talk = function() {
        console.log(`${this.color} ${this.type} is talking!`)
    }
}

const parrot1 = new Parrot("烦人的", "红色")
parrot1.fly()
// 红色 烦人的 is flying!
parrot1.talk()
// 红色 烦人的 is talking!