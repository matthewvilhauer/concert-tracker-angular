angular
  .module('concert-tracker')
  .controller('BandsIndexController', BandsIndexController);

BandsIndexController.$inject = ['$http'];

function BandsIndexController ($http) {
  var vm = this;
  vm.newBand = {};
  vm.newBand = {
    name: 'The String Cheese Incident',
    description: 'Colorado jam band',
    image: "../../assets/img/String-cheese.jpg"
  };

  $http({
    method: 'GET',
    url: '/api/bands'
  }).then(function successCallback(response) {
    vm.bands = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createBand = function  () {
    $http({
      method: 'POST',
      url: '/api/bands',
      data: vm.newBand,
    }).then(function successCallback(response) {
      vm.bands.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  };

  vm.editBand = function (band) {
    $http({
      method: 'PUT',
      url: '/api/bands/'+band._id,
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
      url: '/api/bands/'+ band._id
    }).then(function successCallback(json) {
      var index = vm.bands.indexOf(band);
      vm.bands.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  };

}
