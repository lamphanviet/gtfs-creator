/**
 * Created by lamphanviet on 9/1/14.
 */
function Trip(data) {
    this.route_id= data.route_id;
    this.service_id = data.service_id;
    this.trip_id = data.trip_id;
    this.trip_headsign = data.trip_headsign;
    this.trip_short_name = data.trip_short_name;
    this.direction_id = data.direction_id;
    this.block_id = data.block_id || null;
    this.shape_id = data.shape_id || null;
    this.wheelchair_accessible = data.wheelchair_accessible || 0;
    this.bikes_allowed = data.bikes_allowed || 0;

    this.route = null;
}

Trip.prototype.fromJson = function(json) {
    this.route_id= json.route_id;
    this.service_id = json.service_id;
    this.trip_id = json.trip_id;
    this.trip_headsign = json.trip_headsign;
    this.trip_short_name = json.trip_short_name;
    this.direction_id = json.direction_id;
    this.block_id = json.block_id || null;
    this.shape_id = json.shape_id || null;
    this.wheelchair_accessible = json.wheelchair_accessible || 0;
    this.bikes_allowed = json.bikes_allowed || 0;

    this.route = null;
}

Trip.prototype.setRoute = function(route) {
    route.addTrip(this);
}