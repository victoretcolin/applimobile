var todoApp=angular.module('todoApp', []);
todoApp.controller('TodoCtrl', ['$scope', function($scope)
{
	$scope.tab = [];
	var task = new Object();
	task.barre = false;
	task.surligne = false;
	task.valeur = $scope.task;

	$scope.addTask = function()
	{
		var object = new Object();
		object.barre = false;
		object.surligne = false;
		object.valeur = $scope.task;
		$scope.tab.push(object);
		$scope.task = "";
	};

	$scope.supprimer = function($index)
	{
		$scope.tab.splice($index,1);
	};
	
	$scope.barrer = function($index)
	{
		$scope.tab[$index].barre = !$scope.tab[$index].barre;
	}

	$scope.surligner = function($index)
	{
		for(var i = 0; i<$scope.tab.length; i++)
		{
			$scope.tab[i].surligne = false;
		}
		$scope.tab[$index].surligne = true;
	}
}]);