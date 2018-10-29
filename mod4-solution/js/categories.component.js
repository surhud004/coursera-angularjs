(function (argument) {
	
	angular.module('MenuApp')
	.component('categories', {
		templateUrl: 'categories.component.html',
		bindings: {
			items: '<'
		}
	});

})();