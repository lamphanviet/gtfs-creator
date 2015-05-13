/**
 * Created by lamphanviet on 9/1/14.
 */
function Agency() {
    this.agency_id = 0;
    this.agency_name = "new agency";
    this.agency_url = "";
    this.agency_timezone = "UTC";
    this.agency_lang = "en";
    this.agency_phone = "";
    this.agency_fare_url = "";

    this.routes = [];
}

Agency.prototype.fromJson = function(json) {
    this.agency_id = json.agency_id;
    this.agency_name = json.agency_name;
    this.agency_url = json.agency_url;
    this.agency_timezone = json.agency_timezone;
    this.agency_lang = json.agency_lang || null;
    this.agency_phone = json.agency_phone || null;
    this.agency_fare_url = json.agency_fare_url || null;

    this.routes = [];
}

Agency.prototype.createRoute = function() {
    var route = new Route();
    route.agency_id = this.agency_id;
    this.routes.push(route);
    return route;
}

Agency.prototype.addRoute = function(route) {
    if (route.agency != null)
        route.agency.removeRoute(route);
    route.agency = this;
    route.agency_id = this.agency_id;
    if (this.routes.indexOf(route) < 0)
        this.routes.push(route);
}

Agency.prototype.removeRoute = function(route) {
    var index = this.routes.indexOf(route);
    if (index >= 0) this.routes.splice(index, 1);
    route.agency = null;
    route.agency_id = null;
}