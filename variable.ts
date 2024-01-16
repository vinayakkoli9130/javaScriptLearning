

class Animal{
    move(distance:number){
console.log(distance+2);

    }
}

class Dog extends Animal{
    bark(){
        console.log("Bho Bho");
        
    }
}
var objDog:any= new Dog();

objDog.move(4);
objDog.bark();

