import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Bin} from '../models/bin.model';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { BinReading } from 'app/models/bin-reading.model';
import { Observable } from 'rxjs';

@Injectable()
export class BinService {


    createBinFromJson(jsonObject: object) {
        const capacity = +jsonObject['capacity'];
        const hardwareID = jsonObject['hardware_id'];
        const location = jsonObject['location'];
        const locationArea = jsonObject['location_precinct'];
        const tags = jsonObject['tags'] as string[];
        const randomLevel = Math.floor(Math.random()*capacity)+0
        const newBin = new Bin(capacity, location, hardwareID, locationArea, tags, randomLevel);
        return newBin;
    }

  
    private locations : Observable<any[]>;
    private binMetaData: Observable<any[]>;
    private binReadings: Observable<any[]>;
    private latestReadings: Observable<any[]>;

    constructor(private httpService: HttpClient, db: AngularFireDatabase) {
        this.locations = db.list("/locations").valueChanges()
        this.binMetaData = db.list("/binMetaData").valueChanges()
        this.binReadings = db.list("/binReading").valueChanges()
        this.latestReadings = db.list("/binReading").valueChanges()
       
       
    }

    
     parseObject(obj) {
         const locations = [];
        for (const v in obj) { 
           locations.push(obj[v]);
         }
         return locations;
    }

   
    async getLocations() {
        
        const promise = new Promise((resolve) => {
            this.locations.subscribe((values) => {
                let locations = values.map( val => val.name)
                resolve(locations)
            })
        });
        return promise;
    }

    getAllReadings() {
        const promise = new Promise((resolve, reject) => {

            this.binReadings.subscribe((values) => {
                resolve(values)
            })
        });
        return promise;
    }

    //get static data of the bins
     getBinData() {
        const promise = new Promise((resolve, reject) => {
            const binsData: Bin[] = [];
            this.binMetaData.subscribe((values) => {
                let bins = values.map(x => this.createBinFromJson(x))
                resolve(bins)
                })

            // this.httpService.get("http://127.0.0.1:8810/api/bins/data").subscribe(
            //     (data) => {
            //         const myObjStr = JSON.stringify(data);
            //         const bins = JSON.parse(myObjStr) as Object;
            //         const k = Object.keys(bins);
            //         for ( const bin in bins) {
                        
            //             const strIndex = <string> bin;
            //             const binObj = bins[strIndex] as Bin;
            //             console.log(binObj)
            //             binsData.push(this.createBinFromJson(binObj));
            //         }
            //         console.log('data received at service', binsData);

            //         resolve(binsData);

            //     }
            // );
        });
        return promise;
        }
    }
