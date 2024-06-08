// Question 61: P:1
// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var VehicleCategory;
(function (VehicleCategory) {
    VehicleCategory["Car"] = "CAR";
    VehicleCategory["Truck"] = "TRUCK";
    VehicleCategory["Motorcycle"] = "MOTORCYCLE";
})(VehicleCategory || (VehicleCategory = {}));
export default VehicleCategory;
