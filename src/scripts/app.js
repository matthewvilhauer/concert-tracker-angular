angular
  .module('concert-tracker', ['ngRoute'])
  .config(config);

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/bands',
      controllerAs: 'bandsIndexCtrl',
      controller: 'BandsIndexController'
    });
    // .when('/:id', {
    //   templateUrl: 'templates/albums-show',
    //   controllerAs: 'albumsShowCtrl',
    //   controller: 'AlbumsShowController'
    // });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
