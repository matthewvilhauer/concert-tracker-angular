angular
  .module('concert-tracker')
  .controller('BandsIndexController', BandsIndexController);

BandsIndexController.$inject = ['$http'];

function BandsIndexController ($http) {
  var vm = this;
  vm.newBand = {};
  // vm.newBand = {
  //   name: 'Enter Artist Name',
  //   description: 'Enter Description',
  //   image: 'Enter Image'
  // };
  debugger;
  $http({
    method: 'GET',
    url: 'http://localhost:8000/v1/bands'
  }).then(function successCallback(response) {
    debugger
    vm.bands = response.data.data;
  }, function errorCallback(response) {
    debugger;
    console.log('There was an error getting the data', response);
  });

  vm.createBand = function  () {
    $http({
      method: 'POST',
      url: 'http://localhost:8000/v1/bands',
      data: vm.newBand,
    }).then(function successCallback(response) {
      vm.bands.push(response.data.data);
      vm.newBand = {};
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  };

  vm.editBand = function (band) {
    $http({
      method: 'PUT',
      url: 'http://localhost:8000/v1/bands/'+band._id,
      data: band
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  };

  vm.deleteBand = function (band) {
    $http({
      method: 'DELETE',
      url: 'http://localhost:8000/v1/bands/'+ band._id
    }).then(function successCallback(json) {
      var index = vm.bands.indexOf(band);
      vm.bands.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };

}
