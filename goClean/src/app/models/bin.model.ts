
const areasEnum  = Object.freeze({'location1': 'location1', 'location2': 'location2'});


export class Bin {
    private capacity: number;
    private location: {lat: number, lon: number};
    private hardwareId: string;
    private location_area: string;
    private tags: string[];


    constructor(capacity: number, location: {lat: number, lon: number}, hardwareId: string, location_area: string, tags: string[]) {
        this.capacity = capacity;
        this.location = location;
        this.hardwareId = hardwareId;
        this.location_area = location_area;
        this.tags = tags;
}

    getCapacity() {
        return this.capacity;
    }

    getLocation() {
        return this.location;
    }

    getHarwareID() {
        return this.hardwareId;
    }

    getLocationArea() {
        return this.location_area;
    }

    getTags() {
        return this.tags.slice();
    }

}
