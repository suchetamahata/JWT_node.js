import { strict } from "assert/strict";

interface Person {
    name : string,
    age ?: number | string
}

const me : Person = {
    name : "Sucheta",
    age: 19
};

function PrintingFunction(param : Person) { 
    console.log(param.name);
    console.log(param.age)
}

const student = {
    name:'xyz',
    clg: "SNU",
    age: 18
}


PrintingFunction(student) // not error because... duck typiong

//type inference

var names = 6
console.log(typeof names) //number //primitive types

const namess = 6
console.log(typeof namess) //6 //type literals

names = 25


//interface with implements

interface Animal {
  eat(food: string) : void
}

class dog implements Animal{
    eat(food: string){
    }
}



interface Admin {
    utype: 'admin',
    math: 1
}
interface Visitor {
    utype: 'visitor',
    math : 0
}

const User : Admin | Visitor ={     // a union type?
    utype :'admin',
    math : 1
}
var User1 : 'admin' | 'viewer'

var all : number | string | '56' | "string literal" | boolean = 8

if( typeof all === 'string' ){}

