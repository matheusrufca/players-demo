/*
Copyright 2015 Samsung Electronics Co., Ltd.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Cordova plugin TOAST version 1.3.0 (2017-08-01 11:29:32 GMT-0300) */
;(function() {
// jshint strict:false
var require = cordova.require,
    define = cordova.define;

// file: www/inputdevice.js
define('cordova-plugin-toast.inputdevice', function(require, exports, module) {

'use strict';

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var inputdeviceExport = {
    getSupportedKeys: function (callback, error) {
        argscheck.checkArgs('fF', 'inputdevice.getSupportedKeys', arguments);
        var args = [];
        error = error || function () {};
        exec(callback, error, 'toast.inputdevice', 'getSupportedKeys', args);
    },
    getKey: function (keyName, callback, error) {
        argscheck.checkArgs('sfF', 'inputdevice.getKey', arguments);
        var args = [keyName];
        error = error || function () {};
        exec(callback, error, 'toast.inputdevice', 'getKey', args);
    },
    registerKey: function (keyName, callback, error) {
        argscheck.checkArgs('sfF', 'inputdevice.registerKey', arguments);
        var args = [keyName];
        error = error || function () {};
        exec(callback, error, 'toast.inputdevice', 'registerKey', args);
    },
    unregisterKey: function (keyName, callback, error) {
        argscheck.checkArgs('sfF', 'inputdevice.unregisterKey', arguments);
        var args = [keyName];
        error = error || function () {};
        exec(callback, error, 'toast.inputdevice', 'unregisterKey', args);
    }
};

module.exports = inputdeviceExport;

});

// file: www/tvchannel.js
define('cordova-plugin-toast.tvchannel', function(require, exports, module) {

'use strict';

var tuneModeList = ['ALL', 'DIGITAL', 'ANALOG', 'FAVORITE'];

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var tvchannelExport = {
    tune: function (tuneOption, successCallback, errorCallback) {
        argscheck.checkArgs('ooF', 'tvchannel.tune', arguments);
        if(typeof tuneOption.major != 'number') {
            throw new TypeError('tuneOption is not a number.');
        }
        if(typeof tuneOption.minor != 'number') {
            throw new TypeError('tuneOption is not a number.');
        }
        if(!successCallback.onsuccess || typeof successCallback.onsuccess != 'function') {
            throw new TypeError('successCallback.onsuccess is not a function.');
        }
        if(!successCallback.onnosignal || typeof successCallback.onnosignal != 'function') {
            throw new TypeError('successCallback.onnosignal is not a function.');
        }
        if(!successCallback.onprograminforeceived || typeof successCallback.onprograminforeceived != 'function') {
            throw new TypeError('successCallback.onprograminforeceived is not a function.');
        }

        errorCallback = errorCallback || function () {};

        var args = [tuneOption];
        exec(successCallback, errorCallback, 'toast.tvchannel', 'tune', args);
    },
    tuneUp: function (successCallback, errorCallback, tuneMode) {
        argscheck.checkArgs('oFS', 'tvchannel.tuneUp', arguments);
        if(!successCallback.onsuccess || typeof successCallback.onsuccess != 'function') {
            throw new TypeError('successCallback.onsuccess is not a function.');
        }
        if(!successCallback.onnosignal || typeof successCallback.onnosignal != 'function') {
            throw new TypeError('successCallback.onnosignal is not a function.');
        }
        if(!successCallback.onprograminforeceived || typeof successCallback.onprograminforeceived != 'function') {
            throw new TypeError('successCallback.onprograminforeceived is not a function.');
        }

        errorCallback = errorCallback || function () {};
        tuneMode = tuneMode || 'ALL';

        var match = false;
        for (var i = 0; i < tuneModeList.length; i++) {
            if (tuneMode == tuneModeList[i]) {
                match = true;
                break;
            }
        }
        if (!match) {
            throw new RangeError('tuneMode is wrong.');
        }

        var args = [tuneMode];
        exec(successCallback, errorCallback, 'toast.tvchannel', 'tuneUp', args);
    },
    tuneDown: function (successCallback, errorCallback, tuneMode) {
        argscheck.checkArgs('oFS', 'tvchannel.tuneDown', arguments);
        if(!successCallback.onsuccess || typeof successCallback.onsuccess != 'function') {
            throw new TypeError('successCallback.onsuccess is not a function.');
        }
        if(!successCallback.onnosignal || typeof successCallback.onnosignal != 'function') {
            throw new TypeError('successCallback.onnosignal is not a function.');
        }
        if(!successCallback.onprograminforeceived || typeof successCallback.onprograminforeceived != 'function') {
            throw new TypeError('successCallback.onprograminforeceived is not a function.');
        }

        errorCallback = errorCallback || function () {};
        tuneMode = tuneMode || 'ALL';

        var match = false;
        for (var i = 0; i < tuneModeList.length; i++) {
            if (tuneMode == tuneModeList[i]) {
                match = true;
                break;
            }
        }
        if (!match) {
            throw new RangeError('tuneMode is wrong.');
        }

        var args = [tuneMode];
        exec(successCallback, errorCallback, 'toast.tvchannel', 'tuneDown', args);
    },
    findChannel: function (major, minor, successCallback, errorCallback) {
        argscheck.checkArgs('nnfF', 'tvchannel.findChannel', arguments);

        errorCallback = errorCallback || function () {};

        var args = [major, minor];
        exec(successCallback, errorCallback, 'toast.tvchannel', 'findChannel', args);
    },
    getChannelList: function (successCallback, errorCallback, tuneMode, nStart, number) {
        argscheck.checkArgs('fFSNN', 'tvchannel.getChannelList', arguments);

        errorCallback = errorCallback || function () {};
        tuneMode = tuneMode || 'ALL';
        nStart = nStart || 0;
        number = number || '';

        var match = false;
        for (var i = 0; i < tuneModeList.length; i++) {
            if (tuneMode == tuneModeList[i]) {
                match = true;
                break;
            }
        }
        if (!match) {
            throw new RangeError('tuneMode is wrong.');
        }
        if(nStart < 0) {
            throw new RangeError('nStart is a negative number.');
        }
        if(number < 0) {
            throw new RangeError('number is a negative number.');
        }

        var args = [tuneMode, nStart, number];
        exec(successCallback, errorCallback, 'toast.tvchannel', 'getChannelList', args);
    },
    getCurrentChannel: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvchannel.getCurrentChannel', arguments);

        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvchannel', 'getCurrentChannel', args);
    },
    getProgramList: function (channelInfo, startTime, successCallback, errorCallback, duration) {
        argscheck.checkArgs('odfFN', 'tvchannel.getProgramList', arguments);
        if(!channelInfo.major || typeof channelInfo.major != 'number') {
            throw new TypeError('channelInfo.major is not a number.');
        }
        if(!channelInfo.minor || typeof channelInfo.minor != 'number') {
            throw new TypeError('channelInfo.minor is not a number.');
        }

        errorCallback = errorCallback || function () {};
        duration = duration || '';

        if(duration < 0) {
            throw new RangeError('duration is a negative number.');
        }

        var args = [channelInfo, startTime, duration];
        exec(successCallback, errorCallback, 'toast.tvchannel', 'getProgramList', args);
    },
    getCurrentProgram: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvchannel.getCurrentProgram', arguments);

        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvchannel', 'getCurrentProgram', args);
    },
    addChannelChangeListener: function (callback) {
        argscheck.checkArgs('f', 'tvchannel.addChannelChangeListener', arguments);

        var args = [];
        exec(callback, null, 'toast.tvchannel', 'addChannelChangeListener', args);
    },
    removeChannelChangeListener: function (callback) {
        argscheck.checkArgs('F', 'tvchannel.removeChannelChangeListener', arguments);

        var args = [];
        exec(callback, null, 'toast.tvchannel', 'removeChannelChangeListener', args);
    }
};

module.exports = tvchannelExport;

});

// file: www/tvwindow.js
define('cordova-plugin-toast.tvwindow', function(require, exports, module) {

'use strict';

var videoSourceList = [
    'TV1',
    'AV1', 'AV2', 'AV3', 'AV4',
    'SVIDEO1', 'SVIDEO2', 'SVIDEO3', 'SVIDEO4',
    'COMP1', 'COMP2', 'COMP3', 'COMP4',
    'PC1', 'PC2', 'PC3', 'PC4',
    'HDMI1', 'HDMI2', 'HDMI3', 'HDMI4',
    'SCART1', 'SCART2', 'SCART3', 'SCART4',
    'DVI1', 'DVI2', 'DVI3', 'DVI4'
];

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var tvwindowExport = {
    setSource: function (videoSource, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'tvwindow.setSource', arguments);
        if(!videoSource.type || typeof videoSource.type != 'string') {
            throw new TypeError('videoSource.type is not a string.');
        }
        if(!videoSource.number || typeof videoSource.number != 'number') {
            throw new TypeError('videoSource.number is not a number.');
        }
        var match = false;
        for (var i = 0; i < videoSourceList.length; i++) {
            if (videoSource.type + videoSource.number == videoSourceList[i]) {
                match = true;
                break;
            }
        }
        if (!match) {
            throw new TypeError('videoSource is wrong.');
        }

        errorCallback = errorCallback || function () {};

        var args = [videoSource];
        exec(successCallback, errorCallback, 'toast.tvwindow', 'setSource', args);
    },
    getSource: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvwindow.getSource', arguments);

        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvwindow', 'getSource', args);
    },
    show: function (rectangle, successCallback, errorCallback) {
        argscheck.checkArgs('afF', 'tvwindow.show', arguments);
        if(rectangle.length != 4) {
            throw new TypeError('rectangle.length is wrong.');
        }
        if(typeof rectangle[0] != 'number' || rectangle[0] < 0) {
            throw new TypeError('rectangle[0] is not a positive number.');
        }
        if(typeof rectangle[1] != 'number' || rectangle[1] < 0) {
            throw new TypeError('rectangle[1] is not a positive number.');
        }
        if(typeof rectangle[2] != 'number' || rectangle[2] < 0) {
            throw new TypeError('rectangle[2] is not a positive number.');
        }
        if(typeof rectangle[3] != 'number' || rectangle[3] < 0) {
            throw new TypeError('rectangle[3] is not a positive number.');
        }

        errorCallback = errorCallback || function () {};

        var args = [rectangle];
        exec(successCallback, errorCallback, 'toast.tvwindow', 'show', args);
    },
    hide: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvwindow.hide', arguments);

        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvwindow', 'hide', args);
    },
    getRect: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvwindow.getRect', arguments);

        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvwindow', 'getRect', args);
    }
};

module.exports = tvwindowExport;

});

// file: www/tvaudiocontrol.js
define('cordova-plugin-toast.tvaudiocontrol', function(require, exports, module) {


'use strict';

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var tvaudiocontrolExport = {
    setMute: function (mute, successCallback, errorCallback) {
        argscheck.checkArgs('*fF', 'tvaudiocontrol.setMute', arguments);
        errorCallback = errorCallback || function () {};

        if(typeof mute != 'boolean') {
            var error = new TypeError('First parameter needs to be boolean type.');
            throw error;
        }

        var args = [mute];
        exec(successCallback, errorCallback, 'toast.tvaudiocontrol', 'setMute', args);
    },
    isMute: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvaudiocontrol.isMute', arguments);
        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvaudiocontrol', 'isMute', args);
    },
    setVolume: function (volume, successCallback, errorCallback) {
        argscheck.checkArgs('nfF', 'tvaudiocontrol.setVolume', arguments);
        errorCallback = errorCallback || function () {};

        var args = [volume];
        exec(successCallback, errorCallback, 'toast.tvaudiocontrol', 'setVolume', args);
    },
    setVolumeUp: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvaudiocontrol.setVolumeUp', arguments);
        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvaudiocontrol', 'setVolumeUp', args);
    },
    setVolumeDown: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvaudiocontrol.setVolumeDown', arguments);
        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvaudiocontrol', 'setVolumeDown', args);
    },
    getVolume: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvaudiocontrol.getVolume', arguments);
        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvaudiocontrol', 'getVolume', args);
    },
    setVolumeChangeListener: function (callback, successCallback, errorCallback) {
        argscheck.checkArgs('ffF', 'tvaudiocontrol.setVolumeChangeListener', arguments);
        errorCallback = errorCallback || function () {};

        var args = [callback];
        exec(successCallback, errorCallback, 'toast.tvaudiocontrol', 'setVolumeChangeListener', args);
    },
    unsetVolumeChangeListener: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'tvaudiocontrol.unsetVolumeChangeListener', arguments);
        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.tvaudiocontrol', 'unsetVolumeChangeListener', args);
    }
};

module.exports = tvaudiocontrolExport;

});

// file: www/drminfo.js
define('cordova-plugin-toast.drminfo', function(require, exports, module) {


'use strict';

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

var drminfoExport = {
    getEsn: function (compName, successCallback, errorCallback) {
        argscheck.checkArgs('sfF', 'drminfo.getEsn', arguments);
        errorCallback = errorCallback || function () {};

        var args = [compName];
        exec(successCallback, errorCallback, 'toast.drminfo', 'getEsn', args);
    },
    getSdi: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'drminfo.getSdiId', arguments);
        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.drminfo', 'getSdi', args);
    }
};

module.exports = drminfoExport;

});

