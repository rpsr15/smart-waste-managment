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

        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 1,
            allowSearchFilter: true
        };
    }

    // filters bins based on location selected and then creates marker to show on the map
    updateMap() {


        this.selectedBins = [];
        // filter bins for selected locations
            console.log(this.staticBinInfo.length);
        for (let i = 0; i < this.staticBinInfo.length; i++) {

            const result = this.selectedAreas.indexOf(this.staticBinInfo[i].getLocationArea()) !== -1 ;
            if (result) {
               this.selectedBins.push(this.staticBinInfo[i]);

            }
            
        }

        // console.log(this.selectedBins);
        // //

        // console.log('update map success');
        // if (this.zoom >= 14) {
        //     this.showZoomedMarkers();
        // } else {
        //     this.showAggregatedMarkers();
        // }
        this.showZoomedMarkers();
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

            const binID = 'adf';
            const binCapacityLeft = '23';
            const binMax = '120';
            const binLocation = 'LTU Bundoora';
            const binOrganeBackground = '#F5CBA7';
            const binSafeBackground = '#D5F5E3';
            const  binRedBackground = '#FADBD8';
            const randomImageNumber = Math.floor(Math.random() * 3) + 1  ;
            const customPopup = `<!DOCTYPE html>
            <html>
            <head>
            <style>
            .card {
                margin-bottom: 5px;
                box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                transition: 0.3s;
                width: 100%;
            }
            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            }
            .leaflet-popup-content {
                width: 180px;
                margin: 5px 5px;
            }
            .h6 {
                margin: 5px;
            }
            .container {
                padding: 1px;
                width: auto;
            }
            .binID {
	            color:#48cfad;
	            font-size:18px;
	            font-weight:300;
            }
            .binDetails {
                color: #FFFFFF;
                font-weight: bold;
            }

            </style>
            </head>
            <body>
            <div class="card" style="background-color: #47C1C8">
              <div class="container" style="padding: 5px;" >
                <p class="binDetails" style = "margin:0px; font-size: 12px">${binID}</p>
                <p class="binDetails" style = "margin:0px; font-size: 12px">${ binLocation }</p>
              </div>
            </div>
            <div class="card" style="padding:5px;" >
              <div class="container">
                    <div class="container" style="float:left; width:50%">
                        <img src="src/assets/img/binimg${randomImageNumber}.png" style="border-radius:5px" width="70" height="80"></img>
                    </div>
                    <div class="container" style="float:left; width:50%">
                    <div>Max Capacity:</div>
                    <div style="color:#47C1C8; font-size:16px; font-weight: bold">120</div>
                    <div>Capacity Left:</div>
                    <div style="color:#47C1C8; font-size:16px; font-weight: bold">12</div>
                    </div>
                </div>
            </div>
            </body>
            </html> `;
            p.bindPopup(customPopup);
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
