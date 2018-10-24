import { Component, OnInit } from '@angular/core';
import {latLng, tileLayer, icon, marker, Map, circle, polygon, Popup, Layer} from 'leaflet';
import {BinService} from '../services/bin.service';
import {Bin} from '../models/bin.model';
import * as L from 'leaflet';
import 'leaflet.markercluster';



declare var $: any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

     zoom = 13;
     iconGreen = 'src/assets/img/marker-green.png';
     markerShadow = 'src/assets/img/marker-shadow.png';
     iconRed = 'src/assets/img/map-marker-red.png';
        // iconOrange =
     areaList = [];
     locations: String[];
     selectedAreas = [];
     selectedBins: Bin[];
     staticBinInfo: Bin[];
     dropdownSettings = {};
     layers = [];



    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            })
        ],
        zoom: this.zoom, minZoom: 11, maxZoom: 15,
        center: latLng([ -37.720761, 145.047955 ])
    };

    constructor(private binService: BinService) {



        this.binService.getLocations().then((locations: [String]) => {
            this.locations = locations;
            this.areaList = this.locations;
            this.selectedAreas = this.locations;

            this.binService.getBinData().then(
                (binData: Bin[]) => {
                this.staticBinInfo = binData;
                this.selectedBins = this.staticBinInfo;
                this.updateMap();
            });

            console.log('get data success');

        });


    }

    ngOnInit() {

        // this.dropdownSettings = {
        //     singleSelection: false,
        //     idField: 'item_id',
        //     textField: 'item_text',
        //     selectAllText: 'Select All',
        //     unSelectAllText: 'UnSelect All',
        //     itemsShowLimit: 3,
        //     allowSearchFilter: true
        // };
    }

    // filters bins based on location selected and then creates marker to show on the map
    updateMap() {
        this.selectedBins = [];
        // filter bins for selected locations
            console.log(this.staticBinInfo.length);
        for (let i = 0; i < this.staticBinInfo.length; i++) {

            // if ( this.selectedAreas.indexOf(this.staticBinInfo[i].getLocationArea()) !== -1) {
            //     this.selectedBins.push(this.staticBinInfo[i]);
            // }
            const result = this.selectedAreas.indexOf(this.staticBinInfo[i].getLocationArea()) !== -1 ;
            if (result) {
                //console.log(this.staticBinInfo[i]);
                this.selectedBins.push(this.staticBinInfo[i]);

            }
            //console.log(this.staticBinInfo[i].getLocationArea());
            
        }

        console.log(this.selectedBins);
        //

        console.log('update map success');
        if (this.zoom >= 14) {
            this.showZoomedMarkers();
        } else {
            this.showAggregatedMarkers();
        }
    }

    showAggregatedMarkers() {
        console.log('show affrefated markers');
        // aggregate markers based on area
        // const layers = [];
        // // initialize layers corresponding to each area
        // for ( let i = 0; this.selectedAreas ; i++) {
        //     this.layers[i] = [];
        // }
        // for ( let i = 0; this.selectedBins.length ; i++) {
            
        // }
    }

    showZoomedMarkers() {
        console.log('start zoomed');
        // use selectedBins to show markers
        this.layers = [];

        for (let i = 0 ; i < this.selectedBins.length ; i++) {
            // console.log(+this.selectedBins[i].getLocation().latitude);
            // console.log(+this.selectedBins[i].getLocation().longitude);
            let iconString = this.iconGreen;
            if (+this.selectedBins[i].getCapacity() >= 200) {
                iconString = this.iconRed;
            }
            const p = marker([ +this.selectedBins[i].getLocation().latitude, +this.selectedBins[i].getLocation().longitude ], {
                icon: icon({
                    iconSize: [ 35, 40 ],
                    iconAnchor: [ 17, 40 ],
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
    }

    onMarkerClick(t) {
        console.log('marker clicked');
        console.log(t);
    }



    onItemSelect (item: any) {

        this.selectedAreas.push(item);
        this.updateMap();
    }
    onSelectAll (items: any) {
        //this.updateMap();
        console.log('on select all');
        this.selectedAreas = this.locations;
        this.updateMap();

    }

    onItemDeSelect(item: any) {
        console.log('on deselect');
        console.log(item);
        delete  this.selectedAreas[this.selectedAreas.indexOf(item)];
        this.updateMap();
    }

    onItemDeSelectAll(item: any) {
        this.selectedAreas = [];
        this.updateMap();
    }




    onMapReady(map: Map) {


    }

    onZoomLevelChange(map: Object) {
    //   const zoomLevel = +map.target._animateToZoom;
    //     console.log(zoomLevel);
    //     this.zoom = zoomLevel;
    //     this.updateMap();
        console.log(map);
    }



}
