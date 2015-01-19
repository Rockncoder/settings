(function () {
    "use strict";

    angular.module("starter")
        .service("LocalStorageService", ['Settings',
            function (Settings) {
                var settings = "Settings",
                    hasLocalStorage = checkLocalStorage();

                console.log("Local Storage = "+hasLocalStorage);
                deserializeSettings();

                // API
                return {
                    serializeSettings: serializeSettings,
                    deserializeSettings: deserializeSettings
                };

                function checkLocalStorage() {
                    try {
                        return 'localStorage' in window && window['localStorage'] !== null;
                    } catch (e) {
                        return false;
                    }
                }

                function serializeSettings() {
                    localStorage[settings] = JSON.stringify(Settings);
                    console.log("Settings saved");
                }

                function deserializeSettings() {
                    var newSettings, rawSettings = localStorage[settings];
                    if(rawSettings) {
                         newSettings = JSON.parse(rawSettings);
                        if (newSettings) {
                            // use extend since it copies one property at a time
                            angular.extend(Settings, newSettings);
                            console.log("Settings restore");
                        }
                    }
                }
            }]);
}());