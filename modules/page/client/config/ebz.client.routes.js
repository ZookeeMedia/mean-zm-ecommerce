'use strict';

// Setting up route
angular.module('ebz').config(['$stateProvider',
  function($stateProvider) {
    // Users state routing
    $stateProvider.
    state('ebz', {
      url: '/ebz',
      templateUrl: 'modules/page/client/views/ebz.client.view.html'
    });
  }
]);
