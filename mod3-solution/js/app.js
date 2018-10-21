(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective () {
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'E',
    scope: {
      foundItems: '<',
      onEmpty: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    bindToController: true,
    controllerAs: 'narrowctrl'
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];

function NarrowItDownController (MenuSearchService) {
  var narrowctrl = this;
  narrowctrl.searchTerm = '';

  narrowctrl.matchMenuItems = function (searchTerm) {

    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function (items) {

      if(items && items.length > 0)
      {
        narrowctrl.msg = '';
        narrowctrl.found = items;
      }
      else
      {
        narrowctrl.msg = 'Nothing Found!';
        narrowctrl.found = [];
      }
    })
    .catch(function (error) {
      console.log("error.message");
    });
  };

  narrowctrl.removeMenuItems = function (index) {
    narrowctrl.found.splice(index, 1);
  };
}




MenuSearchService.$inject = ['$http'];

function MenuSearchService ($http) {

  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    })
    .then(function (response) {
      var foundItems = [];

        for (var i = 0; i < response.data['menu_items'].length; i++) {
            if (searchTerm.length > 0 && response.data['menu_items'][i]['description'].toLowerCase().indexOf(searchTerm) !== -1) {
                foundItems.push(response.data['menu_items'][i]);
            }
        }
        return foundItems;
    });
  };
}


})();