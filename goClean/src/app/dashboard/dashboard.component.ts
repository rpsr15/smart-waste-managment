import { Component, OnInit } from '@angular/core';
import {latLng, tileLayer, icon, marker, Map} from 'leaflet';
import {BinService} from '../services/bin.service';

declare var $: any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    onMapReady(map: Map) {
        console.log('the map is ready');
        console.log(map);
    }

    onZoomLevelChange(t) {
        console.log(t);
        console.log('zoom level changed');
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


    options = {
        layers: [
            tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }) , this.p1 , this.p2, this.p3, this.p4
        ],
        zoom: 15,
        center: latLng([ -37.720761, 145.047955 ])
    };
    constructor(private binService: BinService) {
        this.binService.getBinData().then((binData) => {
        console.log(binData);
    });}
    ngOnInit() {



    }
}
