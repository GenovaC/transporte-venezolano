angular.module('app.components', [])

 .component('footerContent', {
    templateUrl: '../views/partials/footer-content.html',
    controller: function footerController() {}
 })

 .component('navbarContent', {
    templateUrl: '../views/partials/navbar-content.html'
 })

 .component('principalContent', {
    templateUrl: '../views/partials/principal-content.html',
    controller: function contentController() {}
 })

 .component('infoContent', {
    templateUrl: '../views/partials/info-content.html',
    controller: function infoController() {}
 })

 .component('headerContent', {
    templateUrl: '../views/partials/header-content.html'
 })

 .component('sidenavContent', {
    templateUrl: '../views/partials/sidenav-content.html'
 });

 



