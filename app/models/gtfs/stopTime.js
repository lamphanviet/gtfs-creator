/**
 * Created by lamphanviet on 9/1/14.
 */
function StopTime(data) {
    this.trip_id = data.trip_id;
    this.arrival_time = data.arrival_time;
    this.departure_time = data.departure_time;
    this.stop_id = data.stop_id;
    this.stop_sequence = data.stop_sequence;
    this.stop_headsign = data.stop_headsign;
    this.pickup_type = data.pickup_type;
    this.drop_off_type = data.drop_off_type;
    this.shape_dist_traveled = data.shape_dist_traveled;
}