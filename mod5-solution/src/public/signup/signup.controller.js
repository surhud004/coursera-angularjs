(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'SignUpDataService', 'menuItems'];

function SignUpController(MenuService, SignUpDataService, menuItems) {
  var $ctrl = this;
  var shortNames = [];
  for (var i = 0; i < menuItems.menu_items.length; i++) {
    shortNames.push(menuItems.menu_items[i].short_name.toLowerCase() + "");
  }
  
  $ctrl.validateDish = function() {
    if ($ctrl.user != undefined && $ctrl.user.favDish != undefined) {
      var favourite = $ctrl.user.favDish.toLowerCase();
      if (shortNames.indexOf(favourite) != -1) {
        $ctrl.invalidDish = false;
      } else {
        $ctrl.invalidDish = true;
      }
    } else {
      $ctrl.invalidDish = true;
    }
  }

  $ctrl.submit = function() {
    MenuService.getMenuItemByShortName($ctrl.user.favDish).then(function(result) {
      $ctrl.invalidDish = false;
      $ctrl.user.favouriteDish = result;
      SignUpDataService.setUserPref($ctrl.user);
      $ctrl.saved = true;
    })
    .error(function(error) {
      $ctrl.invalidDish = true;
      $ctrl.saved = false;});
  };
}

})();