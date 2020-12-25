var dog = require('./dog');
var cat = require('./cat');

var Dog = new dog('Tom');
var Cat = new cat();
Dog.eat(Cat);
console.log(Dog);
Dog.sayHI();