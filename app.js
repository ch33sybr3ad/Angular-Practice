(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.product = gems;
  });

  var gems = [
    {
      name: 'Ruby',
      price: 2.95,
      description: '.  .  .  ',
      canPurchase: true,
      soldOut: true,
    }, {
      name: 'Saphire',
      price: 5.95,
      description: '.  .  .  ',
      canPurchase: false,
      soldOut: false,
    }
  ];

})();