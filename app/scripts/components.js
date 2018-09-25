angular.module('app.components', [])

 .component('footerContent', {

    templateUrl: '../partials/footer-content.html',

    controller: function footerController() {}
 })

 .component('navbarContent', {
    templateUrl: '../partials/navbar-content.html',
 })

 .component('principalContent', {
    templateUrl: '../partials/principal-content.html',
    controller: function contentController() {}
 })

 .component('sidenavContent', {
    templateUrl: '../partials/sidenav-content.html'
 });

 



