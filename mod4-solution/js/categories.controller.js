(function (argument) {
	
	angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories'];

	function CategoriesController (categories) {
		var catCtrl = this;
		catCtrl.items = categories;
	}

})();