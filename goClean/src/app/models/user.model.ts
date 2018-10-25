export class User {
    private email: string;
    private firstName: string;
    private lastName: string;
    private notifed: boolean;
    private password: string;

    constructor(email:string,firstName:string,lastName:string,notifed:boolean){
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.notifed = notifed;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    getfirstName(){
        return this.firstName;
    }

    getlastName(){
        return this.lastName;
    }

    getNotifed(){
        return this.notifed;
    }
}