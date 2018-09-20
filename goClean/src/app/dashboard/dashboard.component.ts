import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { latLng, tileLayer, icon, marker, polyline } from 'leaflet';
declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit{

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
    ngOnInit(){



        var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410]
          ]

        };


        var optionsSales = {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false,
        };

        var responsiveSales: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
          ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        new Chartist.Pie('#chartPreferences', {
          labels: ['62%','32%','6%'],
          series: [62, 32, 6]
        });


    }
}
