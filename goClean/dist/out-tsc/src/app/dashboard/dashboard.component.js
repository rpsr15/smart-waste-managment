var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { latLng, tileLayer, icon, marker } from 'leaflet';
import { BinService } from '../services/bin.service';
import 'leaflet.markercluster';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(binService) {
        // this.binService.getLocations().then((locations: [String]) => {
        //     this.locations = locations;
        //     this.areaList = this.locations;
        //     this.selectedAreas = this.locations;
        this.binService = binService;
        this.zoom = 13;
        this.iconGreen = 'src/assets/img/marker-green.png';
        this.markerShadow = 'src/assets/img/marker-shadow.png';
        this.iconRed = 'src/assets/img/map-marker-red.png';
        // iconOrange =
        this.areaList = [];
        this.selectedAreas = [];
        this.dropdownSettings = {};
        this.layers = [];
        this.options = {
            layers: [
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; OpenStreetMap contributors'
                })
            ],
            zoom: this.zoom, minZoom: 11, maxZoom: 15,
            center: latLng([-37.720761, 145.047955])
        };
        //     this.binService.getBinData().then(
        //         (binData: Bin[]) => {
        //         this.staticBinInfo = binData;
        //         this.selectedBins = this.staticBinInfo;
        //         this.updateMap();
        //     });
        //     console.log('get data success');
        // });
        this.binService.getBinReadings().then(function (data) {
            console.log(data);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.dropdownSettings = {
        //     singleSelection: false,
        //     idField: 'item_id',
        //     textField: 'item_text',
        //     selectAllText: 'Select All',
        //     unSelectAllText: 'UnSelect All',
        //     itemsShowLimit: 3,
        //     allowSearchFilter: true
        // };
    };
    // filters bins based on location selected and then creates marker to show on the map
    DashboardComponent.prototype.updateMap = function () {
        this.selectedBins = [];
        // filter bins for selected locations
        console.log(this.staticBinInfo.length);
        for (var i = 0; i < this.staticBinInfo.length; i++) {
            // if ( this.selectedAreas.indexOf(this.staticBinInfo[i].getLocationArea()) !== -1) {
            //     this.selectedBins.push(this.staticBinInfo[i]);
            // }
            var result = this.selectedAreas.indexOf(this.staticBinInfo[i].getLocationArea()) !== -1;
            if (result) {
                //console.log(this.staticBinInfo[i]);
                this.selectedBins.push(this.staticBinInfo[i]);
            }
            //console.log(this.staticBinInfo[i].getLocationArea());
        }
        console.log(this.selectedBins);
        this.showZoomedMarkers();
        //get readings before displaying these bins
        // console.log('update map success');
        // if (this.zoom >= 14) {
        //     this.showZoomedMarkers();
        // } else {
        //     this.showAggregatedMarkers();
        // }
    };
    DashboardComponent.prototype.showAggregatedMarkers = function () {
        console.log('show affrefated markers');
        // aggregate markers based on area
        // const layers = [];
        // // initialize layers corresponding to each area
        // for ( let i = 0; this.selectedAreas ; i++) {
        //     this.layers[i] = [];
        // }
        // for ( let i = 0; this.selectedBins.length ; i++) {
        // }
    };
    DashboardComponent.prototype.showZoomedMarkers = function () {
        console.log('start zoomed');
        // use selectedBins to show markers
        this.layers = [];
        for (var i = 0; i < this.selectedBins.length; i++) {
            // console.log(+this.selectedBins[i].getLocation().latitude);
            // console.log(+this.selectedBins[i].getLocation().longitude);
            var iconString = this.iconGreen;
            if (+this.selectedBins[i].getCapacity() >= 200) {
                iconString = this.iconRed;
            }
            var p = marker([+this.selectedBins[i].getLocation().latitude, +this.selectedBins[i].getLocation().longitude], {
                icon: icon({
                    iconSize: [35, 40],
                    iconAnchor: [17, 40],
                    iconUrl: iconString,
                    shadowUrl: this.markerShadow
                })
            });
            p.on('click', this.onMarkerClick.bind(this));
            // const customPopup = ``;
            // const customOptions = {
            //         maxWidth: 500,
            //         className : 'custom'
            //     };
            p.bindPopup('hello world');
            this.layers.push(p);
        }
        console.log(this.layers.length);
        console.log(this.layers);
    };
    DashboardComponent.prototype.onMarkerClick = function (t) {
        console.log('marker clicked');
        console.log(t);
    };
    DashboardComponent.prototype.onItemSelect = function (item) {
        this.selectedAreas.push(item);
        this.updateMap();
    };
    DashboardComponent.prototype.onSelectAll = function (items) {
        //this.updateMap();
        console.log('on select all');
        this.selectedAreas = this.locations;
        this.updateMap();
    };
    DashboardComponent.prototype.onItemDeSelect = function (item) {
        console.log('on deselect');
        console.log(item);
        delete this.selectedAreas[this.selectedAreas.indexOf(item)];
        this.updateMap();
    };
    DashboardComponent.prototype.onItemDeSelectAll = function (item) {
        this.selectedAreas = [];
        this.updateMap();
    };
    DashboardComponent.prototype.onMapReady = function (map) {
    };
    DashboardComponent.prototype.onZoomLevelChange = function (map) {
        //   const zoomLevel = +map.target._animateToZoom;
        //     console.log(zoomLevel);
        //     this.zoom = zoomLevel;
        //     this.updateMap();
        console.log(map);
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'dashboard-cmp',
            moduleId: module.id,
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }),
        __metadata("design:paramtypes", [BinService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map