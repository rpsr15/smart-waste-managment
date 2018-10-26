import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class UserService {

    createUserFromJson(jsonObject: object) {
        const email = jsonObject['email'];
        const name = jsonObject['name'];
        const notified = jsonObject['notified'];
        const newUser = new User(email,name,notified);
        return newUser;
    }

    constructor(private httpService: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

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

    postUserEmail(data:any){
        console.log('IN SIGNUP');
        return this.httpService.post("https://bindata-app.herokuapp.com/api/storeUser",data,this.httpOptions)
            .pipe(map((response: Response) => response));

    }

}
