angular
.module('AngularIssues', ['ngMaterial', 'yaru22.md'])
.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
        })