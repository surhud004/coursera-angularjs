(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

	$scope.checkLunch = function () {
		var num = countLunch($scope.lunch);
		console.log("Count of words - "+num);
		$scope.msg = displayMsg(num);
	};

	function countLunch(dishes) {
		var count = 0;
		if (dishes) 
		{
			var array = dishes.split(',');
			for (var idx in array) 
			{
				if (array[idx].trim().length != 0) 
				{

					count++;
				}
			}
		}
		return count;
	}

	function displayMsg(num) {
		if (num === 0) {
			document.getElementById('message').style.color = "red";
			document.getElementById('message').style.border = "thick solid red";
			return 'Please enter data first';
		}
		else if (num <= 3) {
			document.getElementById('message').style.color = "green";
			document.getElementById('message').style.border = "thick solid green";
			return 'Enjoy!';
		} else {
			document.getElementById('message').style.color = "green";
			document.getElementById('message').style.border = "thick solid green";
			return 'Too much!';
		}
	}
}



})();