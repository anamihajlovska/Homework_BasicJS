let dog = {
    name: "Parker",
    kind: "Labrador",

    
}

dog.speak = function (message){
    console.log(`${this.name} ${this.kind} says: ${message}`);
}

dog.speak("Hey bro!!!");