let cartValue = 3450;
let discountedCart = null;

if (cartValue < 50) {
  console.log("No discount applied!");
  discountedCart = cartValue;
} else if (cartValue < 100 && cartValue >= 50) {
  console.log("10% discount applied");
  discountedCart = cartValue - cartValue * 0.1;
} else if (cartValue < 200 && cartValue >= 100) {
  console.log("30% discount applied");
  discountedCart = cartValue - cartValue * 0.3;
} else if (cartValue < 300 && cartValue >= 200) {
  console.log("40% discount applied");
  discountedCart = cartValue - cartValue * 0.4;
} else {
  console.log("50% discount applied");
  discountedCart = cartValue - cartValue * 0.5;
}

console.log(`discounted cart value is ${discountedCart.toFixed(2)}`);
