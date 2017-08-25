cordova.define("cordova-plugin-toast.applicationProxy", function(require, exports, module) { 'use strict';

module.exports = {
    exit: function(success, fail, args) {
        window.close();
    }
};

require('cordova/exec/proxy').add('toast.application',module.exports);

});
