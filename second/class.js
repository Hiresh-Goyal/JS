const employee = {
    calctax(salary) {
        console.log("The tax on salary is 10%");
        console.log("Tax = ",salary/10);
    }
}

const Hiresh = {
    salary: 100000
}

Hiresh.__proto__ = employee;  //now calctax can be used by Hiresh

class vehicle{
    constructor(brand){
        this.brand = brand;
    }
}

let Creta = new vehicle("Hyundai");
console.log("Creta is of brand",Creta.brand);

//INHERITANCE

class car extends vehicle{
    wheels = 4;
}

class bike extends vehicle{
    constructor(name,brand){
        super(brand);    //Calls the constructor of parent class, can also be used to call func of parent class using super.____ , where ____ is func name.
        this.name = name;
    }
    wheels = 2;
}

let activa = new bike("activa 0g","Honda");
console.log("activa has",activa.wheels,"wheels");
console.log(activa);
