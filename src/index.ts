import iUser from "./interfaces/iUser.interface";
import { Gender } from "./enum/Gender.enum.js";
let studentsNames: string[] = ["hamada","joe"];
console.log(studentsNames);
let UserInformation: {} = {
    userName:"hamada",
    userAge:22,
    isStuden:true
};
console.log(UserInformation);


/**
 * function sum two numbers
 * @param num1 
 * @param num2 
 * @returns 
 */
function sum(num1:number,num2:number):number{
    return num1+num2
}
sum(5,3)


function genFun<T>(age:T):T{
    return age;
}
genFun<string>("5");
genFun<number>(5);


let unknown: any ;


const h1Element:HTMLElement = document.querySelector("h1") as HTMLElement
console.log(h1Element);
h1Element.style.backgroundColor = "green";


const userInfodata : iUser = {
    firstName:"mohmed",
    LastName:"jjj",
    gender:5,
    getFullName(){
        return this.firstName + this.LastName
    }
};
console.log(Gender.male);


