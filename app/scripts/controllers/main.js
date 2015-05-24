'use strict';

/**
 * @ngdoc function
 * @name feedmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedmeApp
 */
angular.module('feedmeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/places/nearby.json').success(function(data) {
      var items = data.response.groups[0].items;
      var itemId = Math.floor(Math.random() * items.length);
      $scope.venue = items[itemId].venue;
    });
  });
