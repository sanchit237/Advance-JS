var listingPrice = 799;
var sellingPrice = 199;

var discount = ((listingPrice - sellingPrice) / listingPrice) * 100;

console.log("Total Discount is:" + Math.round(discount) + " %off");