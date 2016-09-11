(function(){

	'use strict';


	angular.module('LunchCheck', [])

	.controller('LunchCheckController' , LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){
		$scope.message = "";
		$scope.values = "";
		$scope.myColor = "";
		$scope.CheckVaue = function(){			
			
			$scope.values.trim();
			var tokens = $scope.values.split(","); // Generate Array Of tokens
			if(tokens.length <=3 )
			{
				$scope.message = "Enjoy!";
				$scope.myColor = "green";
			}
			else if(tokens.length > 3)
			{
				$scope.message = "Too much!";
				$scope.myColor = "green";
			}

			if (!$scope.values) {        // Check for Corner Case if input is empty
				$scope.message = "Please enter data first";
				$scope.myColor = "red";
			}
		};
		

	}


})();