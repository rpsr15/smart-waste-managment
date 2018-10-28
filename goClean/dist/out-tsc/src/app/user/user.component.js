var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { icon, marker } from 'leaflet';
var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.p1 = marker([-37.715456, 145.040575], {
            icon: icon({
                iconSize: [25, 25],
                iconAnchor: [13, 41],
                iconUrl: 'src/assets/img/bin1.png',
                shadowUrl: 'leaflet/marker-shadow.png'
            })
        });
        this.p2 = marker([-37.721867, 145.044221], {
            icon: icon({
                iconSize: [25, 25],
                iconAnchor: [13, 41],
                iconUrl: 'src/assets/img/bin2.png',
                shadowUrl: 'leaflet/marker-shadow.png'
            })
        });
        this.p3 = marker([-37.724082, 145.045605], {
            icon: icon({
                iconSize: [25, 25],
                iconAnchor: [13, 41],
                iconUrl: 'src/assets/img/bin3.png',
                shadowUrl: 'leaflet/marker-shadow.png'
            })
        });
        this.p4 = marker([-37.723010, 145.048450], {
            icon: icon({
                iconSize: [25, 25],
                iconAnchor: [13, 41],
                iconUrl: 'src/assets/img/bin3.png',
                shadowUrl: 'leaflet/marker-shadow.png'
            })
        });
        this.p5 = marker([-37.715456, 145.040575], {
            icon: icon({
                iconSize: [25, 25],
                iconAnchor: [13, 41],
                iconUrl: 'src/assets/img/garbage.png',
                shadowUrl: 'leaflet/marker-shadow.png'
            })
        });
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
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Component({
            selector: 'user-cmp',
            moduleId: module.id,
            templateUrl: 'user.component.html'
        })
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map