var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var item_object={};
var itemprice = Math.floor(Math.random()*(100))
item_object[item]=itemprice
cart.push(item_object)
 
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
if (cart.length === 0){
  console.log("Your shopping cart is empty.")
} 
else if (cart.length === 1) {
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`);
}
else if (cart.length === 2){
  console.log(`In your cart, you have ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
}
else 
}

function total() {
let totalamount = 0
for (var i = 0; i < cart.length; i++){
  for (var item in cart[i]){
    totalamount += cart[i][item]
  }
}
return totalamount
}

function removeFromCart(item) {
  var itemincart = false
  for (var i = 0; i < cart.length; i++){
  if (cart[i].hasOwnProperty(item)){
    itemincart=true;
    cart.splice(i, 1);
  }
  }
  if (itemincart === false){
    console.log("That item is not in your cart.")
  }
return cart
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
