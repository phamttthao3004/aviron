'use strict';

String.prototype.replaceAll = function (target, replacement) {
    return this.split(target).join(replacement);
};
String.prototype.contains = function (txt) {
    return this.indexOf(txt) >= 0;
};
String.format = function () {
    var s = arguments[0];
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            var reg = '{' + (i - 1) + '}';
            s = s.replaceAll(reg, arguments[i]);
        }
    }
    return s;
}
Array.prototype.insertArrayAt = function(index, arr) {
    if (arr != undefined && index >= 0 && index <= this.length) {
        var length = arr.length;
        for (var i = length - 1; i >= 0; i--) {
            var item = arr[i];
            this.splice(index, 0, item);
        }
    }
}
Array.prototype.contains = function (val, attr) {
    if (attr == undefined) {
        return this.indexOf(val) >= 0;
    } else {
        for (var i = 0; i < this.length; i++) {
            var item = this[i];
            if (item[attr] == val) {
                return true;
            }
        }
    }
    return false;
}

Number.isInteger = function (x) {
    return x % 1 === 0;
}
function ShowLoadingIcon() {
    $(".loading, .loading-mask").show();
}
function HideLoadingIcon() {
    $(".loading, .loading-mask").hide();
}
function StringIsEmpty(str) {
    //checking str is empty, undefined or null
    return (!str || 0 === str.length);
}
function CheckingIsEmail(value) {
    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(value);
}
function GetRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function FormatNumToThousand(num, unitStr) {
    var _unitStr = unitStr == undefined ? ',' : unitStr;
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + _unitStr);
}
//START - Session
function SetSession(sessionName, sessionObject, options) {
    var val = sessionObject == undefined ? undefined : JSON.stringify(sessionObject);
    sessionStorage.setItem(sessionName, val);
}
function GetSession(sessionName, options) {
    options = options == undefined ? {} : options;
    var val = sessionStorage.getItem(sessionName);
    var object = undefined;
    if (options.isString) {
        object = val;
    } else {
        if (val != undefined) {
            object = JSON.parse(val);
        }       
    }
    return object;
}
function RemoveSession(sessionName) {
    sessionStorage.removeItem(sessionName);
}
function ClearAllSession() {
    sessionStorage.clear();
}
//END - Session

//START - LocalStorage
function SetLocalStorage(key, object, options) {
    var val = object == undefined ? undefined : JSON.stringify(object);
    localStorage.setItem(key, val);
}
function GetLocalStorage(key, options) {
    options = options == undefined ? {} : options;
    var val = localStorage.getItem(key);
    var object = undefined;
    if (options.isString) {
        object = val;
    } else {
        if (val != undefined) {
            object = JSON.parse(val);
        }
    }
    return object;
}
function RemoveLocalStorage(key) {
    localStorage.removeItem(key);
}
function ClearAllLocalStorage() {
    localStorage.clear();
}
//END - LocalStorage

//START Verify email
function ResendNewMailVerify(email, successFunc, errorFunc) {    
    var api = window.APIService.Init();   
    var _data = {
        "action": CONSTANTS.EMAIL_API.RESEND_VERIFY_SIGNUP,
        "value":
        {
            "email": email
        }
    }
    api.callRequest('authmanagement', 'post', _data, successFunc, errorFunc, { isAuthorized: false });
    return;
}
//END Verify email