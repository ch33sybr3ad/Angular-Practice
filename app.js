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
      image: "http://www.clker.com/cliparts/3/w/C/c/I/Y/pink-gem-md.png",
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "jason@zhao.com"
        },
        {
          stars: 2,
          body: "This product was okay",
          author: "product@hater.com"
        }
      ],
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

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: "E",
      templateUrl: 'product-panels.html',
      controller: function(){
        this.tab = 1;

        this.selectTab = function(setTab){
          this.tab = setTab
        };

        this.isSelected = function(checkTab){
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panels '
    };
  });

})();