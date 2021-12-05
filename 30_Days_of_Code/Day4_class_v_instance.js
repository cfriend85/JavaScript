class Person{
    constructor(initialAge){
        if (initialAge < 0) {
            this.age = 0;
            console.log("Age is not valid, setting age to 0.")
        } else{
            this.age = initialAge;
        }
    }

    yearPasses(){
        this.age++
        console.log(`Happy Birthday! You are now ${this.age} years old!`)
    }

    amIOld(){
        if(this.age < 13){
            console.log('You are young.')
        } else if(this.age >= 13 && this.age < 18){
            console.log('You are a teenager.')
        } else{
            console.log('You are old.')
        }


    }
}

let Charles = new Person(36);
Charles.yearPasses();
Charles.amIOld()
