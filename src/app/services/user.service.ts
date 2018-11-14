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
        const notified = false;
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
            this.httpService.get('http://localhost:3000/api/getUsers').subscribe(
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


    getProfileData(){
        return this.httpService.get("http://localhost:3000/api/getUsers")
            .pipe(map((response: Response) => response));

    }

    postUserEmail(data:any){
        //console.log('IN SIGNUP');
        return this.httpService.post("http://localhost:3000/api/storeUser",data,this.httpOptions)
            .pipe(map((response: Response) => response));

    }

    getNotication(){
        //console.log('IN GET NOTIFICATION');
        return this.httpService.get("http://localhost:3000/api/getNotifications")
            .pipe(map((response: Response) => response));
    }

    postReadNoti(data:any){

        return this.httpService.post("http://localhost:3000/api/readNotifications",data,this.httpOptions)
            .pipe(map((response: Response) => response));

    }

    updateProfile(data:any){
        let mydata = JSON.stringify(data.value);
        return this.httpService.post("http://localhost:3000/api/updateProfile",mydata,this.httpOptions)
            .pipe(map((response: Response) => response));

    }

    getNotifiedUsers(){
        return this.httpService.get("http://localhost:3000/api/getnotifiedUsers")
            .pipe(map((response: Response) => response));
    }

    deleteNotification(data:any){
        return this.httpService.post("http://localhost:3000/api/deleteNotifications",data,this.httpOptions)
            .pipe(map((response: Response) => response));
    }

    getAdmins(){
        return this.httpService.get("http://localhost:3000/api/getAdmins")
            .pipe(map((response: Response) => response));
    }

}
