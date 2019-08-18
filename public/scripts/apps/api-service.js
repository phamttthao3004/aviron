var APIService = {
    Init: function() {
        function _Service() {
            this.domain = window.API_DOMAIN;
            this.headers = {
                'Content-Type': undefined
            }
            this.callRequest = function (_url, _method, _data, _successFunc, _errorFunc, _options) {
                _options = _options == undefined ? {} : _options;
                let async = _options.async == undefined ? true : _options.async;
                let showWaiting = _options.showWaiting == undefined ? true : _options.showWaiting;
                let isAuthorized = _options.isAuthorized == undefined ? true : _options.isAuthorized;
                let postFile = _options.postFile;
                let method = _method.toLowerCase();
                let ajaxData = undefined;

                if(!async){
                    showWaiting = false;
                }
                if (showWaiting) {
                    window.ShowLoadingIcon();
                }
                let asyncParams = "";
                if(method == 'get')
                {
                    if (_data != undefined) {
                        let keys = Object.keys(_data);
                        let length = keys.length;
                        for (let i = 0; i < length; i++) {
                            let key = keys[i];
                            let keyData = _data[key];
                            let txt = key + (keyData == undefined || keyData == '' ? '' : '=' + keyData);
                            if (asyncParams != "") {
                                asyncParams += '&&' + txt;
                            } else {
                                asyncParams += txt;
                            }
                        }
                    }
                }else {
                    ajaxData = _data;
                }

                let ajaxConfig = {
                    url: this.domain + _url + (postFile || asyncParams == "" ? '' : '?') + asyncParams,
                    type: method,
                    data: ajaxData,
                    dataType: 'json',
                    beforeSend: function(x) {
                        if (isAuthorized) {
                            var access_token = window.GetLocalStorage("ACCESS_TOKEN");
                            x.setRequestHeader("Authorization", "Bearer " + access_token);
                        }
                    },
                    async: async,
                    cache: false,
                    success: function (data, statusTxt, headerRes) {
                        headerRes.data = data;
                        if (_successFunc != undefined) {
                            _successFunc(headerRes);
                        }
                        if (showWaiting) {
                            window.HideLoadingIcon();
                        }
                    },
                    error: function (data, statusTxt, headerRes) {
                        if (typeof (headerRes) != 'object') {
                            headerRes = {};
                        }
                        headerRes.data = data;
                        if (_errorFunc != undefined) {
                            _errorFunc(headerRes);
                        }
                        if (showWaiting) {
                            window.HideLoadingIcon();
                        }
                    }
                }
                if (postFile) {
                    ajaxConfig['contentType'] = false;
                    ajaxConfig['processData'] = false;
                }
                window.$.ajax(ajaxConfig);

            }
        }
        return new _Service();
    }
}