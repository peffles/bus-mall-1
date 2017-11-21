'strict';

var allProducts = [];
var productNames = ['boots', 'chair', 'scissors']; // TODO: see the pattern here, and what you need to fill in?
function Product(productName, clickCount, displayCount) {
  this.productName = productName;
  this.clickCount = clickCount;
  this.displayCount = displayCount;
  allProducts.push(this);
}

document.getElementById('image-one').addEventListener('click', function() {
  var xx = 3;
  console.log(xx);
}, false);