// file: www/application.js
define('cordova-plugin-toast.application', function(require, exports, module) {
'use strict';

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

module.exports = {
    exit: function () {
        exec(null, null, 'toast.application', 'exit', null);
    },
    launchApp: function (appInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'application.launchApp', arguments);
        if(!appInfo.appId || typeof appInfo.appId != 'string') {
            throw new TypeError('appControl.appId is not a string');
        }

        appInfo.data = appInfo.data || {};
        if(typeof appInfo.data != 'object') {
            throw new TypeError('appControl.data is not a object');
        }

        var args = [appInfo];
        exec(successCallback, errorCallback, 'toast.application', 'launchApp', args);
    },
    getRequestedAppInfo: function (successCallback, errorCallback) {
        argscheck.checkArgs('fF', 'application.getRequestedAppInfo', arguments);

        errorCallback = errorCallback || function () {};

        var args = [];
        exec(successCallback, errorCallback, 'toast.application', 'getRequestedAppInfo', args);
    }
};

});

// file: www/Media.js
define('cordova-plugin-toast.Media', function(require, exports, module) {


'use strict';

var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');

var mediaObjects = null;

var Media = function () {
    if(!mediaObjects) {
        this.id = utils.createUUID();
        mediaObjects = {};
        mediaObjects[this.id] = this;
        this._mediaEventCallBack = {};
        this._containerElem = -1;
        this._duration = -1;
        this._position = 0;
        this._hooks = {};
        exec(null, null, 'toast.Media', 'create',[this.id]);
    }
    else {
        throw new RangeError('Media instance exists already. toast Media supported single instance');
    }
};

// Media EventType
Media.EVENT_STATE = 'STATE';
Media.EVENT_DURATION = 'DURATION';
Media.EVENT_POSITION = 'POSITION';
Media.EVENT_BUFFERINGPROGRESS = 'BUFFERINGPROGRESS';
Media.EVENT_SUBTITLE = 'SUBTITLE';
Media.EVENT_ENDED = 'ENDED';

//Media.MEDIA_SUBTITLE = 5;

// Media states
Media.STATE_IDLE = 'IDLE';
Media.STATE_PLAYING = 'PLAYING';
Media.STATE_PAUSED = 'PAUSED';
Media.STATE_STALLED = 'STALLED';
Media.STATE_SEEK = 'SEEK';

Media._MEDIA_CONTAINER = 'CONTAINER';
Media._MEDIA_ERROR = 'ERROR';

Media.mediaEvent = function(id, value) {
    var media = mediaObjects[id];
    if(media) {
        switch(value.type) {
        case Media.EVENT_STATE :
            if(media._mediaEventCallBack.onevent && value.data.oldState === null) {
                media._mediaEventCallBack.onevent(value);
            }
            else if(media._mediaEventCallBack.onevent && value.data.oldState !== value.data.state) {
                media._mediaEventCallBack.onevent(value);
            }
            break;
        case Media.EVENT_DURATION :
            media._duration = value.data.duration;
            media._mediaEventCallBack.onevent && media._mediaEventCallBack.onevent(value);
            break;
        case Media.EVENT_POSITION :
            media._position = Number(value.data.position);
            media._mediaEventCallBack.onevent && media._mediaEventCallBack.onevent(value);
            break;
        case Media.EVENT_BUFFERINGPROGRESS :
            media._mediaEventCallBack.onevent && media._mediaEventCallBack.onevent(value);
            break;
        case Media.EVENT_SUBTITLE :
            media._mediaEventCallBack.onevent && media._mediaEventCallBack.onevent(value);
            break;
        case Media.EVENT_ENDED :
            media.stop();
            media._mediaEventCallBack.onevent && media._mediaEventCallBack.onevent(value);
            break;
        case Media._MEDIA_CONTAINER :
            media._containerElem = value.data.containerElem;
            break;
        case Media._MEDIA_ERROR :
            media._mediaEventCallBack.onerror && media._mediaEventCallBack.onerror(value);
            break;
        default :
            console.log('Unhandled Media.mediaEvent :: ' + value.type);
            break;
        }
    }
    else {
        console.log('Received Media.onStatus callback for unknown media:: ' + id);
    }
};

Media.getInstance = function() {
    if(mediaObjects && typeof mediaObjects == 'object') {
        for(var key in mediaObjects) {
            if (mediaObjects.hasOwnProperty(key)) {
                return mediaObjects[key];
            }
        }
    }
    else {
        return new Media();
    }
};

Media.prototype.open = function(mediaUrl) {
    argscheck.checkArgs('s', 'Media.open', arguments);
    this.src = mediaUrl;
    invokeHooks('beforeopen', [this].concat(arguments));
    exec(null, null, 'toast.Media', 'open', [this.id,this.src]);
    invokeHooks('afteropen', [this].concat(arguments));
};

Media.prototype.getContainerElement = function() {
    return this._containerElem;
};

Media.prototype.play = function() {
    invokeHooks('beforeplay', [this].concat(arguments));
    exec(null, null, 'toast.Media', 'play', [this.id]);
    invokeHooks('afterplay', [this].concat(arguments));
};

Media.prototype.stop = function() {
    var me = this,
        media = mediaObjects[this.id];
    media.resetPlugin();
    exec(function() {
        me._position = 0;
        me._duration = -1;
    }, null, 'toast.Media', 'stop', [this.id]);
};

Media.prototype.seekTo = function(milliseconds) {
    argscheck.checkArgs('n', 'Media.seekTo', arguments);
    var me = this;
    exec(function(p) {
        me._position = p;
    }, null, 'toast.Media', 'seekTo', [this.id, milliseconds]);
};

Media.prototype.pause = function() {
    exec(null, null, 'toast.Media', 'pause', [this.id]);
};

Media.prototype.getDuration = function() {
    return this._duration;
};

Media.prototype.getCurrentPosition = function() {
    return this._position;
};

Media.prototype.setListener = function(listener) {
    argscheck.checkArgs('o', 'Media.setListener', arguments);
    if(arguments[0].onevent && typeof arguments[0].onevent !== 'function') {
        throw new TypeError('Type of listener.onevnet is not function');
    }
    if(arguments[0].onerror && typeof arguments[0].onerror !== 'function') {
        throw new TypeError('Type of listener.onerror is not function');
    }
    mediaObjects[this.id]._mediaEventCallBack = listener;
};

Media.prototype.unsetListener = function() {
    mediaObjects[this.id]._mediaEventCallBack = {};
};

Media.prototype.resetHook = function () {
    for(var hook in this._hooks) {
        if(this._hooks.hasOwnProperty(hook)) {
            for(var i=this._hooks[hook].length-1; i>=0; i--) {
                delete this._hooks[hook][i];
            }
            delete this._hooks[hook];
        }
    }
    this._hooks = {};
};
Media.prototype.registerHook = function (hook, fn) {
    this._hooks[hook] = this._hooks[hook] || [];
    this._hooks[hook].push(fn);
};
Media.prototype.unregisterHook = function (hook, fn) {
    if(!this._hooks[hook]) {
        return;
    }
    for(var i=this._hooks[hook].length-1; i>=0; i--) {
        if(this._hooks[hook][i] === fn) {
            this._hooks[hook].splice(i, 1);
        }
    }
};
Media.prototype.resetPlugin = function () {
    this.resetHook();
};
Media.prototype.attachPlugin = function (plugin) {
    if(plugin.onAttachToMedia) {
        plugin.onAttachToMedia(this);
    }
};

//synchronize VideoRect With Container Element
Media.prototype.syncVideoRect = function() {
    var me = this;
    exec(function(p) {
        me._position = p;
    }, null, 'toast.Media', 'syncVideoRect');
};

Media.prototype.setSubtitlePath = function(path) {
    argscheck.checkArgs('s', 'Media.setSubtitlePath', arguments);
    exec(null, null, 'toast.Media', 'setSubtitlePath',[this.id,path]);
};

Media.prototype.getSubtitleLanguageList = function(successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'Media.getSubtitleLanguageList', arguments);
    errorCallback = errorCallback || function () {};
    exec(successCallback, errorCallback, 'toast.Media', 'getSubtitleLanguageList',[this.id]);
};

Media.prototype.setSubtitleLanguage = function(language) {
    argscheck.checkArgs('s', 'Media.setSubtitleLanguage', arguments);
    exec(null, null, 'toast.Media', 'setSubtitleLanguage',[this.id,language]);
};

Media.prototype.setSubtitleSync = function(milliseconds) {
    argscheck.checkArgs('n', 'Media.setSubtitleSync', arguments);
    exec(null, null, 'toast.Media', 'setSubtitleSync',[this.id,milliseconds]);
};

function invokeHooks (hook, args) {
    var media = args[0];
    args = args.slice(1);
    if(!media._hooks[hook]) {
        return;
    }
    for(var i=0; i<media._hooks[hook].length; i++) {
        media._hooks[hook][i](media, args);
    }
}

module.exports = Media;

});

// file: www/MediaPlugin.js
define('cordova-plugin-toast.MediaPlugin', function(require, exports, module) {


'use strict';

function MediaPlugin (opts) {
    this.options = opts;
}

MediaPlugin.prototype.setOption = function (key, value) {
    this.options = this.options || {};
    this.options[key] = value;
};
MediaPlugin.prototype.unsetOption = function (key) {
    if(typeof this.options === 'object' && this.options.hasOwnProperty(key)) {
        delete this.options[key];
    }
};

module.exports = MediaPlugin;

});

