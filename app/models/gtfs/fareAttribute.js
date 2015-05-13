/**
 * Created by lamphanviet on 9/1/14.
 */
// Optional
function FareAttribute(data) {
    this.fare_id = data.fare_id;
    this.price = data.price;
    this.currency_type = data.currency_type;
    this.payment_method = data.payment_method;
    this.transfers  = data.transfers;
    this.transfer_duration  = data.transfer_duration || null;
}