import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";



@Injectable()
export class UserService {

    createUserFromJson(jsonObject: object) {
        const email = jsonObject['email'];
        const firstname = jsonObject['firstname'];
        const lastname = jsonObject['lastname'];
        const notified = jsonObject['notified'];
        const newUser = new User(email,firstname,lastname,notified);
        return newUser;
    }

    constructor(private httpService: HttpClient) {
    }


    getUserData() {

        const promise = new Promise((resolve, reject) => {
            const usersData = [];
            this.httpService.get('https://bindata-app.herokuapp.com/api/getUsers').subscribe(
                (data) => {
                    const myObjStr = JSON.stringify(data);
                    const users = JSON.parse(myObjStr) as Object;
                    const k = Object.keys(users);
                    for ( const user in users) {
                        const strIndex = <string> user;
                        const userObj = users[strIndex];
                        usersData.push(this.createUserFromJson(userObj));
                    }

                    resolve(usersData);

                }
            );
        });
        return promise;
    }

}
