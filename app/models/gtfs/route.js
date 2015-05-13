/**
 * Created by lamphanviet on 9/1/14.
 */
function Route() {
    this.route_id = 0;
    this.agency_id = null;
    this.route_short_name = "new route";
    this.route_long_name = "new route (long)";
    this.route_desc = "";
    this.route_type = 0;
    this.route_url = "";
    this.route_color = "00FFFF"
    this.route_text_color= "";

    this.agency = null;
    this.trips = [];
}

Route.prototype.fromJson = function(json) {
    this.route_id = json.route_id;
    this.agency_id = json.agency_id;
    this.route_short_name = json.route_short_name;
    this.route_long_name = json.route_long_name;
    this.route_desc = json.route_desc || null;
    this.route_type = json.route_type;
    this.route_url = json.route_url || null;
    this.route_color = json.route_color || null;
    this.route_text_color= json.route_text_color || null;

    this.agency = null;
}

Route.prototype.setAgency = function(agency) {
    agency.addRoute(this);
}

Route.prototype.createTrip = function() {
    var trip = new Trip();
    trip.route_id = this.route_id;
    this.trips.push(trip);
    return trip;
}

Route.prototype.addTrip = function(trip) {
}