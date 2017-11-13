(function() {
    'use strict';
    
    angular.module('app', [
    "ui.router"
    ])
    .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    
    $stateProvider.state("mouvements", {
    url: "/",
    templateUrl: "/views/mouvement/index.html",
    controller: "mouvementController"
    }).state("create", {
    url: "/create",
    templateUrl: "/views/mouvement/create.html",
    controller: "mouvementController"
    }).state("edit", {
    url: "/edit/:id",
    templateUrl: "/views/mouvement/create.html",
    controller: "mouvementController"
    }).state("details", {
    url: "/details/:id",
    templateUrl: "/views/mouvement/details.html",
    controller: "mouvementController"
    });
    })
    .constant("globalConfig", {
    apiAddress: 'http://localhost:3000/api'
    });
   })();