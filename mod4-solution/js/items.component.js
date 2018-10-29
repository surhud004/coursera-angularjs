(function (argument) {
	
	angular.module('MenuApp')
	.component('items', {
		templateUrl: 'items.component.html',
		bindings: {
			items: '<'
		}
	});

})();