"use strict";angular.module("mytodoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angularMoment","ui.sortable","LocalStorageModule"]).config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("mytodoApp").controller("MainCtrl",["$scope","localStorageService",function(a,b){var c=b.get("tasks");a.tasks=c||[],a.addTask=function(){a.task&&(a.tasks.push({task:a.task,created:new Date,done:!1}),b.set("tasks",a.tasks),a.task="")},a.completeTask=function(b){a.tasks[b].done=!0},a.deleteTask=function(c){a.tasks.splice(c,1),b.set("tasks",a.tasks)}}]),angular.module("mytodoApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);