const unitPrice = 1000;
document.getElementById("quantity").addEventListener("input", function () {
let quantity = this.value;

if(quantity < 0)
{
    alert("Quantity cannot be negative");
    this.value = 0;
    quantity = 0;
}
    let total = unitPrice * quantity * 30;

    document.getElementById("totalPrice").value = total;

    if (total > 1000) {
        alert("You are eligible for a Gift Coupon!");
    }

});