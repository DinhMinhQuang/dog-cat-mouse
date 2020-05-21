function mice(name){
    this.name = name; 
    this.dead = false;
}

Mice.prototype.die = function (){
    this.dead = true; 
};

module.exports = Mice; 