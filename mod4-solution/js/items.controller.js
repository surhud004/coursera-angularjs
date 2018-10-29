(function (argument) {
	
	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['items'];

	function ItemsController (items) {
		var itemCtrl = this;
		itemCtrl.items = items;
	}

})();