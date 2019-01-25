var animalPopulation = 0;


function run() {
    var tigger = new Tiger("Tigger");
    tigger.eat("meat");


    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");
    pooh.sleep();

    var rarity = new Unicorn("Rarity");
    rarity.eat("marshmallows");
    rarity.sleep();

    var gemma = new Giraffe("Gemma");
    gemma.eat("meat");
    gemma.eat("leaves");
    gemma.sleep();

    var stinger = new Bee("Stinger");
    stinger.eat("ice cream");
    stinger.eat("pollen");
    stinger.sleep();

    var zeobot = new Zookeeper("Zeobot");
    var animals = [tigger, pooh, rarity, gemma, stinger];
    zeobot.feedAnimals(animals, 'burritos');

    console.log(Animal.getPopulation());
}


class Zookeeper {
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals.");
        for(var i=0; i<animals.length; i++){
            animals[i].eat(food);
        }
    }

}


class Animal {
    constructor(name, favoriteFood) {
        this.favoriteFood = favoriteFood;
        this.name = name;
        animalPopulation++;
    }

    static getPopulation() {
        return animalPopulation;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name + " eats " + food);
        if (this.favoriteFood == food) {
            console.log("YUM! " + this.name + " wants more " + food);
        }
    }
}


class Tiger extends Animal {
    constructor(name){
        super(name, "meat");
    }


}

class Bear extends Animal {
    constructor(name){
        super(name, "fish");

    }
    sleep(){
        console.log(this.name + " hibernates for 4 months");
    }
}


class Bee extends Animal {
    constructor(name){
        super(name, "pollen");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if (this.favoriteFood == food) {
            console.log("YUM! " + this.name + " wants more " + food);
        }else{
            console.log("YUCK!! " + this.name + " will not eat " + food);
        }
    }
    sleep(){
        console.log(this.name + " never sleeps.")
    }
}

class Giraffe extends Animal {
    constructor(name){
        super(name, "leaves");
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        if (this.favoriteFood == food) {
            console.log("YUM! " + this.name + " wants more " + food);
        }else{
            console.log("YUCK!! " + this.name + " will not eat " + food);
        }
    }
}

class Unicorn extends Animal {
    constructor(name){
        super(name, "marshmallows");
    }
    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}






/*class Polygon extends Shape {

    constructor(height, width) {
        super('Polygon');
        this.height = height;
        this.width = width;
    }

    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).');
    }

}
*/






//function sleep(name){
//    console.log(name + " sleeps for 8 hours");
//}



//function eat(name,food){
//    console.log(name + " eats " + food);
//    if(favoriteFood == food){
//        console.log("YUM! " + name + " wants more " + food);
//    }
//}

