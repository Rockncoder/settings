(function () {
    'use strict';

    angular.module('starter')
        .controller('SettingsController', ['$scope', 'Settings', 'LocalStorageService', '$ionicPopup',
            function ($scope, Settings, LocalStorageService, $ionicPopup) {
                console.log("SettingsController launching");
                $scope.nearbyRange = [
                    {name: "1 mile", value: "1"},
                    {name: "2 miles", value: "2"},
                    {name: "5 miles", value: "5"},
                    {name: "10 miles", value: "10"},
                    {name: "20 miles", value: "20"},
                    {name: "50 miles", value: "50"},
                    {name: "100 miles", value: "100"}
                ];

                if (!Settings.hasUserSeenMessage) {
                    Settings.hasUserSeenMessage = true;
                    LocalStorageService.serializeSettings();
                    $ionicPopup.alert({
                        title: 'Hi There',
                        template: '<div class="text-center">You are a first time user.</div>'
                    });
                }

                // set the initial values for the widgets
                $scope.searchRadius = Settings.searchRadius;
                $scope.acceptPush = Settings.acceptPush;

                // when a widget is changed, come here an update the setting object too
                $scope.onChange = function (type, value) {
                    $scope[type] = value;
                    Settings[type] = value;
                    LocalStorageService.serializeSettings();
                };
            }]);
}());
