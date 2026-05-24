let productPrice = 150;
let productQuantity = 3;

let totalCost = productPrice * productQuantity;

let discount = totalCost * 0.1; // (10% = 10/100 = 0.1)

let discountedPrice = totalCost - discount;

console.log("product price = ", productPrice);
console.log("product quantity = ", productQuantity);
console.log("total cost = ", totalCost);
console.log("10% discount on cost = ", discount);
console.log("discounted price = ", discountedPrice);
