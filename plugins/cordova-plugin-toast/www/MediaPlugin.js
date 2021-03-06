cordova.define("cordova-plugin-toast.MediaPlugin", function(require, exports, module) { /*
 * Copyright 2015 Samsung Electronics Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
