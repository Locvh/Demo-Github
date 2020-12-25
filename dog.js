const chalk = require('chalk');
function dog(name){
     this.stomach =[];
    this.name=name;
}

dog.prototype.eat= function(cat){
    this.stomach.push(cat);
}

dog.prototype.sayHI= function(){
    console.log('Hi! i am dog. My name is ' + chalk.blue(this.name));
}

module.exports =dog;