var VerifyEmail = function () {
    var url_string = window.location.href
    var url = new URL(url_string);
    var token = url.searchParams.get("token");
    var api = window.APIService.Init();
    var successFunc = function (res) {
        swal(CONSTANTS.NOTIFY_USER.EMAIL.VERIFY_SUCCESS, "", CONSTANTS.NOTIFY_TYPES.SUCCESS).then((result) => {
            processDoneVerify();
        });
    }
    var errorFunc = function (res) {
        if (res.data.status === 400 & res.data.responseJSON.className === CONSTANTS.SERVER_ERROR.GENERAL.BAD_REQUEST) {
            swal({ title: CONSTANTS.NOTIFY_USER.EMAIL.YOUR_EMAIL_VERIFIED, text: CONSTANTS.NOTIFY_USER.EMAIL.YOUR_EMAIL_VERIFIED_NOTE, icon: CONSTANTS.NOTIFY_TYPES.WARNING }).then((result) => {
                processDoneVerify();
            });
        } else {
            swal({
                title: CONSTANTS.NOTIFY_USER.EMAIL.VERIFY_FAIL,
                text: res.data.responseJSON.message,
                icon: CONSTANTS.NOTIFY_TYPES.ERROR,
                button: "OK",
            });
        }
    }
    var _data = {
        "action": CONSTANTS.EMAIL_API.VERIFY_SIGNUP_LONG,
        "value": token
    }
    api.callRequest('authmanagement', 'post', _data, successFunc, errorFunc, { isAuthorized: false });
}
var processDoneVerify = function () {
    var url_string = window.location.href
    var url = new URL(url_string);
    var url_before = url.searchParams.get("url");
    if (typeof url_before === "undefined") {
        window.location.href = "/login.html";
    } else {
        window.location.href = "/" + url_before;
    }
}
var ResendMailVerify = function () {
    var url_string = window.location.href
    var url = new URL(url_string);
    var _email = url.searchParams.get("email");
    var successFunc = function (res) {
        swal({ title: CONSTANTS.NOTIFY_USER.EMAIL.SEND_SUCCESS, text: CONSTANTS.NOTIFY_USER.EMAIL.SEND_SUCCESS_NOTE, icon: CONSTANTS.NOTIFY_TYPES.SUCCESS });
    }
    var errorFunc = function (res) {
        if (res.data.responseJSON.errors.$className === CONSTANTS.SERVER_ERROR.EMAIL.IS_NOT_VERIFIED) {
            swal(CONSTANTS.NOTIFY_USER.EMAIL.YOUR_EMAIL_VERIFIED, "", CONSTANTS.NOTIFY_TYPES.ERROR).then((result) => {
                processDoneVerify();
            });
        } else {
            swal(CONSTANTS.NOTIFY_USER.EMAIL.SEND_FAIL, CONSTANTS.NOTIFY_USER.EMAIL.SEND_FAIL_NOTE, CONSTANTS.NOTIFY_TYPES.ERROR);
        }
    }
    window.ResendNewMailVerify(_email, successFunc, errorFunc);
}