// file: www/util.js
define('cordova-plugin-toast.util', function(require, exports, module) {
'use strict';

function trim(str) {
    if (typeof str !== 'string') {
        return str;
    }
    return str.replace(/^\s+|\s+$/g, '');
}

function isHTMLElement(value) {
    return (value instanceof HTMLElement);
}

function isChildOf(element, parent) {
    if (!isHTMLElement(element) || !element.parentElement) {
        return false;
    }
    if (element.parentElement === parent) {
        return true;
    }
    else {
        return isChildOf(element.parentElement, parent);
    }
}

function contains(parent, element) {
    return isChildOf(element, parent);
}

function removeClass(element, classnm) {
    if (element instanceof window.NodeList) {
        for (var i = 0; i < element.length; i++) {
            removeClass(element[i], classnm);
        }
        return;
    }
    if (!isHTMLElement(element) || typeof classnm !== 'string') {
        return false;
    }
    var className = element.className + '';
    var regex = new RegExp('(?:^|\\s+)' + classnm + '(?:\\s+|$)', 'g');
    className = className.replace(regex, ' ');
    element.className = className;

    if (hasClass(element, classnm)) { // still have the class
        removeClass(element, classnm);
    }
    element.className = trim(element.className);

    return true;
}

function addClass(element, classnm) {
    var i;
    if (element instanceof window.NodeList) {
        for (i = 0; i < element.length; i++) {
            addClass(element[i], classnm);
        }
        return;
    }
    if (!isHTMLElement(element) || typeof classnm !== 'string') {
        return false;
    }
    var tmp = classnm.split(' ');
    if (tmp.length > 1) {
        var success = true;
        for (i = 0; i < tmp.length; i++) {
            if (!addClass(element, tmp[i])) {
                success = false;
            }
        }
        return success;
    }

    if (hasClass(element, classnm)) {
        return false;
    }
    element.className = trim([element.className, classnm].join(' '));
    return true;
}

function hasClass(element, classnm) {
    if (!isHTMLElement(element) || typeof classnm !== 'string') {
        return;
    }
    var className = element.className + '';
    var regex = new RegExp('(?:^|\\s+)' + classnm + '(?:\\s+|$)', 'g');
    return regex.test(className);
}

function getElementExp(elmt) {
    if (!isHTMLElement(elmt)) {
        return '';
    }
    var id = elmt.id || '';
    var cls = elmt.className || '';
    return elmt.tagName + (id ? ('#' + id) : '') + (cls ? ('.' + cls.replace(/ /g, '.')) : '');
}

function isRemoteUrl(url) {
    var reg = /^((ftp|https?):\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)/igm;
    return !!reg.test(url);
}

function getValueOf(exp, base) {
    if (typeof exp !== 'string') {
        return exp;
    }
    var depths = exp.split('.');
    if (depths.length && depths[0] === 'window') {
        depths.shift(); // remove first 'window'
    }

    var curValue = base || window;
    for (var i = 0, len = depths.length; i < len; i++) {
        if (typeof curValue[depths[i]] === 'undefined') {
            return undefined;
        }
        curValue = curValue[depths[i]];
    }
    return curValue;
}

/**
 * getBoundingRect has argument 'mode' as 2nd parameter.
 * This will determine which rectangle would be returned.
 * +-----------------------+--> mode: 'margin'
 * |        margin         |
 * |  +-----------------+--+--> mode: default(undefined)
 * |  |     border      |  |
 * |  |  +-----------+--+--+--> mode: 'innerborder'
 * |  |  |  padding  |  |  |
 * |  |  |  +-----+--+--+--+--> mode: 'innerpadding'
 * |  |  |  |     |  |  |  |
 * |  |  |  +-----+  |  |  |
 * |  |  +-----------+  |  |
 * |  +-----------------+  |
 * +-----------------------+
 */
function getBoundingRect(el, mode) {
    var width = 0,
        height = 0,
        left = 0,
        top = 0,
        borderLeft,
        borderRight,
        borderTop,
        borderBottom,
        marginLeft,
        marginRight,
        marginTop,
        marginBottom,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom;
    if (el && el === el.window) { // window
        width = el.document.documentElement.clientWidth;
        height = el.document.documentElement.clientHeight;
        return {
            left: 0,
            top: 0,
            width: width,
            height: height,
            right: width,
            bottom: height
        };
    }
    if (el && el.nodeType && el.nodeType === 9) { // document
        width = Math.max(el.body.scrollWidth, el.documentElement.scrollWidth, el.body.offsetWidth, el.documentElement.offsetWidth, el.documentElement.clientWidth);
        height = Math.max(el.body.scrollHeight, el.documentElement.scrollHeight, el.body.offsetHeight, el.documentElement.offsetHeight, el.documentElement.clientHeight);
        return {
            left: 0,
            top: 0,
            width: width,
            height: height,
            right: width,
            bottom: height
        };
    }

    if (!isHTMLElement(el) || !el.ownerDocument) {
        return null;
    }

    if ('getBoundingClientRect' in document.documentElement) {
        var clientRect = el.getBoundingClientRect();
        if (el === el.ownerDocument.body) {
            left = document.body.offsetLeft + parseFloat(getStyle(el, 'marginLeft') || 0);
            top = document.body.offsetTop + parseFloat(getStyle(el, 'marginTop') || 0);
        }
        else {
            left += clientRect.left;
            top += clientRect.top;

            // left += (window.pageXOffset || el.ownerDocument.documentElement.scrollLeft || document.body.scrollLeft);
            // top += (window.pageYOffset || el.ownerDocument.documentElement.scrollTop || document.body.scrollTop);
            left -= el.ownerDocument.documentElement.clientLeft;
            top -= el.ownerDocument.documentElement.clientTop;
        }
        width = clientRect.width;
        height = clientRect.height;
    }
    else if (typeof el.offsetWidth !== 'undefined' || typeof el.offsetHeight !== 'undefined') {
        left = parseInt(el.offsetLeft, 10);
        top = parseInt(el.offsetTop, 10);
        width = parseInt(el.offsetWidth, 10);
        height = parseInt(el.offsetHeight, 10);
    }
    else {
        return null;
    }

    // including margin as bounding rect
    if (mode && mode === 'margin') {
        marginLeft = parseInt(getStyle(el, 'marginLeft'), 10) || 0;
        marginRight = parseInt(getStyle(el, 'marginRight'), 10) || 0;
        marginTop = parseInt(getStyle(el, 'marginTop'), 10) || 0;
        marginBottom = parseInt(getStyle(el, 'marginBottom'), 10) || 0;
        left -= marginLeft;
        top -= marginTop;
        width += marginLeft + marginRight;
        height += marginTop + marginBottom;

        return {
            left: left,
            top: top,
            width: width,
            height: height,
            right: left + width,
            bottom: top + height,
            margin: {
                left: marginLeft,
                right: marginRight,
                top: marginTop,
                bottom: marginBottom
            }
        };
    }
    else if (mode && mode === 'innerborder') {
        borderLeft = parseInt(getStyle(el, 'borderLeftWidth'), 10) || 0;
        borderRight = parseInt(getStyle(el, 'borderRightWidth'), 10) || 0;
        borderTop = parseInt(getStyle(el, 'borderTopWidth'), 10) || 0;
        borderBottom = parseInt(getStyle(el, 'borderBottomWidth'), 10) || 0;
        left += borderLeft;
        top += borderTop;
        width -= borderLeft + borderRight;
        height -= borderTop + borderBottom;

        return {
            left: left,
            top: top,
            width: width,
            height: height,
            right: left + width,
            bottom: top + height,
            border: {
                left: borderLeft,
                right: borderRight,
                top: borderTop,
                bottom: borderBottom
            }
        };
    }
    else if (mode && mode === 'innerpadding') {
        borderLeft = parseInt(getStyle(el, 'borderLeftWidth'), 10) || 0;
        borderRight = parseInt(getStyle(el, 'borderRightWidth'), 10) || 0;
        borderTop = parseInt(getStyle(el, 'borderTopWidth'), 10) || 0;
        borderBottom = parseInt(getStyle(el, 'borderBottomWidth'), 10) || 0;
        paddingLeft = parseInt(getStyle(el, 'paddingLeft'), 10) || 0;
        paddingRight = parseInt(getStyle(el, 'paddingRight'), 10) || 0;
        paddingTop = parseInt(getStyle(el, 'paddingTop'), 10) || 0;
        paddingBottom = parseInt(getStyle(el, 'paddingBottom'), 10) || 0;
        left += borderLeft + paddingLeft;
        top += borderTop + paddingTop;
        width -= borderLeft + paddingLeft + paddingRight + borderRight;
        height -= borderTop + paddingTop + paddingBottom + borderBottom;

        return {
            left: left,
            top: top,
            width: width,
            height: height,
            right: left + width,
            bottom: top + height,
            border: {
                left: borderLeft,
                right: borderRight,
                top: borderTop,
                bottom: borderBottom
            },
            padding: {
                left: paddingLeft,
                right: paddingRight,
                top: paddingTop,
                bottom: paddingBottom
            }
        };
    }
    else {
        return {
            left: left,
            top: top,
            width: width,
            height: height,
            right: left + width,
            bottom: top + height
        };
    }
}

function getPosition(elem) {
    var offsetParent, offset,
        parentOffset = {
            top: 0,
            left: 0
        };

    // Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
    if (getStyle(elem, 'position') === 'fixed') {
        // We assume that getBoundingClientRect is available when computed position is fixed
        offset = elem.getBoundingClientRect();

    }
    else {
        // Get *real* offsetParent
        offsetParent = getOffsetParent(elem);

        // Get correct offsets
        offset = getBoundingOffset(elem);
        parentOffset = getBoundingOffset(offsetParent);

        // Add offsetParent borders
        parentOffset.top += parseFloat(getStyle(offsetParent, 'borderTopWidth'));
        parentOffset.left += parseFloat(getStyle(offsetParent, 'borderLeftWidth'));
    }

    offset.top -= parentOffset.top;
    offset.left -= parentOffset.left;

    offset.top -= parseFloat(getStyle(elem, 'marginTop'));
    offset.left -= parseFloat(getStyle(elem, 'marginLeft'));

    // Subtract parent offsets and element margins
    return offset;
}

function getOffsetParent(el) {
    var docElem = el.ownerDocument.documentElement;
    var offsetParent = el.offsetParent || docElem;

    while (offsetParent && getStyle(offsetParent, 'position') === 'static') {
        offsetParent = offsetParent.offsetParent;
    }

    return offsetParent || docElem;
}

function getBoundingSize(el, mode) {
    if (!isHTMLElement(el)) {
        return null;
    }
    var rect = getBoundingRect(el, mode);
    return {
        width: rect.width,
        height: rect.height
    };
}

function getBoundingOffset(el, mode) {
    if (!isHTMLElement(el)) {
        return null;
    }
    var rect = getBoundingRect(el, mode);
    return {
        left: rect.left,
        top: rect.top
    };
}

function getElementVisibility(el) {
    if (!isHTMLElement(el)) {
        return false;
    }
    if (getStyle(el, 'display') === 'none' || getStyle(el, 'visibility') === 'hidden' || getStyle(el, 'opacity') === '0') {
        return false;
    }
    if (el.parentElement && !getElementVisibility(el.parentElement)) {
        return false;
    }
    return true;
}

var camelCache = {};
var rexHypen = /-(.)/gi;
function camelCase(input) {
    if (!rexHypen.test(input)) {
        return input;
    }
    if (camelCache[input]) {
        return camelCache[input];
    }
    camelCache[input] = input.toLowerCase().replace(rexHypen, function(match, word, index) {
        return index === 0 ? word : word.toUpperCase();
    });
    return camelCache[input];
}

function setStyle(element, prop, value) {
    if (element instanceof window.NodeList) {
        for (var i = 0; i < element.length; i++) {
            setStyle(element[i], prop, value);
        }
        return;
    }

    if (!isHTMLElement(element)) {
        return;
    }

    if (prop instanceof Object) {
        for (var p in prop) {
            if (typeof p === 'string' && prop.hasOwnProperty(p)) {
                setStyle(element, camelCase(p), prop[p]);
            }
        }
    }
    else if (typeof prop === 'string') {
        prop = camelCase(prop);
        element.style[prop] = value;
    }
}

function getStyle(element, prop) {
    prop = camelCase(prop);
    return element.currentStyle ?
        element.currentStyle[prop] :
        document.defaultView.getComputedStyle(element, '')[prop];
}

function createElement(tagName, attributes, children) {
    var elem = document.createElement(tagName);
    for (var attr in attributes) {
        if (attr === 'className') { // 'class' is keyword for JavaScript, so we use 'className' for the name
            elem.setAttribute('class', attributes[attr]);
        }
        else {
            elem.setAttribute(attr, attributes[attr]);
        }
    }
    if (typeof children === 'string') {
        elem.appendChild(document.createTextNode(children));
    }
    else if (children && children.length) {
        for (var i = 0; children && i < children.length; i++) {
            if (isHTMLElement(children[i])) {
                elem.appendChild(children[i]);
            }
        }
    }
    else if (isHTMLElement(children)) {
        elem.appendChild(children);
    }
    return elem;
}

module.exports = {
    trim: trim,
    createElement: createElement,
    isHTMLElement: isHTMLElement,
    isChildOf: isChildOf,
    contains: contains,
    removeClass: removeClass,
    hasClass: hasClass,
    addClass: addClass,
    getElementExp: getElementExp,
    isRemoteUrl: isRemoteUrl,
    getValueOf: getValueOf,
    getBoundingRect: getBoundingRect,
    getPosition: getPosition,
    getOffsetParent: getOffsetParent,
    getBoundingSize: getBoundingSize,
    getBoundingOffset: getBoundingOffset,
    getElementVisibility: getElementVisibility,
    setStyle: setStyle,
    getStyle: getStyle
};

});

// file: www/billing.js
define('cordova-plugin-toast.billing', function(require, exports, module) {
'use strict';

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec');

module.exports = {
    init: function(billingInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'billing.init', arguments);

        errorCallback = errorCallback || function() {};

        if(device.platform != 'sectv-tizen') {
            throw new Error('Not supported platform');
        }

        // madatory param
        if (!billingInfo.key || typeof billingInfo.key != 'object') {
            throw new TypeError('billingInfo.key is not a object');
        }
        if (!billingInfo.appId || typeof billingInfo.appId != 'string') {
            throw new TypeError('billingInfo.appId is not a string');
        }

        // optional param
        if (billingInfo.countryCode && typeof billingInfo.countryCode != 'string') {
            throw new TypeError('billingInfo.countryCode is not a string');
        }
        if (billingInfo.containerId && typeof billingInfo.containerId != 'string') {
            throw new TypeError('billingInfo.containerId is not a string');
        }
        if (billingInfo.lang && typeof billingInfo.lang != 'string') {
            throw new TypeError('billingInfo.countryCode is not a string');
        }
        if (billingInfo.gaWebPropertyId && typeof billingInfo.gaWebPropertyId != 'string') {
            throw new TypeError('billingInfo.gaWebPropertyId is not a string');
        }
        if (billingInfo.serverType && typeof billingInfo.serverType != 'string') {
            throw new TypeError('billingInfo.serverType is not a string');
        }

        var args = [billingInfo];
        exec(successCallback, errorCallback, 'toast.billing', 'init', args);
    },
    buyProduct: function(productInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'billing.buyProduct', arguments);

        errorCallback = errorCallback || function() {};

        if(device.platform != 'sectv-tizen') {
            throw new Error('Not supported platform');
        }

        // mandatory param
        if (!productInfo.productId || typeof productInfo.productId != 'string') {
            throw new TypeError('productInfo.strServer is not a string');
        }

        // optional param
        if (productInfo.productName && typeof productInfo.productName != 'string') {
            throw new TypeError('productInfo.productName is not a string');
        }
        if (productInfo.currency && typeof productInfo.currency != 'string') {
            throw new TypeError('productInfo.currency is not a string');
        }
        if (productInfo.amount && typeof productInfo.amount != 'number') {
            throw new TypeError('productInfo.amount is not a number');
        }
        if (productInfo.period && typeof productInfo.period != 'string') {
            throw new TypeError('productInfo.period is not a string');
        }
        if (productInfo.duration && typeof productInfo.duration != 'number') {
            throw new TypeError('productInfo.duration is not a number');
        }
        if (productInfo.userId && typeof productInfo.userId != 'string') {
            throw new TypeError('productInfo.userId is not a string');
        }
        if (productInfo.onExit && typeof productInfo.onExit != 'function') {
            throw new TypeError('productInfo.onExit is not a function');
        }
        if (productInfo.showBackButton && typeof productInfo.showBackButton != 'boolean') {
            throw new TypeError('productInfo.showBackButton is not a boolean');
        }
        if (productInfo.enablePaymentRecoverFlow && typeof productInfo.enablePaymentRecoverFlow != 'boolean') {
            throw new TypeError('productInfo.enablePaymentRecoverFlow is not a boolean');
        }
        if (productInfo.titles && typeof productInfo.titles != 'object') {
            throw new TypeError('productInfo.titles is not a object');
        }
        if (productInfo.orderId && typeof productInfo.orderId != 'string') {
            throw new TypeError('productInfo.orderId is not a string');
        }
        if (productInfo.oerderItemPath && typeof productInfo.oerderItemPath != 'string') {
            throw new TypeError('productInfo.oerderItemPath is not a string');
        }

        var args = [productInfo];
        exec(successCallback, errorCallback, 'toast.billing', 'buyProduct', args);
    },
    cancelSubscription: function(productInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'billing.cancelSubscription', arguments);

        errorCallback = errorCallback || function() {};

        if(device.platform != 'sectv-tizen') {
            throw new Error('Not supported platform');
        }

        // mandatory param
        if (!productInfo.productId || typeof productInfo.productId != 'string') {
            throw new TypeError('productInfo.productId is not a string');
        }
        if (!productInfo.userId || typeof productInfo.userId != 'string') {
            throw new TypeError('productInfo.userId is not a string');
        }

        var args = [productInfo];
        exec(successCallback, errorCallback, 'toast.billing', 'cancelSubscription', args);
    },
    checkPurchaseStatus: function(productInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'billing.checkPurchaseStatus', arguments);

        errorCallback = errorCallback || function() {};

        if(device.platform != 'sectv-tizen') {
            throw new Error('Not supported platform');
        }

        // mandatory param
        if (!productInfo.productId || typeof productInfo.productId != 'string') {
            throw new TypeError('productInfo.productId is not a string');
        }
        if (!productInfo.userId || typeof productInfo.userId != 'string') {
            throw new TypeError('productInfo.userId is not a string');
        }

        var args = [productInfo];
        exec(successCallback, errorCallback, 'toast.billing', 'checkPurchaseStatus', args);
    },
    requestPurchasesList: function(productInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'billing.requestPurchasesList', arguments);

        errorCallback = errorCallback || function() {};

        if(device.platform != 'sectv-tizen') {
            throw new Error('Not supported platform');
        }

        if(!productInfo.itemType || typeof productInfo.itemType != 'string') {
            throw new TypeError('productInfo.itemType is not a string');
        }

        if(!productInfo.pageNumber || typeof productInfo.pageNumber != 'number') {
            throw new TypeError('productInfo.pageNumber is not a number');
        }

        var args = [productInfo];
        exec(successCallback, errorCallback, 'toast.billing', 'requestPurchasesList', args);

    },
    requestProductsList: function(productInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'billing.requestProductsList', arguments);

        errorCallback = errorCallback || function() {};

        if(device.platform != 'sectv-tizen') {
            throw new Error('Not supported platform');
        }

        if(productInfo.pageSize && typeof productInfo.pageSize != 'number') {
            throw new TypeError('productInfo.pageSize is not a number');
        }
        if(productInfo.pageNumber && typeof productInfo.pageNumber != 'number') {
            throw new TypeError('productInfo.pageNumber is not a number');
        }

        if(productInfo.pageSize && ((productInfo.pageSize < 0) || (productInfo.pageSize > 100))) {
            throw new RangeError('productInfo.pageSize value is RangeError');
        }

        if(productInfo.pageNumber && (productInfo.pageNumber < 0)) {
            throw new RangeError('productInfo.pageNumber value is RangeError');
        }

        var args = [productInfo];
        exec(successCallback, errorCallback, 'toast.billing', 'requestProductsList', args);

    },
    verifyPurchase: function(productInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'billing.verifyPurchase', arguments);

        errorCallback = errorCallback || function() {};

        if(device.platform != 'sectv-tizen') {
            throw new Error('Not supported platform');
        }

        if(!productInfo.invoiceId || typeof productInfo.invoiceId != 'string') {
            throw new TypeError('productInfo.invoiceId is not a string');
        }

        var args = [productInfo];
        exec(successCallback, errorCallback, 'toast.billing', 'verifyPurchase', args);

    },
    applyProduct: function(productInfo, successCallback, errorCallback) {
        argscheck.checkArgs('ofF', 'billing.applyProduct', arguments);

        errorCallback = errorCallback || function() {};

        if(device.platform != 'sectv-tizen') {
            throw new Error('Not supported platform');
        }

        if(!productInfo.invoiceId || typeof productInfo.invoiceId != 'string') {
            throw new TypeError('productInfo.invocieId is not a string');
        }

        var args = [productInfo];
        exec(successCallback, errorCallback, 'toast.billing', 'applyProduct', args);
    }
};

});

