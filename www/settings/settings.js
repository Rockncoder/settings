(function () {
    'use strict';

    angular.module('starter')
        .value("Settings", {
            searchRadius: {value: "5"},
            acceptsPushNotification: true,
            hasUserSeenMessage: false,
            pagesPerLoad: 20
        });
}());
