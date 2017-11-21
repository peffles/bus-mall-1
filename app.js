'use strict';

var allProducts = [];
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var fileNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

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

var productRank = {
  getRandomIndex: function() {
    return Math.floor(Math.random() * allProducts.length);
  },

  displayImages: function() {
    for(var j = 0; j < 3; j++) {
      var divEl = document.getElementById('image-' + (j + 1));
      var imgEl = document.createElement('img');
      var index1 = productRank.getRandomIndex();
      imgEl.src = 'img/' + fileNames[index1];
      divEl.appendChild(imgEl);
    }
  },

  tallyClicks: function(elementId) {
    // TODO: Hmm... what's going to happen here?
  },

  displayResults: function() {
    // TODO: Hmm... what's going to happen here?
  },

  showButton: function() {
    // TODO: Hmm... what's going to happen here?
  },

  onClick: function() {
    // TODO: Hmm... what's going to happen here?
  }
};
productRank.displayImages();
