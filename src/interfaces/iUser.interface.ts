
export default interface iUser {
    firstName:string;
    LastName:string;
    gender?:number;
    getFullName:()=> string;
}