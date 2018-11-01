import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, icon, marker, polyline } from 'leaflet';
import {FormBuilder, FormGroup, NgForm} from "@angular/forms";
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    private showArray: any =[];

    profileForm:FormGroup;

    test = {
        "email":"this@gmail.com"
    };

    constructor(private userService:UserService,private formBuilder:FormBuilder){
        formBuilder
    }



    ngOnInit(){
        this.getProfileData();

        this.profileForm = this.formBuilder.group({
            email:[this.test.email]
        });
    }

    p1 = marker([ -37.715456, 145.040575 ], {
        icon: icon({
            iconSize: [ 25, 25 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'src/assets/img/bin1.png',
            shadowUrl: 'leaflet/marker-shadow.png'
        })
    });
    p2 = marker([ -37.721867, 145.044221 ], {
        icon: icon({
            iconSize: [ 25, 25 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'src/assets/img/bin2.png',
            shadowUrl: 'leaflet/marker-shadow.png'
        })
    });
    p3 = marker([ -37.724082, 145.045605 ], {
        icon: icon({
            iconSize: [ 25, 25 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'src/assets/img/bin3.png',
            shadowUrl: 'leaflet/marker-shadow.png'
        })
    });
    p4 = marker([ -37.723010, 145.048450 ], {
        icon: icon({
            iconSize: [ 25, 25 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'src/assets/img/bin3.png',
            shadowUrl: 'leaflet/marker-shadow.png'
        })
    });
    p5 = marker([ -37.715456, 145.040575 ], {
        icon: icon({
            iconSize: [ 25, 25 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: 'src/assets/img/garbage.png',
            shadowUrl: 'leaflet/marker-shadow.png'
        })
    });



    getProfileData(){
        this.userService.getProfileData()
            .subscribe(data => { console.log('IN RETURN PROFILE COMPONENT success',data) // Data which is returned by call
                   // console.log("USER DETIAL DATA",data);
            let loggedInUser = localStorage.getItem('currentUser');

                for (const key in data) {
                    const user = data[key];
                    if(loggedInUser == user.email){
                        let test = {
                            "address": user.address,
                            "city": user.city,
                            "country": user.country,
                            "email": user.email,
                            "firstName": user.firstName,
                            "lastName": user.lastName,
                            "name": user.name,
                            "password": user.password,
                            "postalCode": user.postalCode,
                            "userName": user.userName
                        };
                        this.showArray.push(test);
                    }
                }

                console.log('User Detail array',this.showArray);

                },
                error => { console.log('IN RETURN PROFILE COMPONENT error',error); // Error if any

                });

    }


    onSubmit(form:NgForm){

        // let data = [
        //     {
        //         "userName":form.value.userName
        //     },
        //     {
        //         "email": form.value.email
        //     }
        //     ,
        //     {
        //         "firstName": form.value.firstName
        //     },
        //     {
        //         "lastName": form.value.lastName
        //     },
        //     {
        //         "address": form.value.address
        //     },
        //     {
        //         "city": form.value.city
        //     },
        //     {
        //         "country": form.value.country
        //     },
        //     {
        //         "postalCode": form.value.postalCode
        //     }
        // ];
        console.log(form);
        this.userService.updateProfile(form)
            .subscribe(data => { console.log('IN RETURN PROFILE COMPONENT success',data) // Data which is returned by call

                },
                error => { console.log('IN RETURN PROFILE COMPONENT error',error); // Error if any

                });

    }

    // options = {
    //     layers: [
    //         tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //             attribution: '&copy; OpenStreetMap contributors'
    //         }) , this.p1 , this.p2, this.p3, this.p4
    //     ],
    //     zoom: 15,
    //     center: latLng([ -37.720761, 145.047955 ])
    // };
}
