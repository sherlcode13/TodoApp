'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope,localStorageService) {

  	var savedTask = localStorageService.get('tasks');
    $scope.tasks = savedTask || [];
    
    $scope.addTask = function(){
    	if($scope.task)
    	{
         $scope.tasks.push({'task':$scope.task,'created':new Date(),'done':false});
         localStorageService.set('tasks',$scope.tasks);
         $scope.task='';
     }
    };

    $scope.completeTask = function(index){
    	$scope.tasks[index].done = true;
    };

    $scope.deleteTask = function(index){
    	$scope.tasks.splice(index,1);
    	localStorageService.set('tasks',$scope.tasks);
    };
   
  });