// file: src/sectv-tizen/inputdeviceProxy.js
define('cordova-plugin-toast.inputdeviceProxy', function(require, exports, module) {

'use strict';

module.exports = {
    getSupportedKeys: function (success, fail, args) {
        try {
            var supportedKeys = [];
            supportedKeys = tizen.tvinputdevice.getSupportedKeys();
            supportedKeys.push({name: 'ArrowUp', code: 38});
            supportedKeys.push({name: 'ArrowDown', code: 40});
            supportedKeys.push({name: 'ArrowLeft', code: 37});
            supportedKeys.push({name: 'ArrowRight', code: 39});
            supportedKeys.push({name: 'Enter', code: 13});
            supportedKeys.push({name: 'Return', code: 10009});
            setTimeout(function() {
                success(supportedKeys);
            }, 0);
        }
        catch (e) {
            var error = new Error(e.message);
            error.name = e.name;
            setTimeout(function() {
                fail(e);
            }, 0);
        }
    },
    getKey: function(success, fail, args) {
        try {
            var inputDeviceKey = tizen.tvinputdevice.getKey(args[0]);
            setTimeout(function() {
                success(inputDeviceKey);
            }, 0);
        }
        catch (e) {
            var error;
            if(e.name === 'InvalidValuesError') {
                error = new RangeError(e.message);
            }
            else {
                error = new Error(e.message);
            }
            error.name = e.name;
            setTimeout(function() {
                fail(error);
            }, 0);
        }
    },
    registerKey: function(success, fail, args) {
        try {
            tizen.tvinputdevice.registerKey(args[0]);
            setTimeout(function() {
                success();
            }, 0);
        }
        catch (e) {
            var error;
            if(e.name === 'InvalidValuesError') {
                error = new RangeError(e.message);
            }
            else {
                error = new Error(e.message);
            }
            error.name = e.name;
            setTimeout(function() {
                fail(error);
            }, 0);
        }
    },
    unregisterKey: function(success, fail, args) {
        try {
            tizen.tvinputdevice.unregisterKey(args[0]);
            setTimeout(function() {
                success();
            }, 0);
        }
        catch (e) {
            var error;
            if(e.name === 'InvalidValuesError') {
                error = new RangeError(e.message);
            }
            else {
                error = new Error(e.message);
            }
            error.name = e.name;
            setTimeout(function() {
                fail(error);
            }, 0);
        }
    }
};

require('cordova/exec/proxy').add('toast.inputdevice',module.exports);

});

