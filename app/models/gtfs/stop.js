/**
 * Created by lamphanviet on 9/1/14.
 */
function Stop(data) {
    this.stop_id = data.stop_id;
    this.stop_code = data.stop_code;
    this.stop_name = data.stop_name;
    this.stop_desc = data.stop_desc;
    this.stop_lat = data.stop_lat;
    this.stop_lon = data.stop_lon;
    this.zone_id = data.zone_id;
    this.stop_url = data.stop_url;
    this.location_type = data.location_type;
    this.parent_station = data.parent_station;
    this.stop_timezone = data.stop_timezone;
    this.wheelchair_boarding = data.wheelchair_boarding;
}