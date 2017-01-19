angular.module('AngularIssues', ['ngMaterial'])
  .controller('MainController', ['$http',function($http) {
    var vm = this;
    vm.issues = [{"name":"fake","id":1},
    {"name":"fake","id":2},
    {"name":"fake","id":3},
    {"name":"fake","id":4}];

    function activate(){
        $http({
            method: 'GET',
            url: 'https://api.github.com/repos/angular/angular/issues'
            }).then(function successCallback(res) {
                vm.issues = res.data;    
            }, function errorCallback(re) {
                
            });
    }

    activate();
  }]);