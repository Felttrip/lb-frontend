angular.module('AngularIssues', ['ngMaterial', 'yaru22.md'])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')})
    .controller('MainController', ['$http',function($http) {
        var vm = this;
        vm.issues = [];
        vm.getAssignee = function(assignee){
            return assignee ? assignee.login : "No One";
        };

        vm.getPage = function(page){
            var date = new Date();
            date.setDate(date.getDate() - 7);
            $http({
                method: 'GET',
                url: 'https://api.github.com/repos/angular/angular/issues',
                params: {
                    'since': date, 
                    'page' : page,
                    'per_page' : 10   
                }
                }).then(function successCallback(res) {
                    vm.issues = res.data;
                        
                }, function errorCallback(re) {
                    
                });
        }
        function activate(){
            vm.getPage(1);
        }



        function parseLinkHeader(linkHeader){
            var fullLinks = linkHeader.split(",");
                
        }
        activate();
    }]);