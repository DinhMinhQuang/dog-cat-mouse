var Dog = require('./dog');
var Cat = require('./cat');
var Mouse = require('./mice');

var dog = new Dog('Tom');
var cat = new Cat();
var mouse = new Mouse('Mikey');


try {
    cat.eat(dog);
} catch (error) {
    console.log('Error while Cat Eating a Dog');
}

console.log(cat);