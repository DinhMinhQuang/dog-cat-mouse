
var chalk = require('chalk')
function dog(name){
    this.name = name;
    this.stomach = [];
}
dog.prototype.eat = function(){
    this.stomach.push(cat);
}
dog.prototype.sayHi = function(){
    console.log('Yo Im A Dog, My name is ' +chalk.blue(this.name));
}
module.exports = dog;