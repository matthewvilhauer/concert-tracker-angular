angular
  .module('concert-tracker', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/bands',
      controllerAs: 'bandsIndexCtrl',
      controller: 'BandsIndexController'
    })
    .when('/:id', {
      templateUrl: 'templates/bands-show',
      controllerAs: 'bandsShowCtrl',
      controller: 'BandsShowController'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
