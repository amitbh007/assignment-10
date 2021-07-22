export class User{
    firstName : string;
    middleName : string;
    lastName:string;
    email:string;
    phone:string;
    address:string;
    roleKey:number
}

export enum Role {
    SUPER_ADMIN,
    ADMIN,
    SUBSCRIBER
}

//user interface