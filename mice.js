function mice(name){
    this.name = name; 
    this.dead = false;
}

mice.prototype.die = function (){
    this.dead = true; 
};

module.exports = mice; 