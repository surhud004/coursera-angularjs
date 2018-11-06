(function() {
"use strict";
/**
 * Public restaurant application. Includes the common module and ui-router.
 */
angular.module('public', ['ui.router', 'common'])
.constant('ApiPath', 'https://surhud004-restaurant.herokuapp.com');
})();
