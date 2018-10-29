import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Bin} from '../models/bin.model';

@Injectable()
export class BinService {
    binsURL = 'https://bindata-app.herokuapp.com/api/bins/data';
    locationsURL = 'https://bindata-app.herokuapp.com/api/getLocations';

    createBinFromJson(jsonObject: object) {
        const capacity = +jsonObject['capacity'];
        const hardwareID = jsonObject['hardware_id'];
        const location = jsonObject['location'];
        const locationArea = jsonObject['location_precinct'];
        const tags = jsonObject['tags'] as string[];
        const newBin = new Bin(capacity, location, hardwareID, locationArea, tags);
        return newBin;
    }

    constructor(private httpService: HttpClient) {}
     parseObject(obj) {
         const locations = [];
        for (const v in obj) { 
           locations.push(obj[v]);
         }
         return locations;
    }
    getLocations() {
        const promise = new Promise((resolve, reject) => {
            this.httpService.get(this.locationsURL).subscribe(
                (data: Object) => {
                    resolve(this.parseObject(data));
                }
            );
        });
        return promise;
    }

    getBinDataForLocation(location: string) {

        const promise = new Promise((resolve, reject) => {
            const binsData: Bin[] = [];
            this.httpService.get(this.binsURL).subscribe(
                (data) => {
                    const myObjStr = JSON.stringify(data);
                    const bins = JSON.parse(myObjStr) as Object;
                    const k = Object.keys(bins);
                    for ( const bin in bins) {
                        const strIndex = <string> bin;
                        const binObj = bins[strIndex] as Bin;
                        binsData.push(this.createBinFromJson(binObj));
                    }

                    resolve(binsData);

                }
            );
        });
        return promise;
    }

     getBinData() {

        const promise = new Promise((resolve, reject) => {
            const binsData: Bin[] = [];
            this.httpService.get(this.binsURL).subscribe(
                (data) => {
                    const myObjStr = JSON.stringify(data);
                    const bins = JSON.parse(myObjStr) as Object;
                    const k = Object.keys(bins);
                    for ( const bin in bins) {
                        const strIndex = <string> bin;
                        const binObj = bins[strIndex] as Bin;
                        binsData.push(this.createBinFromJson(binObj));
                    }

                    resolve(binsData);

                }
            );
        });
        return promise;
        }
    }
