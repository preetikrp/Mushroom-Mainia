"use strict";

var app = angular.module("mushroom", ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider.
    when('/', {
      templateUrl: 'partials/mushroom.html',
      controller: "mushroomCntrl"

    }).

    otherwise('/');

});

console.log("hello");