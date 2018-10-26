import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user.model";

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;

    public userAry:User[] = [];

    public superArray:any[] = [];

    public notifyArray:any[] = [];
    public editMode:boolean = false;
    public notifySent:boolean = false;

    constructor(private userService: UserService){

    }

    ngOnInit(){
        this.userService.getUserData().then((userData: User[])=>{
            //console.log(userData);
            this.userAry = userData;
            for(var i:number=0;i<userData.length;i++){
                let stringArray:string[] = [];
                stringArray.push(userData[i].getName());
                stringArray.push(userData[i].getEmail());
                let bak: string = String(userData[i].getNotifed());
                stringArray.push(bak);
                this.superArray.push(stringArray);
            }



        });






        this.tableData1 = {
            headerRow: [ 'Select', 'Name', 'Email', 'isNotified'],
            dataRows: this.superArray
        };
        // this.tableData2 = {
        //     headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
        //     dataRows: [
        //         ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
        //         ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
        //         ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
        //         ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
        //         ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
        //         ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
        //     ]
        // };



    }
    handleChange(data){
        //console.log(data.email);
        let temp = {email:data.email};
        this.notifyArray.push(temp);


        console.log(this.notifyArray);
    }

    enableEdit(){
        this.editMode = true;
    }

    sendNotification(){
        if(this.editMode) {
            this.editMode = false;
            this.notifySent = true;
        }
        console.log("Here is data of users to be notified");
        console.log(this.notifyArray);



    }


}
