function dog(){
    this.stomach = [];
}
dog.prototype.eat = function(){
    this.stomach.push(cat);
}
module.exports = dog;