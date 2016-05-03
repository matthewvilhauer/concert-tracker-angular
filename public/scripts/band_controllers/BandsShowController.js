angular
  .module('concert-tracker')
  .controller('BandsShowController', BandsShowController);

BandsShowController.$inject = ['$http', '$routeParams'];

function BandsShowController ($http, $routeParams) {
  var vm = this;
  // vm.newSong = {};
 debugger;
  // $http({
  //   method: 'GET',
  //   url: 'http://localhost:8000/v1/bands/'+$routeParams.id
  // }).then(function successCallback(json) {
  //   vm.band = json.data;
  // });
  //
  // vm.editBand = function (band) {
  //   $http({
  //     method: 'PUT',
  //     url: 'http://localhost:8000/v1/bands/'+$routeParams.id,
  //     data: vm.band
  //   }).then(function successCallback(json) {
  //     console.log('Successfully Edited:' + json);
  //   }, function errorCallback(response) {
  //     console.log('There was an error editing the data', response);
  //   });
  // };
  //
  // vm.deleteBand = function (band) {
  //   $http({
  //     method: 'DELETE',
  //     url: 'http://localhost:8000/v1/bands/'+ $routeParams.id
  //   }).then(function successCallback(json) {
  //     var index = vm.bands.indexOf(band);
  //     vm.bands.splice(index,1);
  //   }, function errorCallback(response) {
  //     console.log('There was an error deleting the data', response);
  //   });
  // };

  // vm.editSong = function (song) {
  //   $http({
  //     method: 'PUT',
  //     url: 'http://localhost:8000/v1/bands/'+ $routeParams.id + '/songs/' + song._id,
  //     data: song
  //   }).then(function successCallback(json) {
  //     console.log('Successfully Edited:' + json);
  //   }, function errorCallback(response) {
  //     console.log('There was an error editing the data', response);
  //   });
  // };
  //
  // vm.deleteSong = function (song) {
  //   $http({
  //     method: 'DELETE',
  //     url: 'http://localhost:8000/v1/bands/'+ $routeParams.id + '/songs/' + song._id
  //   }).then(function successCallback(json) {
  //     var index = vm.band.songs.indexOf(song);
  //     vm.band.songs.splice(index,1);
  //   }, function errorCallback(response) {
  //     console.log('There was an error deleting the data', response);
  //   });
  // };
  //
  // vm.createSong = function () {
  //   $http({
  //     method: 'POST',
  //     url: 'http://localhost:8000/v1/bands/'+vm.band._id+'/songs',
  //     data: vm.newSong,
  //   }).then(function successCallback(response) {
  //     vm.band.songs.push(response.data);
  //     vm.newSong = {};
  //   }, function errorCallback(response) {
  //     console.log('There was an error posting the data', response);
  //   });
  // };
  // vm.createGenre = function (band) {
  //   $http({
  //     method: 'PUT',
  //     url: 'http://localhost:8000/v1/bands/'+vm.band._id+'/songs',
  //     data: vm.band.genres,
  //   }).then(function successCallback(response) {
  //     vm.band.genres.push(response.data);
  //     vm.newGenre = {};
  //   }, function errorCallback(response) {
  //     console.log('There was an error posting the data', response);
  //   });
  // };

}
