var areasEnum = Object.freeze({ 'location1': 'location1', 'location2': 'location2' });
var Bin = /** @class */ (function () {
    function Bin(capacity, location, hardwareId, location_area, tags) {
        this.capacity = capacity;
        this.location = location;
        this.hardwareId = hardwareId;
        this.location_area = location_area;
        this.tags = tags;
        this.currentLevel = 0;
    }
    Bin.prototype.setCurrentLevel = function (level) {
        this.currentLevel = level;
    };
    Bin.prototype.getCurrentLevel = function () {
        return this.currentLevel;
    };
    Bin.prototype.getCapacity = function () {
        return this.capacity;
    };
    Bin.prototype.getLocation = function () {
        return this.location;
    };
    Bin.prototype.getHarwareID = function () {
        return this.hardwareId;
    };
    Bin.prototype.getLocationArea = function () {
        return this.location_area;
    };
    Bin.prototype.getTags = function () {
        return this.tags.slice();
    };
    return Bin;
}());
export { Bin };
//# sourceMappingURL=bin.model.js.map