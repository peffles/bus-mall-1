'strict';

var allProducts = [];
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var fileNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];
function Product(productName, fileName, clickCount, displayCount) {
  this.productName = productName;
  this.fileName = fileName;
  this.clickCount = clickCount;
  this.displayCount = displayCount;
  allProducts.push(this);
}

for(var i = 0; i < productNames.length; i++) {
  new Product(productNames[i], fileNames[i], 0, 0);
}














document.getElementById('image-one').addEventListener('click', function() {
  var xx = 3;
  console.log(xx);
}, false);
