angular.module('AngularIssues')
    .controller('MainController', ['$http',function($http) {
        var vm = this;
        vm.issues = [];
        vm.nextLink;
        vm.prevLink;
        vm.firstLink;
        vm.lastLink;

        vm.getAssignee = function(assignee){
            return assignee ? assignee.login : "No One";
        };

        vm.getPage = function(url){
            var date = new Date();
            date.setDate(date.getDate() - 7);
            var request;
            if(url){
                request = {
                    method: 'GET',
                    url: url
                }   
            }else{
                request = {
                    method: 'GET',
                    url: 'https://api.github.com/repos/angular/angular/issues',
                    params: {
                        'since': date, 
                        'page' : 1,
                    }
                }
            }
            $http(request).then(function successCallback(res) {
                    vm.issues = res.data;
                    setLinkHeaders(res.headers().link)  
                }, function errorCallback(re) {
                    
                });
        }
        function activate(){
            vm.getPage();
        }



        function setLinkHeaders(linkHeaders){
            var links = parseLinkHeaders(linkHeaders);
            vm.nextLink = links.next;
            vm.prevLink  = links.prev;
            vm.lastLink = links.last;
            vm.firstLink = links.first;                        
        }

        function parseLinkHeaders(linkHeaders){
            var parts = linkHeaders.split(',');
            var links = {};
            parts.forEach(function(part) {
                var section = part.split(';');
                var url = section[0].replace(/<(.*)>/, '$1').trim();
                var name = section[1].replace(/rel="(.*)"/, '$1').trim();
                links[name] = url;
            });
            return links;
        }
        activate();
    }]);