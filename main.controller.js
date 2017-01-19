angular.module('AngularIssues', ['ngMaterial', 'yaru22.md'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
        .accentPalette('blue-grey')})
    .controller('MainController', ['$http',function($http) {
        var vm = this;
        vm.issues = [];

        function activate(){
            var date = new Date();
            date.setDate(date.getDate() - 7);
            $http({
                method: 'GET',
                url: 'https://api.github.com/repos/angular/angular/issues',
                params: {
                    'since': date    
                }
                }).then(function successCallback(res) {
                    vm.issues = res.data;    
                }, function errorCallback(re) {
                    
                });
        }

        activate();}]);