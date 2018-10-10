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

    constructor(private userService: UserService){
    //private user: User[] = null;
    }

    ngOnInit(){
        this.userService.getUserData().then((userData)=>{
            console.log(userData);
        });




        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Email', 'isNotified', 'Status'],
            dataRows: [
                ['1', 'Dakota Rice', 'rice@india.com', '✔', 'Active'],
                ['2', 'Minerva Hooper', 'Curaçao@china.com', '✔', 'Active'],
                ['3', 'Sage Rodriguez', 'chau@gmai.com', '✔', 'Deleted'],
                ['4', 'Philip Chaney', 'tut@gmail.com', '✔', 'Active'],
                ['5', 'Doris Greene', 'doris@outlook.com', '✘', 'Deleted'],
                ['6', 'Mason Porter', 'porter@latrobe.edu.au', '✔', 'Deleted']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };
    }
}
