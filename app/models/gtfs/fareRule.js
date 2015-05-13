/**
 * Created by lamphanviet on 9/1/14.
 */
// Optional
function FareRule(data) {
    this.fare_id = data.fare_id;
    this.route_id = data.route_id || null;
    this.origin_id = data.origin_id || null;
    this.destination_id = data.destination_id || null;
    this.contains_id = data.contains_id || null;
}