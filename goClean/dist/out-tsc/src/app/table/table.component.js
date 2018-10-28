var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var TableComponent = /** @class */ (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
        this.tableData1 = {
            headerRow: ['ID', 'Name', 'Email', 'isNotified', 'Status'],
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
            headerRow: ['ID', 'Name', 'Salary', 'Country', 'City'],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout'],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux'],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park'],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten',],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester']
            ]
        };
    };
    TableComponent = __decorate([
        Component({
            selector: 'table-cmp',
            moduleId: module.id,
            templateUrl: 'table.component.html'
        })
    ], TableComponent);
    return TableComponent;
}());
export { TableComponent };
//# sourceMappingURL=table.component.js.map