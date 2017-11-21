'use strict';

var allProducts = [];
var clickTotal = 0;
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

  displayImages: function(dcf) {
    var indexes = [];
    while(indexes.length < 3) {
      console.log('stuck');
      var randomIndex = productRank.getRandomIndex();
      console.log(randomIndex);
      console.log(allProducts[randomIndex].clickCount);
      if(allProducts[randomIndex].displayCount === dcf) {
        allProducts[randomIndex].displayCount++;
        indexes.push(randomIndex);
      }
    }
    for(var j = 0; j < 3; j++) {
      var oldEl = document.getElementById(j);
      console.log(oldEl);
      if(oldEl) {
        oldEl.remove();
      }
      var divEl = document.getElementById('image-' + (j + 1));
      var imgEl = document.createElement('img');
      imgEl.src = 'img/' + fileNames[indexes[j]];
      imgEl.id = j;
      imgEl.className = [indexes[j]];
      divEl.appendChild(imgEl);
    }
  },

  tallyClicks: function(elementId) {
    console.log('tally clicks');
    allProducts[elementId].clickCount++;
    clickTotal++;
    if(clickTotal >= 15) {
      document.getElementById('image-1').removeEventListener('click', productRank.onClick);
      document.getElementById('image-2').removeEventListener('click', productRank.onClick);
      document.getElementById('image-3').removeEventListener('click', productRank.onClick);
      productRank.displayResults();
      productRank.showButton();
    }
  },

  displayResults: function() {
    console.log('display results');
    var divEl = document.getElementById('results');
    var pEl = document.createElement('p');
    pEl.textContent = 'Results';
    divEl.appendChild(pEl);
    for(var k = 0; k < allProducts.length; k++) {
      pEl = document.createElement('p');
      pEl.textContent = allProducts[k].clickCount + ' votes for ' + allProducts[k].productName;
      divEl.appendChild(pEl);
    }
  },

  showButton: function() {
    var btnEl = document.getElementById('button');
    btnEl.textContent = 'button';
    document.getElementById('button').addEventListener('click', productRank.reload);
  },

  reload: function() {
    location.reload();

  },

  onClick: function(event) {
    console.log('clicked');
    console.log(event.target.className);
    if(clickTotal >= 10) {
      productRank.displayImages(2);
    } else if(clickTotal >= 5) {
      productRank.displayImages(1);
    } else {
      productRank.displayImages(0);
    }
    productRank.tallyClicks(event.target.className);
  }
};
productRank.displayImages(0);
document.getElementById('image-1').addEventListener('click', productRank.onClick);
document.getElementById('image-2').addEventListener('click', productRank.onClick);
document.getElementById('image-3').addEventListener('click', productRank.onClick);
