angular.module('AngularIssues', ['ngMaterial'])
  .controller('MainController', ['$http',function($http) {
    var vm = this;
    vm.issues = [{"name":"fake","id":1},
    {"name":"fake","id":2},
    {"name":"fake","id":3},
    {"name":"fake","id":4}];
  }]);