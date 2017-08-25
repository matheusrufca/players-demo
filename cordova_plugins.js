cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
        "id": "cordova-plugin-device.DeviceProxy",
        "pluginId": "cordova-plugin-device",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "id": "cordova-plugin-globalization.GlobalizationError",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "id": "cordova-plugin-globalization.globalization",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/cordova-plugin-globalization/www/browser/moment.js",
        "id": "cordova-plugin-globalization.moment",
        "pluginId": "cordova-plugin-globalization",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-globalization/src/browser/GlobalizationProxy.js",
        "id": "cordova-plugin-globalization.GlobalizationProxy",
        "pluginId": "cordova-plugin-globalization",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-toast/www/inputdevice.js",
        "id": "cordova-plugin-toast.inputdevice",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.inputdevice"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/www/tvchannel.js",
        "id": "cordova-plugin-toast.tvchannel",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.tvchannel"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/www/tvwindow.js",
        "id": "cordova-plugin-toast.tvwindow",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.tvwindow"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/www/tvaudiocontrol.js",
        "id": "cordova-plugin-toast.tvaudiocontrol",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.tvaudiocontrol"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/www/drminfo.js",
        "id": "cordova-plugin-toast.drminfo",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.drminfo"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/www/application.js",
        "id": "cordova-plugin-toast.application",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.application"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/www/Media.js",
        "id": "cordova-plugin-toast.Media",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.Media"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/www/MediaPlugin.js",
        "id": "cordova-plugin-toast.MediaPlugin",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.MediaPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/www/util.js",
        "id": "cordova-plugin-toast.util",
        "pluginId": "cordova-plugin-toast"
    },
    {
        "file": "plugins/cordova-plugin-toast/www/billing.js",
        "id": "cordova-plugin-toast.billing",
        "pluginId": "cordova-plugin-toast",
        "clobbers": [
            "toast.billing"
        ]
    },
    {
        "file": "plugins/cordova-plugin-toast/src/browser/inputdeviceProxy.js",
        "id": "cordova-plugin-toast.inputdeviceProxy",
        "pluginId": "cordova-plugin-toast",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-toast/src/browser/tvwindowProxy.js",
        "id": "cordova-plugin-toast.tvwindowProxy",
        "pluginId": "cordova-plugin-toast",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-toast/src/browser/tvchannelProxy.js",
        "id": "cordova-plugin-toast.tvchannelProxy",
        "pluginId": "cordova-plugin-toast",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-toast/src/browser/sampleEPG.js",
        "id": "cordova-plugin-toast.sampleEPG",
        "pluginId": "cordova-plugin-toast"
    },
    {
        "file": "plugins/cordova-plugin-toast/src/browser/tvaudiocontrolProxy.js",
        "id": "cordova-plugin-toast.tvaudiocontrolProxy",
        "pluginId": "cordova-plugin-toast",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-toast/src/browser/drminfoProxy.js",
        "id": "cordova-plugin-toast.drminfoProxy",
        "pluginId": "cordova-plugin-toast",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-toast/src/browser/applicationProxy.js",
        "id": "cordova-plugin-toast.applicationProxy",
        "pluginId": "cordova-plugin-toast",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-toast/src/browser/mediaProxy.js",
        "id": "cordova-plugin-toast.mediaProxy",
        "pluginId": "cordova-plugin-toast",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.1.6",
    "cordova-plugin-globalization": "1.0.7",
    "cordova-plugin-network-information": "1.3.3",
    "cordova-plugin-toast": "0.1.0",
    "cordova-plugin-whitelist": "1.3.2"
}
// BOTTOM OF METADATA
});