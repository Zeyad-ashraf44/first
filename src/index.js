import { Gender } from "./enum/Gender.enum.js";
let studentsNames = ["hamada", "joe"];
console.log(studentsNames);
let UserInformation = {
    userName: "hamada",
    userAge: 22,
    isStuden: true
};
console.log(UserInformation);
/**
 * function sum two numbers
 * @param num1
 * @param num2
 * @returns
 */
function sum(num1, num2) {
    return num1 + num2;
}
sum(5, 3);
function genFun(age) {
    return age;
}
genFun("5");
genFun(5);
let unknown;
const h1Element = document.querySelector("h1");
console.log(h1Element);
h1Element.style.backgroundColor = "green";
const userInfodata = {
    firstName: "mohmed",
    LastName: "jjj",
    gender: 5,
    getFullName() {
        return this.firstName + this.LastName;
    }
};
console.log(Gender.male);
