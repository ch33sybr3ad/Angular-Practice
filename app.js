(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.product = gems;
  });

  var gems = [
    {
      name: 'Ruby',
      price: 2,
      description: 'pink to blood-red colored gemstone',
      canPurchase: true,
      soldOut: true,
      image: "http://www.clker.com/cliparts/3/w/C/c/I/Y/pink-gem-md.png"
    }, {
      name: 'Sapphire',
      price: 5.95,
      description: 'blue gemstone variety of the mineral corundum, an aluminium oxide',
      canPurchase: false,
      soldOut: false,
      image: "http://4vector.com/thumb_data/v4l-120947.jpg"
    }
  ];

  app.controller('PanelController', function(){
    this.tab = 1;

    this.selectTab = function(setTab){
      this.tab = setTab
    };

    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };
  });

})();