// file: src/sectv-tizen/tvwindowProxy.js
define('cordova-plugin-toast.tvwindowProxy', function(require, exports, module) {

'use strict';

var windowType = 'MAIN';

module.exports = {
    setSource: function (success, fail, args) {
        try {
            var match = -1;

            tizen.systeminfo.getPropertyValue('VIDEOSOURCE', function (videoSource) {
                var connectedVideoSources = videoSource.connected;
                for (var i = 0; i < connectedVideoSources.length; i++) {
                    if (args[0].type == connectedVideoSources[i].type && args[0].number == connectedVideoSources[i].number) {
                        match = i;
                        break;
                    }
                }

                if (match != -1) {
                    tizen.tvwindow.setSource(connectedVideoSources[match], success, fail, windowType);
                }
                else {
                    setTimeout(function () {
                        fail(new Error('Fail to find source.'));
                    }, 0);
                }
            });

        }
        catch (e) {
            fail(e);
        }
    },
    getSource: function (success, fail, args) {
        try {
            var sourceInfo = tizen.tvwindow.getSource(windowType);

            setTimeout(function () {
                success(sourceInfo);
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    },
    show: function (success, fail, args) {
        var rect = [];

        rect[0] = args[0][0] + 'px';
        rect[1] = args[0][1] + 'px';
        rect[2] = args[0][2] + 'px';
        rect[3] = args[0][3] + 'px';

        try {
            tizen.tvwindow.show(success, fail, rect, windowType);
        }
        catch (e) {
            fail(e);
        }
    },
    hide: function (success, fail, args) {
        try {
            tizen.tvwindow.hide(success, fail, windowType);
        }
        catch (e) {
            fail(e);
        }
    },
    getRect: function (success, fail, args) {
        try {
            tizen.tvwindow.getRect(success, fail, 'px', windowType);
        }
        catch (e) {
            fail(e);
        }
    }
};

require('cordova/exec/proxy').add('toast.tvwindow', module.exports);

});

// file: src/sectv-tizen/tvchannelProxy.js
define('cordova-plugin-toast.tvchannelProxy', function(require, exports, module) {

'use strict';

//var tizenutil = require('cordova-plugin-toast.tizenutil');
var windowType = 'MAIN';

var channelChangeCallback = [];

module.exports = {
    tune: function (success, fail, args) {
        try {
            var match = -1;

            tizen.tvchannel.getChannelList(function (channelList) {
                for (var i = 0; i < channelList.length; i++) {
                    if (args[0].major == channelList[i].major && args[0].minor == channelList[i].minor) {
                        match = i;
                        break;
                    }
                }

                if (match != -1) {
                    tizen.tvchannel.tune(channelList[match], success, fail, windowType);
                }
                else {
                    setTimeout(function () {
                        fail(new Error('Fail to find source.'));
                    }, 0);
                }
            });
        }
        catch (e) {
            fail(e);
        }
    },
    tuneUp: function (success, fail, args) {
        try {
            tizen.tvchannel.tuneUp(success, fail, args[0], windowType);
        }
        catch (e) {
            fail(e);
        }
    },
    tuneDown: function (success, fail, args) {
        try {
            tizen.tvchannel.tuneDown(success, fail, args[0], windowType);
        }
        catch (e) {
            fail(e);
        }
    },
    findChannel: function (success, fail, args) {
        try {
            tizen.tvchannel.findChannel(args[0], args[1], success, fail);
        }
        catch (e) {
            fail(e);
        }
    },
    getChannelList: function (success, fail, args) {
        try {
            tizen.tvchannel.getChannelList(success, fail, args[0], args[1], args[2]);
        }
        catch (e) {
            fail(e);
        }
    },
    getCurrentChannel: function (success, fail, args) {
        try {
            var channelInfo = tizen.tvchannel.getCurrentChannel(windowType);

            if (typeof channelInfo == 'object') {
                setTimeout(function () {
                    success(channelInfo);
                }, 0);
            }
            else {
                setTimeout(function () {
                    fail({
                        code: 9,
                        name: 'NOT_SUPPORTED_ERR',
                        message: 'Any other error occurs on platform.'
                    });
                }, 0);
            }
        }
        catch (e) {
            fail(e);
        }
    },
    getProgramList: function (success, fail, args) {
        try {
            var match = -1;

            tizen.tvchannel.getChannelList(function (channelList) {
                for (var i = 0; i < channelList.length; i++) {
                    if (args[0].major == channelList[i].major && args[0].minor == channelList[i].minor) {
                        match = i;
                        break;
                    }
                }

                if (match != -1) {
                    var TZDate = new tizen.TZDate(args[1]);
                    tizen.tvchannel.getProgramList(channelList[match], TZDate, success, fail, args[2]);
                }
                else {
                    setTimeout(function () {
                        fail(new Error('Fail to find source.'));
                    }, 0);
                }
            });
        }
        catch (e) {
            fail(e);
        }
    },
    getCurrentProgram: function (success, fail, args) {
        try {
            var programInfo = tizen.tvchannel.getCurrentProgram(windowType);

            if (typeof programInfo == 'object') {
                setTimeout(function () {
                    success(programInfo);
                }, 0);
            }
            else {
                setTimeout(function () {
                    fail({
                            code: 9,
                            name: 'NOT_SUPPORTED_ERR',
                            message: 'Any other error occurs on platform.'
                        });
                }, 0);
            }
        }
        catch (e) {
            fail(e);
        }
    },
    addChannelChangeListener: function (success, fail, args) {
        channelChangeCallback.push({
            callback: success,
            id: tizen.tvchannel.addChannelChangeListener(success, windowType)
        });
    },
    removeChannelChangeListener: function (success, fail, args) {
        var i;
        if(success) {
            for (i = 0; i < channelChangeCallback.length; i++) {
                if (success === channelChangeCallback[i].callback) {
                    tizen.tvchannel.removeChannelChangeListener(channelChangeCallback[i].id);
                    channelChangeCallback.splice(i, 1);
                }
            }
        }
        else {
            for (i = 0; i < channelChangeCallback.length; i++) {
                tizen.tvchannel.removeChannelChangeListener(channelChangeCallback[i].id);
            }
            channelChangeCallback = [];
        }
    }
};

require('cordova/exec/proxy').add('toast.tvchannel', module.exports);

});

// file: src/sectv-tizen/tvaudiocontrolProxy.js
define('cordova-plugin-toast.tvaudiocontrolProxy', function(require, exports, module) {


'use strict';

module.exports = {
    setMute: function (success, fail, args) {
        try {
            tizen.tvaudiocontrol.setMute(args[0]);

            setTimeout(function () {
                success();
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    },
    isMute: function (success, fail, args) {
        try {
            var result = tizen.tvaudiocontrol.isMute();

            if (typeof result == 'boolean') {
                setTimeout(function () {
                    success(result);
                }, 0);
            }
        }
        catch (e) {
            fail(e);
        }
    },
    setVolume: function (success, fail, args) {
        try {
            tizen.tvaudiocontrol.setVolume(args[0]);

            setTimeout(function () {
                success();
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    },
    setVolumeUp: function (success, fail, args) {
        try {
            tizen.tvaudiocontrol.setVolumeUp();

            setTimeout(function () {
                success();
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    },
    setVolumeDown: function (success, fail, args) {
        try {
            tizen.tvaudiocontrol.setVolumeDown();

            setTimeout(function () {
                success();
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    },
    getVolume: function (success, fail, args) {
        try {
            var result = tizen.tvaudiocontrol.getVolume();

            if (typeof result == 'number') {
                setTimeout(function () {
                    success(result);
                }, 0);
            }
        }
        catch (e) {
            fail(e);
        }
    },
    setVolumeChangeListener: function (success, fail, args) {
        try {
            tizen.tvaudiocontrol.setVolumeChangeListener(args[0]);

            setTimeout(function () {
                success();
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    },
    unsetVolumeChangeListener: function (success, fail, args) {
        try {
            tizen.tvaudiocontrol.unsetVolumeChangeListener();

            setTimeout(function () {
                success();
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    }
};

require('cordova/exec/proxy').add('toast.tvaudiocontrol', module.exports);

});

// file: src/sectv-tizen/drminfoProxy.js
define('cordova-plugin-toast.drminfoProxy', function(require, exports, module) {


'use strict';

module.exports = {
    getEsn: function(success, fail, args) {
        try {
            var result = webapis.drminfo.getEsn(args[0]);

            setTimeout(function () {
                success(result);
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    },
    getSdi: function(success, fail, args) {
        try {
            var result = webapis.drminfo.getSdiId();

            setTimeout(function () {
                success(result);
            }, 0);
        }
        catch (e) {
            fail(e);
        }
    }
};

require('cordova/exec/proxy').add('toast.drminfo',module.exports);

});

// file: src/sectv-tizen/applicationProxy.js
define('cordova-plugin-toast.applicationProxy', function(require, exports, module) {
'use strict';

module.exports = {
    exit: function (success, fail, args) {
        tizen.application.getCurrentApplication().exit();
    },
    launchApp: function (success, fail, args) {
        try {
            var paramAppId = args[0].appId;
            var paramData = args[0].data;
            var appCtrlDataAry = [];

            for(var keyName in paramData) {
                var temp = new tizen.ApplicationControlData(keyName, [paramData[keyName]]);
                appCtrlDataAry.push(temp);
            }

            if(paramAppId == 'org.tizen.browser') { // Jump to browser
                var browserAppCtrl = new tizen.ApplicationControl(null, (appCtrlDataAry[0].value)[0], null, null, appCtrlDataAry);
                tizen.application.launchAppControl(browserAppCtrl, paramAppId, success, fail, null);
            }
            else { // Jump to widget
                var widgetAppCtrl = new tizen.ApplicationControl(null, null, null, null, appCtrlDataAry);
                tizen.application.launchAppControl(widgetAppCtrl, paramAppId, success, fail, null);
            }
        }
        catch (e) {
            var error = new Error();
            error.name = e.name;
            setTimeout(function() {
                fail(error);
            }, 0);
        }
    },
    getRequestedAppInfo: function (success, fail, args) {
        try {
            var reqAppCtrl = tizen.application.getCurrentApplication().getRequestedAppControl();
            var reqCallerAppId = reqAppCtrl.callerAppId;
            var reqAppCtrlDataAry = reqAppCtrl.appControl.data;
            var appCtrlDataObj = {};

            for(var i = 0; i < reqAppCtrlDataAry.length; i++) {
                var key = reqAppCtrlDataAry[i].key;
                var value = (reqAppCtrlDataAry[i].value)[0];
                appCtrlDataObj[key] = value;
            }

            setTimeout(function() {
                success({callerAppId: reqCallerAppId, data: appCtrlDataObj});
            }, 0);
        }
        catch(e) {
            var error = new Error();
            error.name = e.name;
            setTimeout(function() {
                fail(error);
            }, 0);
        }
    }
};

require('cordova/exec/proxy').add('toast.application', module.exports);

});

// file: src/sectv-tizen/mediaProxy.js
define('cordova-plugin-toast.mediaProxy', function(require, exports, module) {


'use strict';

var Media = require('cordova-plugin-toast.Media');
var Util = require('cordova-plugin-toast.util');
var Urlutil = require('cordova/urlutil');

var avplayState = {
    NONE: 'NONE',
    IDLE: 'IDLE',
    READY: 'READY',
    PLAYING: 'PLAYING',
    PAUSED: 'PAUSED'
};
var containerElem = null;
var subtitleUrl = null;
var subtitleLanguageObj = null;

function createVideoContainer(id) {
    function setContainerStyleEventListener(elem,callback) {
        var containerObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(e) {
                callback.call(e.target, e.attributeName);
            });
        });
        containerObserver.observe(elem, {
            childList: false,
            subtree: false,
            attributes: true
        });
    }

    function setContainerAppendEventListener(callback) {
        var bodyObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(e) {
                callback.call(e.target, e);
            });
        });
        bodyObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: false
        });
    }

    containerElem = document.createElement('div');
    containerElem.style.left = '0px';
    containerElem.style.top = '0px';
    containerElem.style.width = '0px';
    containerElem.style.height = '0px';
    containerElem.innerHTML = '<OBJECT type="application/avplayer" style="width:0px; height:0px;"></OBJECT>';
    Media.mediaEvent(id,getMediaEventValue(Media._MEDIA_CONTAINER,containerElem));

    if(window.MutationObserver) {
        setContainerStyleEventListener(containerElem,containerStyleEventCallback);
        setContainerAppendEventListener(containerAppendEventCallback);
    }
}

var containerStylecallbackFnTimer = null;
function containerStyleEventCallback(MutationRecordProperty) {
    if(containerStylecallbackFnTimer) {
        clearTimeout(containerStylecallbackFnTimer);
    }
    containerStylecallbackFnTimer = setTimeout(function() {
        if (MutationRecordProperty == 'style' && containerElem.childNodes[0]) {
            console.log('media::container style changed');

            var boundingRect = Util.getBoundingRect(containerElem);
            console.log('media:: DisplayRect left = '+boundingRect.left + ' | top = ' + boundingRect.top + ' | width = ' + boundingRect.width + ' | height = ' + boundingRect.height);

            containerElem.childNodes[0].style.width = boundingRect.width + 'px';
            containerElem.childNodes[0].style.height = boundingRect.height + 'px';
            setAvplayVideoRect(boundingRect);
        }
    },0);
}

var containerAppendcallbackFnTimer = null;
function containerAppendEventCallback(MutationRecordProperty) {
    if(containerAppendcallbackFnTimer) {
        clearTimeout(containerAppendcallbackFnTimer);
    }

    containerAppendcallbackFnTimer = setTimeout(function() {
        if (MutationRecordProperty.addedNodes.length > 0) {
            if(hasContainerElem(MutationRecordProperty.addedNodes)) {
                console.log('media::container append');

                var boundingRect = Util.getBoundingRect(containerElem);
                console.log('media:: DisplayRect left = '+boundingRect.left + ' | top = ' + boundingRect.top + ' | width = ' + boundingRect.width + ' | height = ' + boundingRect.height);

                setAvplayVideoRect(boundingRect);
            }
        }
    },0);

    function hasContainerElem(nodes) {
        for(var i = 0; i < nodes.length; i++) {
            if(containerElem === nodes[i] || Util.isChildOf(containerElem,nodes[i])) {
                return true;
            }
        }
        return false;
    }
}

function setAvplayVideoRect(rect) {
    var avplayBaseWidth = 1920; // Base resolution of avplay
    var ratio = avplayBaseWidth / window.document.documentElement.clientWidth; // Calculate ratio as base resolution
    var videoRect = {};

    if(rect && (rect.left < 0 || rect.top < 0 || rect.width < 0 || rect.height < 0)) {
        console.log('[Warning] Rect size value is RangeError');
        return;
    }

    if(rect && (rect.left > 0 || rect.top > 0 || rect.width > 0 || rect.height > 0)) {
        try {
            videoRect.left = rect.left * ratio; // Convert rect as base resolution
            videoRect.top = rect.top * ratio;
            videoRect.width = rect.width * ratio;
            videoRect.height = rect.height * ratio;

            var state = webapis.avplay.getState();
            if(state == avplayState.IDLE || state == avplayState.PAUSED || state == avplayState.PLAYING || state ==avplayState.READY) {
                webapis.avplay.setDisplayRect(Math.ceil(Number(videoRect.left)),Math.ceil(Number(videoRect.top)),Math.ceil(Number(videoRect.width)),Math.ceil(Number(videoRect.height)));
            }
        }
        catch (e) {
            console.log('[Warning]Fail to setDisplayRect' + e);
        }
    }
    else {
        console.log('[Warning] Rect size value is RangeError');
    }
}

var currentMediaState = null;
function getMediaEventValue (type,data) {
    var reval = {};
    switch(type) {
    case Media.EVENT_STATE :
        reval = {
            'type': type,
            'data': {
                'state': data,
                'oldState': currentMediaState
            }
        };
        currentMediaState = data;
        break;
    case Media.EVENT_DURATION :
        reval = {
            'type': type,
            'data': {
                'duration': data
            }
        };
        break;
    case Media.EVENT_POSITION :
        reval = {
            'type': type,
            'data': {
                'position': data
            }
        };
        break;
    case Media.EVENT_BUFFERINGPROGRESS :
        reval = {
            'type': type,
            'data': {
                'bufferingPercentage': data
            }
        };
        break;
    case Media.EVENT_SUBTITLE :
        reval = {
            'type': type,
            'data': {
                'text': data
            }
        };
        break;
    case Media.EVENT_ENDED :
        reval = {
            'type': type,
            'data': {}
        };
        break;
    case Media._MEDIA_CONTAINER :
        reval = {
            'type': type,
            'data': {
                'containerElem': data
            }
        };
        break;
    case Media._MEDIA_ERROR :
        reval = {
            'type': type,
            'data': data
        };
        break;
    }
    return reval;
}

function setScreenSaver(state) {
    if(state.toLowerCase() === 'on') {
        try {
            webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_ON, function() {
                console.log('media:: success to screenSaver ON');
            },
            function() {
                console.log('media:: fail to screenSaver ON');
            });
        }
        catch (e) {
            console.log('media :: error to screenSaver ON = ' + e.code);
        }
    }
    else if(state.toLowerCase() === 'off') {
        try {
            webapis.appcommon.setScreenSaver(webapis.appcommon.AppCommonScreenSaverState.SCREEN_SAVER_OFF, function() {
                console.log('media:: success to screenSaver OFF');
            },
            function() {
                console.log('media:: fail to screenSaver OFF');
            });
        }
        catch (e) {
            console.log('media :: error to screenSaver OFF = ' + e.code);
        }
    }
}

module.exports = {
    create: function(successCallback, errorCallback, args) {
        var id = args[0];
        console.log('media::create() - id =' + id);
        createVideoContainer(id);
    },

    open: function(successCallback, errorCallback, args) {
        var id = args[0],
            src = args[1],
            absoluteUrl = Urlutil.makeAbsolute(args[1]),
            state = null;

        console.log('media::open() - id =' + id + ' src = ' + src);

        var boundingRect = Util.getBoundingRect(containerElem);

        if(!Util.isRemoteUrl(absoluteUrl)) {
            src = absoluteUrl.replace(/^file:\/\//,'');
        }

        state = webapis.avplay.getState();

        if(state !== avplayState.NONE && state !== avplayState.IDLE) {
            webapis.avplay.stop();
            Media.mediaEvent(id, getMediaEventValue(Media.EVENT_STATE, Media.STATE_IDLE));
        }

        if(window.webapis) {
            webapis.avplay.open(src);
            setAvplayVideoRect(boundingRect);
            webapis.avplay.setListener({
                onbufferingstart: function() {
                    console.log('media::onStalled()');
                    Media.mediaEvent(id,getMediaEventValue(Media.EVENT_STATE,Media.STATE_STALLED));
                },
                onbufferingprogress: function(percent) {
                    if(currentMediaState !== Media.STATE_STALLED) {
                        Media.mediaEvent(id,getMediaEventValue(Media.EVENT_STATE,Media.STATE_STALLED));
                    }
                    console.log('media::Buffering progress data: ' + percent);
                    Media.mediaEvent(id,getMediaEventValue(Media.EVENT_BUFFERINGPROGRESS,percent));
                },
                onbufferingcomplete: function() {
                    console.log('media::Buffering complete.');
                    state = webapis.avplay.getState();
                    if(state !== 'READY') {
                        Media.mediaEvent(id,getMediaEventValue(Media.EVENT_STATE,state));
                    }
                    Media.mediaEvent(id,getMediaEventValue(Media.EVENT_POSITION,webapis.avplay.getCurrentTime()));
                },
                onstreamcompleted: function(currentTime) {
                    console.log('media::ended()');
                    Media.mediaEvent(id, getMediaEventValue(Media.EVENT_ENDED));
                },
                oncurrentplaytime: function(currentTime) {
                    if(currentMediaState !== Media.STATE_PLAYING && currentTime > 0) {
                        Media.mediaEvent(id,getMediaEventValue(Media.EVENT_STATE,Media.STATE_PLAYING));
                    }
                    console.log('media::Current playtime: ' + currentTime);
                    Media.mediaEvent(id,getMediaEventValue(Media.EVENT_POSITION,currentTime));
                },
                onevent: function(eventType, eventData) {
                    console.log('media::Event type error: ' + eventType + ', eventData: ' + eventData);
                },
                onerror: function(errorData) {
                    console.log('media::Event type error: ' + errorData);
                    Media.mediaEvent(id,getMediaEventValue(Media._MEDIA_ERROR,errorData));
                },
                onsubtitlechange: function(duration, text, data1, data2) {
                    console.log('media::Subtitle Changed.');
                    Media.mediaEvent(id,getMediaEventValue(Media.EVENT_SUBTITLE,text));
                },
                ondrmevent: function(drmEvent, drmData) {
                    console.log('media::DRM callback: ' + drmEvent + ', data: ' + drmData);
                }
            });
            currentMediaState = Media.STATE_IDLE;
            Media.mediaEvent(id, getMediaEventValue(Media.EVENT_STATE, Media.STATE_IDLE));
        }
    },

    // Start playing the media
    play: function(successCallback, errorCallback, args) {
        var id = args[0];

        console.log('media::play() - id =' + id);
        if(webapis.avplay.getState() == avplayState.IDLE) {
            if(subtitleUrl) {
                var download = new tizen.DownloadRequest(subtitleUrl, 'wgt-private-tmp');
                tizen.download.start(download, {
                    oncompleted: function(downloadId, fullPath) {
                        console.log('fullPath...............'+fullPath);
                        webapis.avplay.setExternalSubtitlePath(fullPath);
                        playMedia();
                    },
                    onfailed: function (error) {
                        console.log('[Warning] Failed to download Subtitle');
                        playMedia();
                    }
                });
            }
            else {
                playMedia();
            }
        }
        else {
            webapis.avplay.play();
            setScreenSaver('off');
            Media.mediaEvent(id, getMediaEventValue(Media.EVENT_STATE, Media.STATE_PLAYING));
        }

        function playMedia() {
            webapis.avplay.prepareAsync(function() {
                webapis.avplay.play();
                setScreenSaver('off');
                var totalTrackInfo = webapis.avplay.getTotalTrackInfo();
                subtitleLanguageObj = {};
                for(var i=0; i < totalTrackInfo.length; i++) {
                    if(totalTrackInfo[i].type == 'TEXT') {
                        //Tizen webapis.avplay.getTotalTrackInfo return the value does not follow camelcase rule.
                        //Jshint camelcase and jscs requireCamelCaseOrUpperCaseIdentifiers are temporarily disabled. because It is a spec of webapis avplay.getTotalTrackInfo.

                        /*jshint camelcase: false */
                        /*jscs:disable requireCamelCaseOrUpperCaseIdentifiers*/
                        var extraInfo = JSON.parse(totalTrackInfo[i].extra_info);
                        if(extraInfo && extraInfo.hasOwnProperty('track_lang')) {
                            console.log('extraInfo.track_lang...............'+extraInfo.track_lang);
                            if(extraInfo.track_lang !== '') {
                                subtitleLanguageObj[extraInfo.track_lang] = totalTrackInfo[i].index;
                            }
                        }
                        /*jshint camelcase: true */
                        /*jscs:enable requireCamelCaseOrUpperCaseIdentifiers*/
                    }
                }
                Media.mediaEvent(id, getMediaEventValue(Media.EVENT_STATE, Media.STATE_PLAYING));
                var duration = webapis.avplay.getDuration();
                console.log('media:: duration = '+duration);
                Media.mediaEvent(id,getMediaEventValue(Media.EVENT_DURATION,duration));
            });
        }
    },

    // Stops the playing media
    stop: function(successCallback, errorCallback, args) {
        var id = args[0];
        console.log('media::stop() - EVENT_STATE -> IDLE');
        subtitleUrl = null;
        webapis.avplay.stop();
        webapis.avplay.close();
        Media.mediaEvent(id, getMediaEventValue(Media.EVENT_STATE, Media.STATE_IDLE));
        successCallback();
        setScreenSaver('on');
    },

    // Seeks to the position in the media
    seekTo: function(successCallback, errorCallback, args) {
        //var id = args[0];
        var milliseconds = args[1];

        console.log('media::seekTo()');
        webapis.avplay.seekTo(milliseconds,function() {
            successCallback(webapis.avplay.getCurrentTime());
        },function(e) {
            throw Error('Failed to seekTo');
        });
    },

    // Pauses the playing media
    pause: function(successCallback, errorCallback, args) {
        var id = args[0];
        console.log('media::pause() - EVENT_STATE -> PAUSED');
        webapis.avplay.pause();
        Media.mediaEvent(id, getMediaEventValue(Media.EVENT_STATE, Media.STATE_PAUSED));
        setScreenSaver('on');
    },

    setStreamingProperty: function(successCallback, errorCallback, args) {
        console.log('media::setStreamingProperty() - type= '+args[0]);

        webapis.avplay.setStreamingProperty.apply(webapis.avplay, args);
    },

    setDrm: function(successCallback, errorCallback, args) {
        console.log('media::setDrm() - type= '+args[0]);

        webapis.avplay.setDrm.apply(webapis.avplay, args);
    },

    setSubtitlePath: function(successCallback, errorCallback, args) {
        console.log('media::setSubtitlePath()');
        var path = args[1],
            absoluteUrl = Urlutil.makeAbsolute(args[1]);

        if(path && typeof path == 'string') {
            if(!Util.isRemoteUrl(absoluteUrl)) {
                webapis.avplay.setExternalSubtitlePath(absoluteUrl.replace(/^file:\/\//,''));
            }
            else {
                subtitleUrl = absoluteUrl;
            }

        }
        else {
            console.log('[Warning] Subtitle path is not valid.');
        }
    },

    getSubtitleLanguageList: function(successCallback, errorCallback, args) {
        console.log('media::getSubtitleLanguageList()');
        var subtitleLanguageArr = [];

        if(subtitleLanguageObj) {
            for(var key in subtitleLanguageObj) {
                subtitleLanguageArr.push(key);
            }
        }

        if(subtitleLanguageArr.length !== 0 ) {
            setTimeout(function() {
                successCallback(subtitleLanguageArr);
            },0);
        }
        else {
            subtitleLanguageArr = null;
            errorCallback(new Error('Fail to get subtitle language information'));
        }
    },

    setSubtitleLanguage: function(successCallback, errorCallback, args) {
        console.log('media::setSubtitleLanguage()');
        var lang = args[1].toLowerCase();

        if(subtitleLanguageObj.hasOwnProperty(lang)) {
            webapis.avplay.setSelectTrack('TEXT',subtitleLanguageObj.lang);
        }
        else {
            throw new Error('Subtitle is not support this language.');
        }
    },

    setSubtitleSync: function(successCallback, errorCallback, args) {
        console.log('media::setSubtitleSync()');
        var milliseconds = args[1];
        webapis.avplay.setSubtitlePosition(milliseconds);
    }
};

require('cordova/exec/proxy').add('toast.Media',module.exports);

});

// file: src/sectv-tizen/MediaPluginWideVine.js
define('cordova-plugin-toast.MediaPluginWideVine', function(require, exports, module) {


'use strict';

var exec = require('cordova/exec'),
    MediaPlugin = require('cordova-plugin-toast.MediaPlugin');

function MediaPluginWideVine () {
    MediaPlugin.apply(this, arguments);
    this.name = 'MediaPluginWideVine';
}

MediaPluginWideVine.prototype = new MediaPlugin();

function getOptionString(options) {
    var opts = [];
    for(var key in options) {
        opts.push(key + '=' + options[key]);
    }
    return opts.join('|');
}

MediaPluginWideVine.prototype.onAttachToMedia = function (media) {
    var me = this;
    media.registerHook('afteropen', function (media, args) {
        exec(null, null, 'toast.Media', 'setStreamingProperty', [
            'WIDEVINE',
            getOptionString(me.options)
        ]);
    });
};

module.exports = MediaPluginWideVine;

});

// file: src/sectv-tizen/MediaPluginHLS.js
define('cordova-plugin-toast.MediaPluginHLS', function(require, exports, module) {


'use strict';

var exec = require('cordova/exec'),
    MediaPlugin = require('cordova-plugin-toast.MediaPlugin');

function MediaPluginHLS () {
    MediaPlugin.apply(this, arguments);
    this.name = 'MediaPluginHLS';
}

MediaPluginHLS.prototype = new MediaPlugin();

function getOptionString(options) {
    var opts = [];
    for(var key in options) {
        opts.push(key + '=' + options[key]);
    }
    return '|'+opts.join('|');
}

MediaPluginHLS.prototype.onAttachToMedia = function (media) {
    if(this.options) {
        var me = this;
        media.registerHook('afteropen', function (media, args) {
            exec(null, null, 'toast.Media', 'setStreamingProperty', [
                'ADAPTIVE_INFO',
                getOptionString(me.options)
            ]);
        });
    }
};

module.exports = MediaPluginHLS;

});

// file: src/sectv-tizen/MediaPluginUHD.js
define('cordova-plugin-toast.MediaPluginUHD', function(require, exports, module) {


'use strict';

var exec = require('cordova/exec'),
    MediaPlugin = require('cordova-plugin-toast.MediaPlugin');

function MediaPluginUHD () {
    if(webapis.productinfo.isUdPanelSupported()) {
        MediaPlugin.apply(this, arguments);
        this.name = 'MediaPluginUHD';
    }
    else {
        throw new Error('This device\'s screen is not suitable for UHD Contents playback.');
    }
}

MediaPluginUHD.prototype = new MediaPlugin();

MediaPluginUHD.prototype.onAttachToMedia = function (media) {
    media.registerHook('afteropen', function (media, args) {
        exec(null, null, 'toast.Media', 'setStreamingProperty', [
            'SET_MODE_4K',
            'TRUE'
        ]);
    });
};

module.exports = MediaPluginUHD;

});

// file: src/sectv-tizen/MediaPluginPlayReady.js
define('cordova-plugin-toast.MediaPluginPlayReady', function(require, exports, module) {


'use strict';

var exec = require('cordova/exec'),
    MediaPlugin = require('cordova-plugin-toast.MediaPlugin');

function MediaPluginPlayReady () {
    MediaPlugin.apply(this, arguments);
    this.name = 'MediaPluginPlayReady';
}

MediaPluginPlayReady.prototype = new MediaPlugin();

MediaPluginPlayReady.prototype.onAttachToMedia = function (media) {
    var me = this;
    media.registerHook('afteropen', function (media, args) {
        exec(null, null, 'toast.Media', 'setDrm', [
            'PLAYREADY',
            'SetProperties',
            JSON.stringify(me.options)
        ]);
    });
};

module.exports = MediaPluginPlayReady;

});

// file: src/sectv-tizen/billingProxy.js
define('cordova-plugin-toast.billingProxy', function(require, exports, module) {
'use strict';

var securityKey;
var uid;
var countryCode;
var appId;
var curServerType;
var serverDpiUrlList = {
    'DUMMY': 'https://sbox-dpiapi.samsungcloudsolution.com/openapi',
    'DEV': 'https://sbox-dpiapi.samsungcloudsolution.com/openapi',
    'PRD': 'https://dpiapi.samsungcloudsolution.com/openapi'
};

function checkSsoLogin() {
    if (webapis.sso.getLoginStatus() != webapis.sso.SsoLoginState.SSO_LOGIN) {
        webapis.sso.showAccountView('CheckoutTest', function() {
            uid = webapis.sso.getLoginUid();
        }, function(e) {
            throw new Error('SSO login fail');
        });
    }
    else {
        uid = webapis.sso.getLoginUid();
    }
}

module.exports = {
    init: function(success, fail, args) {
        try {
            curServerType = args[0].serverType;
            if (curServerType == 'PRD') {
                var tvServer = webapis.productinfo.getSmartTVServerType();
                if (tvServer == 1) { // TV environment is on dev.
                    curServerType = 'DEV';
                }
            }
            securityKey = args[0].key.checkoutKey;
            appId = args[0].appId;
            curServerType = args[0].serverType;
            countryCode = webapis.productinfo.getSystemConfig(webapis.productinfo.ProductInfoConfigKey.CONFIG_KEY_SERVICE_COUNTRY);

            var bJSInserted = false;
            var count = 0;
            var scriptJquery = document.createElement('script');
            scriptJquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
            scriptJquery.onload = checkLoaded;
            document.body.appendChild(scriptJquery);

            var scriptCryptoSha256 = document.createElement('script');
            scriptCryptoSha256.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/hmac-sha256.js';
            scriptCryptoSha256.onload = checkLoaded;
            document.body.appendChild(scriptCryptoSha256);

            var scriptCryptoBase64 = document.createElement('script');
            scriptCryptoBase64.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/enc-base64.js';
            scriptCryptoBase64.onload = checkLoaded;
            document.body.appendChild(scriptCryptoBase64);

        }
        catch (e) {
            setTimeout(function() {
                fail(e);
            }, 0);
        }
        function checkLoaded() {
            count++;
            if(count >= 3) {
                bJSInserted = true;
                setTimeout(function() {
                    success();
                }, 0);
            }
        }
    },
    buyProduct: function(success, fail, args) {
        try {
            if (!securityKey) {
                setTimeout(function() {
                    var error = new Error('init() isn\'t called');
                    fail(error);
                }, 0);
            }

            checkSsoLogin();

            // For buyItem
            var detailObj = {};
            detailObj.OrderItemID = args[0].productId;
            detailObj.OrderTitle = args[0].productName === undefined ? null : args[0].productName;
            detailObj.OrderCurrencyID = args[0].currency === undefined ? null : args[0].currency;
            detailObj.OrderTotal = args[0].amount === undefined ? null : args[0].amount;
            detailObj.OrderID = args[0].orderId;
            detailObj.OrderItemPath = args[0].orderItemPath;
            detailObj.OrderCustomID = uid;

            if(!detailObj.OrderTitle || !detailObj.OrderCurrencyID || !detailObj.OrderTotal) {
                setProductInformation(function() {
                    requestBuyProduct();
                },function(e) {
                    setTimeout(function() {
                        fail(e);
                    }, 0);
                });
            }
            else {
                requestBuyProduct();
            }
        }
        catch (e) {
            setTimeout(function() {
                var error = new Error(e.message);
                error.code = e.code;
                fail(error);
            }, 0);
        }

        function setProductInformation(onSetProductInfoSuccess, onSetProductInformationError) {
            var dataDetailObj = {};
            dataDetailObj.AppID = appId;
            dataDetailObj.CountryCode = countryCode;

            /* jshint undef: false*/
            var hash = CryptoJS.HmacSHA256(appId + countryCode, securityKey);
            var strCheckValue = CryptoJS.enc.Base64.stringify(hash);
            /* jshint undef: true*/

            dataDetailObj.CheckValue = strCheckValue;

            var dataDetailJson = JSON.stringify(dataDetailObj);

            if (dataDetailJson === '') {
                setTimeout(function() {
                    var error = new Error('Fail to get data param ');
                    onSetProductInformationError(error);
                }, 0);
            }
            /* jshint undef: false*/
            $.ajax({
                /* jshint undef: true*/
                url: serverDpiUrlList[curServerType] + '/cont/list',
                type: 'POST',
                dataType: 'JSON',
                data: dataDetailJson,
                timeout: 10000,
                success: function(res) {
                    if (res.CPStatus == '100000') {
                        var resJson = JSON.stringify(res);
                        var resProductsList = JSON.parse(resJson);

                        for (var key in resProductsList.ItemDetails) {
                            if (resProductsList.ItemDetails.hasOwnProperty(key)) {
                                var obj = resProductsList.ItemDetails[key];
                                if (obj.ItemID == args[0].productId) {
                                    detailObj.OrderTitle = detailObj.OrderTitle || obj.ItemTitle;
                                    detailObj.OrderCurrencyID = detailObj.OrderCurrencyID || obj.CurrencyID;
                                    detailObj.OrderTotal = detailObj.OrderTotal || obj.Price;
                                    break;
                                }
                            }
                        }
                        setTimeout(function() {
                            onSetProductInfoSuccess();
                        }, 0);
                    }
                    else {
                        setTimeout(function() {
                            var error = new Error(res.CPResult);
                            error.code = Number(res.CPStatus);
                            onSetProductInformationError(error);
                        }, 0);
                    }
                },
                error: function(jqXHR, ajaxOptions, thrownError, request, error) {
                    console.log('[Error] thrownError:' + thrownError + ';error:' + error + ';[Message]:' + jqXHR.responseText);
                    setTimeout(function() {
                        var error = new Error(jqXHR.responseText);
                        onSetProductInformationError(error);
                    }, 0);
                },
                complete: function() {
                    console.log('complete');
                },
                failure: function() {
                    console.log('failure');
                    setTimeout(function() {
                        var error = new Error('Failure');
                        onSetProductInformationError(error);
                    }, 0);
                }
            });
        }

        function requestBuyProduct() {
            var detailJson = JSON.stringify(detailObj);
            webapis.billing.buyItem(appId, curServerType, detailJson, function(result) {
                // result : SUCCESS FAILED CANCEL
                if (result.payResult == 'SUCCESS') {
                    setTimeout(function() {
                        success();
                    }, 0);
                }
                else {
                    var error = new Error();
                    if(result.payResult == 'CANCEL') {
                        error.code = 100002;
                        error.message = 'User cancelled payment process';
                    }
                    else {
                        error.message = 'Fail payment';
                    }
                    setTimeout(function() {
                        fail(error);
                    }, 0);
                }
            }, function(e) {
                setTimeout(function() {
                    var error = new Error(e.message);
                    error.code = e.code;
                    fail(error);
                }, 0);
            });
        }
    },
    cancelSubscription: function(success, fail, args) {
        try {
            if (!securityKey || securityKey === undefined || typeof securityKey != 'string') {
                setTimeout(function() {
                    var error = new Error('init() isn\'t called');
                    fail(error);
                }, 0);
            }

            checkSsoLogin();

            if(args[0].invoiceId) {
                var cancelDataObj = {};
                cancelDataObj.InvoiceID = args[0].invoiceId;
                cancelDataObj.AppID = appId;
                cancelDataObj.CustomID = uid;
                cancelDataObj.CountryCode = countryCode;

                cancel(cancelDataObj);
            }
            else { // invoiceId가 없는경우
                var dataDetailObj = {};
                dataDetailObj.AppID = appId;
                dataDetailObj.CustomID = uid;
                dataDetailObj.CountryCode = countryCode;
                dataDetailObj.ItemType = '2';
                dataDetailObj.PageNumber = '1';

                /* jshint undef: false*/
                var hash = CryptoJS.HmacSHA256(appId + uid + countryCode + dataDetailObj.ItemType + dataDetailObj.PageNumber, securityKey);
                var checkValue = CryptoJS.enc.Base64.stringify(hash);
                /* jshint undef: true*/

                dataDetailObj.CheckValue = checkValue;

                var dataDetailJson = JSON.stringify(dataDetailObj);

                if (dataDetailJson === '') {
                    setTimeout(function() {
                        var error = new Error();
                        error.message = 'Fail to get data param';
                        fail(error);
                    }, 0);
                }

                /* jshint undef: false*/
                $.ajax({
                    /* jshint undef: true*/
                    url: serverDpiUrlList[curServerType] + '/invoice/list',
                    type: 'POST',
                    dataType: 'JSON',
                    data: dataDetailJson,
                    timeout: 10000,
                    success: function(res) {
                        if (res.CPStatus == '100000') {
                            var resJson = JSON.stringify(res);
                            var resPurchasesList = JSON.parse(resJson);

                            for (var key in resPurchasesList.InvoiceDetails) {
                                if (resPurchasesList.InvoiceDetails.hasOwnProperty(key)) {
                                    var obj = resPurchasesList.InvoiceDetails[key];
                                    if (obj.SubscriptionInfo && obj.ItemID == args[0].productId && obj.CancelStatus === false) {
                                        var cancelDataObj = {};
                                        cancelDataObj.InvoiceID = obj.InvoiceID;
                                        cancelDataObj.AppID = appId;
                                        cancelDataObj.CustomID = uid;
                                        cancelDataObj.CountryCode = countryCode;

                                        cancel(cancelDataObj);
                                    }
                                }
                            }
                            setTimeout(function() {
                                var error = new Error();
                                error.code = 100001;
                                error.message = 'Not found product';
                                fail(error);
                            }, 0);
                        }
                        else {
                            setTimeout(function() {
                                var error = new Error(res.CPResult);
                                error.message = res.CPResult;
                                error.code = Number(res.CPStatus);
                                fail(error);
                            }, 0);
                        }
                    },
                    error: function(jqXHR, ajaxOptions, thrownError, request, error) {
                        setTimeout(function() {
                            var error = new Error(jqXHR.responseTex);
                            fail(error);
                        }, 0);
                    },
                    complete: function() {},
                    failure: function() {
                        setTimeout(function() {
                            var error = new Error('failure');
                            fail(error);
                        }, 0);
                    }
                });
            }
        }
        catch (e) {
            setTimeout(function() {
                fail(e);
            }, 0);
        }

        function cancel(resCanceledProduct) {
            var cancelDataDetailJson = JSON.stringify(resCanceledProduct);

            /* jshint undef: false*/
            $.ajax({
                /* jshint undef: true*/
                url: serverDpiUrlList[curServerType] + '/subscription/cancel',
                type: 'POST',
                dataType: 'JSON',
                data: cancelDataDetailJson,
                timeout: 10000,
                success: function(resCancel) {
                    if (resCancel.CPStatus == '100000') {
                        var cancelResJson = JSON.stringify(resCancel);
                        var resCanceledProduct = JSON.parse(cancelResJson);

                        var responseObj ={};
                        responseObj.cPStatus = resCanceledProduct.CPStatus;
                        responseObj.cPResult = resCanceledProduct.CPResult;
                        responseObj.invoiceID = resCanceledProduct.InvoiceID;
                        responseObj.subscancelTime = resCanceledProduct.SubsCancelTime;
                        responseObj.subsStatus = resCanceledProduct.SubsStatus;

                        setTimeout(function() {
                            success(responseObj);
                        }, 0);
                    }
                    else {
                        setTimeout(function() {
                            var error = new Error();
                            error.message = JSON.stringify(resCancel.CPResult);
                            error.code = Number(resCancel.CPStatus);
                            fail(error);
                        }, 0);
                    }
                },
                error: function(jqXHR, ajaxOptions, thrownError, request, error) {
                    setTimeout(function() {
                        var error = new Error();
                        error.message = jqXHR.responseText;
                        fail(error);
                    }, 0);
                },
                complete: function() {},
                failure: function() {
                    setTimeout(function() {
                        var error = new Error('failure');
                        error.message = 'failure';
                        fail(error);
                    }, 0);
                }
            });
        }
    },
    checkPurchaseStatus: function(success, fail, args) {
        try {
            if (!securityKey) {
                setTimeout(function() {
                    var error = new Error('init isn\'t called');
                    fail(error);
                }, 0);
            }

            checkSsoLogin();

            var responseList = [];

            var dataDetailObj = {};
            dataDetailObj.AppID = appId;
            dataDetailObj.CustomID = uid;
            dataDetailObj.CountryCode = countryCode;
            dataDetailObj.ItemType = '2';
            dataDetailObj.PageNumber = '1';

            /* jshint undef: false*/
            var hash = CryptoJS.HmacSHA256(appId + uid + countryCode + dataDetailObj.ItemType + dataDetailObj.PageNumber, securityKey);
            var checkValue = CryptoJS.enc.Base64.stringify(hash);
            /* jshint undef: true*/

            dataDetailObj.CheckValue = checkValue;

            var dataDetailJson = JSON.stringify(dataDetailObj);

            if (dataDetailJson == 'Fail to get data param') {
                setTimeout(function() {
                    var error = new Error('Fail to get data param');
                    fail(error);
                }, 0);
            }

            /* jshint undef: false*/
            $.ajax({
                /* jshint undef: true*/
                url: serverDpiUrlList[curServerType] + '/invoice/list',
                type: 'POST',
                dataType: 'JSON',
                data: dataDetailJson,
                timeout: 10000,
                success: function(res) {
                    if (res.CPStatus == '100000') {
                        var resJson = JSON.stringify(res);
                        var resPurchasesList = JSON.parse(resJson);
                        for (var key in resPurchasesList.InvoiceDetails) {
                            var invoiceDetailsObj = resPurchasesList.InvoiceDetails[key];
                            if (invoiceDetailsObj.ItemID == args[0].productId) {
                                var newPurchaseItem = {};
                                newPurchaseItem.invoiceId = invoiceDetailsObj.InvoiceID;
                                newPurchaseItem.productId = invoiceDetailsObj.ItemID;
                                newPurchaseItem.productName = invoiceDetailsObj.ItemTitle;
                                newPurchaseItem.itemType = invoiceDetailsObj.ItemType;
                                newPurchaseItem.orderTime = invoiceDetailsObj.OrderTime;
                                newPurchaseItem.amount = invoiceDetailsObj.Price;
                                newPurchaseItem.currency = invoiceDetailsObj.OrderCurrencyID;
                                newPurchaseItem.cancelStatus = invoiceDetailsObj.CancelStatus;
                                newPurchaseItem.appliedStatus = invoiceDetailsObj.AppliedStatus;

                                newPurchaseItem.period = invoiceDetailsObj.Period;
                                newPurchaseItem.appliedTime = invoiceDetailsObj.AppliedTime;
                                newPurchaseItem.limitEndTime = invoiceDetailsObj.LimitEndTime;
                                newPurchaseItem.remainTime = invoiceDetailsObj.RemainTime;

                                if (invoiceDetailsObj.ItemType == 4) {
                                    var newPurchaseSubsItem = {};
                                    newPurchaseSubsItem.subscriptionId = invoiceDetailsObj.SubscriptionInfo.SubscriptionId;
                                    newPurchaseSubsItem.subsStartTime = invoiceDetailsObj.SubscriptionInfo.SubsStartTime;
                                    newPurchaseSubsItem.subsEndTime = invoiceDetailsObj.SubscriptionInfo.SubsEndTime;
                                    newPurchaseSubsItem.subsStatus = invoiceDetailsObj.SubscriptionInfo.SubsStatus;
                                    newPurchaseItem.subscriptionInfo = newPurchaseSubsItem;
                                }
                                responseList.push(newPurchaseItem);
                            }
                        }
                        if(responseList.length > 0) {
                            setTimeout(function() {
                                success(responseList);
                            }, 0);
                        }
                        else {
                            setTimeout(function() {
                                var error = new Error('Not found product');
                                fail(error);
                            }, 0);
                        }
                    }
                    else {
                        setTimeout(function() {
                            var error = new Error(res.CPResult);
                            error.code = Number(res.CPStatus);
                            fail(error);
                        }, 0);
                    }
                },
                error: function(jqXHR, ajaxOptions, thrownError, request, error) {
                    setTimeout(function() {
                        var error = new Error(jqXHR.responseText);
                        fail(error);
                    }, 0);
                },
                complete: function() {},
                failure: function() {
                    setTimeout(function() {
                        var error = new Error('failure');
                        fail(error);
                    }, 0);
                }
            });
        }
        catch (e) {
            setTimeout(function() {
                fail(e);
            }, 0);
        }
    },
    requestPurchasesList: function (success, fail, args) {
        try {
            if (!securityKey) {
                setTimeout(function() {
                    var error = new Error('init() isn\'t called');
                    fail(error);
                }, 0);
            }

            checkSsoLogin();

            var resProductsList = {};
            var resultObject = {};

            var detailObj = {};
            detailObj.AppID = appId;
            detailObj.CustomID = uid;
            detailObj.CountryCode = countryCode;
            detailObj.ItemType = args[0].itemType;
            detailObj.PageNumber = args[0].pageNumber;

            /* jshint undef: false*/
            var hash = CryptoJS.HmacSHA256(appId + uid + countryCode + detailObj.ItemType + detailObj.PageNumber, securityKey);
            var strCheckValue = CryptoJS.enc.Base64.stringify(hash);
            /* jshint undef: true*/

            detailObj.CheckValue = strCheckValue;
            var paymentDetails = JSON.stringify(detailObj);

            /* jshint undef: false*/
            $.ajax({
                /* jshint undef: true*/
                url: serverDpiUrlList[curServerType] + '/invoice/list',
                type: 'POST',
                dataType: 'JSON',
                data: paymentDetails,
                timeout: 10000,
                success: function(res) {
                    if(res.CPStatus == '100000') {
                        var resJson = JSON.stringify(res);
                        resProductsList = JSON.parse(resJson);

                        resultObject.cPStatus = resProductsList.CPStatus;
                        resultObject.cPResult = resProductsList.CPResult;
                        resultObject.totalCount = resProductsList.TotalCount;
                        resultObject.checkValue = resProductsList.CheckValue;

                        resultObject.invoiceDetails = [];

                        for (var key in resProductsList.InvoiceDetails) {
                            var obj = resProductsList.InvoiceDetails[key];
                            var newInvoiceItem = {};
                            newInvoiceItem.seq = obj.Seq;
                            newInvoiceItem.invoiceId = obj.InvoiceID;
                            newInvoiceItem.productId = obj.ItemID;
                            newInvoiceItem.productName = obj.ItemTitle;
                            newInvoiceItem.itemType = obj.ItemType;
                            newInvoiceItem.orderTime = obj.OrderTime;
                            newInvoiceItem.amount = obj.Price;
                            newInvoiceItem.currency = obj.OrderCurrencyID;
                            newInvoiceItem.cancelStatus = obj.CancelStatus;
                            newInvoiceItem.appliedStatus = obj.AppliedStatus;

                            newInvoiceItem.period = obj.Period;
                            newInvoiceItem.appliedTime = obj.AppliedTime;
                            newInvoiceItem.limitEndTime = obj.LimitEndTime;
                            newInvoiceItem.remainTime = obj.RemainTime;

                            if (obj.ItemType == 4) {
                                var newSubsItem = {};
                                newSubsItem.subscriptionId = obj.SubscriptionInfo.SubscriptionId;
                                newSubsItem.subsStartTime = obj.SubscriptionInfo.SubsStartTime;
                                newSubsItem.subsEndTime = obj.SubscriptionInfo.SubsEndTime;
                                newSubsItem.subsStatus = obj.SubscriptionInfo.SubsStatus;
                                newInvoiceItem.subscriptionInfo = newSubsItem;
                            }
                            resultObject.invoiceDetails.push(newInvoiceItem);
                        }
                        setTimeout(function() {
                            success(resultObject);
                        }, 0);
                    }
                    else {
                        setTimeout(function() {
                            var error = new Error(res.CPResult);
                            error.code = Number(res.CPStatus);
                            fail(error);
                        }, 0);
                    }
                },
                error: function(jqXHR, ajaxOptions, thrownError, request, error) {
                    console.log('[Error] thrownError:'+thrownError+';error:'+error+';[Message]:'+jqXHR.responseText);
                    setTimeout(function() {
                        var error = new Error();
                        fail(error);
                    }, 0);
                },
                complete: function() {
                    console.log('complete');
                },
                failure: function() {
                    console.log('failure');
                    setTimeout(function() {
                        var error = new Error();
                        fail(error);
                    }, 0);
                }
            });
        }
        catch(e) {
            setTimeout(function() {
                var error = new Error();
                fail(error);
            }, 0);
        }
    },
    requestProductsList: function (success, fail, args) {
        try {
            if (!securityKey) {
                var error = new Error('init() isn\'t called');
                setTimeout(function() {
                    fail(error);
                }, 0);
            }

            checkSsoLogin();

            var resProductsList = {};

            var resultObject = {};

            var detailObj = {};
            detailObj.AppID = appId;
            detailObj.CountryCode = countryCode;
            detailObj.PageSize = args[0].pageSize;
            detailObj.PageNumber = args[0].pageNumber;

            /* jshint undef: false*/
            var hash = CryptoJS.HmacSHA256(appId + countryCode, securityKey);
            var strCheckValue = CryptoJS.enc.Base64.stringify(hash);
            /* jshint undef: true*/

            detailObj.CheckValue = strCheckValue;

            var paymentDetails = JSON.stringify(detailObj);

            /* jshint undef: false*/
            $.ajax({
                /* jshint undef: true*/
                url: serverDpiUrlList[curServerType] + '/cont/list',
                type: 'POST',
                dataType: 'JSON',
                data: paymentDetails,
                timeout: 10000,
                success: function(res) {

                    if(res.CPStatus == '100000') {
                        var resJson = JSON.stringify(res);
                        resProductsList = JSON.parse(resJson);

                        resultObject.cPStatus = resProductsList.CPStatus;
                        resultObject.cPResult = resProductsList.CPResult;
                        resultObject.totalCount = resProductsList.TotalCount;
                        resultObject.checkValue = resProductsList.CheckValue;

                        resultObject.itemDetails = [];

                        for (var key in resProductsList.ItemDetails) {
                            var itemDetail = resProductsList.ItemDetails[key];
                            var newItem = {};
                            newItem.seq = itemDetail.Seq;
                            newItem.productId = itemDetail.ItemID;
                            newItem.productName = itemDetail.ItemTitle;
                            newItem.itemType = itemDetail.ItemType;
                            newItem.amount = itemDetail.Price;
                            newItem.currency = itemDetail.CurrencyID;
                            newItem.period = itemDetail.Period;

                            if (itemDetail.ItemType == 4) {
                                var newSubsItem = {};
                                newSubsItem.subscriptionInfo.paymentCyclePeriod = itemDetail.SubscriptionInfo.PaymentCyclePeriod;
                                newSubsItem.subscriptionInfo.paymentCycleFrq = itemDetail.SubscriptionInfo.PaymentCycleFrq;
                                newSubsItem.subscriptionInfo.paymentCycle = itemDetail.SubscriptionInfo.PaymentCycle;
                                newItem.subscriptionInfo = newSubsItem;
                            }
                            resultObject.itemDetails.push(newItem);
                        }
                        setTimeout(function() {
                            success(resultObject);
                        }, 0);
                    }
                    else {
                        setTimeout(function() {
                            var error = new Error(res.CPResult);
                            error.code = Number(res.CPStatus);
                            fail(error);
                        }, 0);
                    }
                },
                error: function(jqXHR, ajaxOptions, thrownError, request, error) {
                    console.log('[Error] thrownError:'+thrownError+';error:'+error+';[Message]:'+jqXHR.responseText);
                    setTimeout(function() {
                        var error = new Error();
                        fail(error);
                    }, 0);
                },
                complete: function() {
                    console.log('complete');
                },
                failure: function() {
                    console.log('failure');
                    setTimeout(function() {
                        var error = new Error();
                        fail(error);
                    }, 0);
                }
            });
        }
        catch(e) {
            setTimeout(function() {
                var error = new Error(e.message);
                error.code = e.code;
                fail(error);
            }, 0);
        }
    },
    verifyPurchase: function (success, fail, args) {

        try {
            if (!securityKey) {
                var error = new Error('init() isn\'t called');
                setTimeout(function() {
                    fail(error);
                }, 0);
            }

            checkSsoLogin();

            var resultObject = {};

            var detailObj = {};
            detailObj.AppID = appId;
            detailObj.InvoiceID = args[0].invoiceId;
            detailObj.CustomID = uid;
            detailObj.CountryCode = countryCode;

            var paymentDetails = JSON.stringify(detailObj);

            /* jshint undef: false*/
            $.ajax({
                /* jshint undef: true*/
                url: serverDpiUrlList[curServerType] + '/invoice/verify',
                type: 'POST',
                dataType: 'JSON',
                data: paymentDetails,
                timeout: 10000,
                success: function(res) {
                    if(res.CPStatus == '100000') {
                        var resJson = JSON.stringify(res);
                        var resVerifyPurchase = JSON.parse(resJson);

                        resultObject.cPStatus = resVerifyPurchase.CPStatus;
                        resultObject.cPResult = resVerifyPurchase.CPResult;
                        resultObject.appId = resVerifyPurchase.AppID;
                        resultObject.invoiceId = resVerifyPurchase.InvoiceID;

                        setTimeout(function() {
                            success(resultObject);
                        }, 0);
                    }
                    else {
                        setTimeout(function() {
                            var error = new Error(res.CPResult);
                            error.code = Number(res.CPStatus);
                            fail(error);
                        }, 0);
                    }
                },
                error: function(jqXHR, ajaxOptions, thrownError, request, error) {
                    console.log('[Error] thrownError:'+thrownError+';error:'+error+';[Message]:'+jqXHR.responseText);

                    setTimeout(function() {
                        var error = new Error();
                        fail(error);
                    }, 0);
                },
                complete: function() {
                    console.log('complete');
                },
                failure: function() {
                    console.log('failure');

                    setTimeout(function() {
                        var error = new Error();
                        fail(error);
                    }, 0);
                }
            });
        }
        catch(e) {
            setTimeout(function() {
                var error = new Error(e.message);
                error.code = e.code;
                fail(error);
            }, 0);
        }
    },
    applyProduct: function (success, fail, args) {

        try {
            if (!securityKey) {
                var error = new Error('init() isn\'t called');
                setTimeout(function() {
                    fail(error);
                }, 0);
            }

            checkSsoLogin();

            var resultObject = {};

            var detailObj = {};
            detailObj.AppID = appId;
            detailObj.InvoiceID = args[0].invoiceId;
            detailObj.CustomID = uid;
            detailObj.CountryCode = countryCode;

            var paymentDetails = JSON.stringify(detailObj);

            /* jshint undef: false*/
            $.ajax({
                /* jshint undef: true*/
                url: serverDpiUrlList[curServerType] + '/invoice/apply',
                type: 'POST',
                dataType: 'JSON',
                data: paymentDetails,
                timeout: 10000,
                success: function(res) {
                    if(res.CPStatus == '100000') {
                        var resJson = JSON.stringify(res);
                        var resApplyProduct = JSON.parse(resJson);

                        resultObject.cPStatus = resApplyProduct.CPStatus;
                        resultObject.cPResult = resApplyProduct.CPResult;
                        resultObject.appiliedTime = resApplyProduct.AppliedTime;

                        setTimeout(function() {
                            success(resultObject);
                        }, 0);
                    }
                    else {
                        setTimeout(function() {
                            var error = new Error(res.CPResult);
                            error.code = Number(res.CPStatus);
                            fail(error);
                        }, 0);
                    }

                },
                error: function(jqXHR, ajaxOptions, thrownError, request, error) {
                    console.log('[Error] thrownError:'+thrownError+';error:'+error+';[Message]:'+jqXHR.responseText+'</a>');

                    setTimeout(function() {
                        var error = new Error();
                        fail(error);
                    }, 0);
                },
                complete: function() {
                    console.log('complete');
                },
                failure: function() {
                    console.log('failure');

                    setTimeout(function() {
                        var error = new Error();
                        fail(error);
                    }, 0);
                }
            });
        }
        catch(e) {
            setTimeout(function() {
                var error = new Error(e.message);
                error.code = e.code;
                fail(error);
            }, 0);
        }
    }
};

require('cordova/exec/proxy').add('toast.billing', module.exports);

});

var moduleMapper = require('cordova/modulemapper');
moduleMapper.clobbers('cordova-plugin-toast.inputdevice', 'toast.inputdevice');
moduleMapper.clobbers('cordova-plugin-toast.tvchannel', 'toast.tvchannel');
moduleMapper.clobbers('cordova-plugin-toast.tvwindow', 'toast.tvwindow');
moduleMapper.clobbers('cordova-plugin-toast.tvaudiocontrol', 'toast.tvaudiocontrol');
moduleMapper.clobbers('cordova-plugin-toast.drminfo', 'toast.drminfo');
moduleMapper.clobbers('cordova-plugin-toast.application', 'toast.application');
moduleMapper.clobbers('cordova-plugin-toast.Media', 'toast.Media');
moduleMapper.clobbers('cordova-plugin-toast.MediaPlugin', 'toast.MediaPlugin');
moduleMapper.clobbers('cordova-plugin-toast.billing', 'toast.billing');
moduleMapper.clobbers('cordova-plugin-toast.MediaPluginWideVine', 'toast.MediaPluginWideVine');
moduleMapper.clobbers('cordova-plugin-toast.MediaPluginHLS', 'toast.MediaPluginHLS');
moduleMapper.clobbers('cordova-plugin-toast.MediaPluginUHD', 'toast.MediaPluginUHD');
moduleMapper.clobbers('cordova-plugin-toast.MediaPluginPlayReady', 'toast.MediaPluginPlayReady');
moduleMapper.runs('cordova-plugin-toast.inputdeviceProxy');
moduleMapper.runs('cordova-plugin-toast.tvwindowProxy');
moduleMapper.runs('cordova-plugin-toast.tvchannelProxy');
moduleMapper.runs('cordova-plugin-toast.tvaudiocontrolProxy');
moduleMapper.runs('cordova-plugin-toast.drminfoProxy');
moduleMapper.runs('cordova-plugin-toast.applicationProxy');
moduleMapper.runs('cordova-plugin-toast.mediaProxy');
moduleMapper.runs('cordova-plugin-toast.billingProxy');
moduleMapper.mapModules(window);
window.toast.version = '1.3.0';
})();

