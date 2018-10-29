(function (argument) {
	
	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {
		
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html'
		})
		.state('categories', {
			url: '/categories',
			templateUrl: 'categories.html',
			controller: 'CategoriesController as catCtrl',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})
		.state('items', {
			url: '/items/{category}',
			templateUrl: 'items.html',
			controller: 'ItemsController as itemCtrl',
			resolve: {
				items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
					return MenuDataService.getItemsForCategory($stateParams.category);
				}]
			}
		});

		$urlRouterProvider.otherwise('/');

	}

})();