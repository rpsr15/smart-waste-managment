var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bin } from '../models/bin.model';
var BinService = /** @class */ (function () {
    function BinService(httpService) {
        this.httpService = httpService;
        this.binsURL = 'https://bindata-app.herokuapp.com/api/bins/data';
        this.binReadingURL = 'https://bindata-app.herokuapp.com/api/readBin';
    }
    BinService.prototype.createBinFromJson = function (jsonObject) {
        var capacity = +jsonObject['capacity'];
        var hardwareID = jsonObject['hardware_id'];
        var location = jsonObject['location'];
        var locationArea = jsonObject['location_precinct'];
        var tags = jsonObject['tags'];
        var newBin = new Bin(capacity, location, hardwareID, locationArea, tags);
        return newBin;
    };
    BinService.prototype.getLocations = function () {
        var promise = new Promise(function (resolve, reject) {
            resolve(['LTU Bundoora Campus', 'Bundoora', 'Heidelberg']);
        });
        return promise;
    };
    BinService.prototype.getBinReadings = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.httpService.get(_this.binReadingURL).subscribe(function (data) {
                console.log(data);
            });
        });
        return promise;
    };
    BinService.prototype.getBinDataForLocation = function (location) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var binsData = [];
            _this.httpService.get(_this.binsURL).subscribe(function (data) {
                var myObjStr = JSON.stringify(data);
                var bins = JSON.parse(myObjStr);
                var k = Object.keys(bins);
                for (var bin in bins) {
                    var strIndex = bin;
                    var binObj = bins[strIndex];
                    binsData.push(_this.createBinFromJson(binObj));
                }
                resolve(binsData);
            });
        });
        return promise;
    };
    BinService.prototype.getBinData = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var binsData = [];
            _this.httpService.get(_this.binsURL).subscribe(function (data) {
                var myObjStr = JSON.stringify(data);
                var bins = JSON.parse(myObjStr);
                var k = Object.keys(bins);
                for (var bin in bins) {
                    var strIndex = bin;
                    var binObj = bins[strIndex];
                    binsData.push(_this.createBinFromJson(binObj));
                }
                resolve(binsData);
            });
        });
        return promise;
    };
    BinService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], BinService);
    return BinService;
}());
export { BinService };
//# sourceMappingURL=bin.service.js.map