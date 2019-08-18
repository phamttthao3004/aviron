var register_success_data = undefined;

$(document).ready(function () {
    if (window.GetLocalStorage(CONSTANTS.STORAGE_NAME.ACCESS_TOKEN_KEY_NAME) != undefined) {
        window.location.href = "/";
    }
    $('#username').focus();
    SetEvents();
    InitFb();
    InitGoogle();
});

function SetEvents() {
    $("#username, #password").on("keydown", function (event) {
        if (event.keyCode == 13) {
            Login();
        }
    });
}
function Login() {
    $("#error-msg").hide();
    var api = window.APIService.Init();
    var successFunc = function (res) {
        var data = res.data;
        LoginSuccess(data);
    }
    var errorFunc = function (res) {
        var data = res.data;
        if (data.status == 401) {
            $("#error-msg").show();
        }

    }
    var _data = {
        "strategy": CONSTANTS.LOGIN_METHOD.LOCAL,
        "email": $('#username').val(),
        "password": $('#password').val()
    }
    api.callRequest('authentication', 'post', _data, successFunc, errorFunc, { isAuthorized: false });
}
function Register() {
    $("#re-note-msg").hide();
    $("#re-error-msg").hide();
    $("#re-error-msg").html();
    var email = $("#re-email").val();
    email = (email || "").trim();
    //var username = $("#re-username").val();
    //username = (username || "").trim();
    var password = $("#re-password").val();

    if (email == "") {
        $("#re-error-msg").html("Email is required.");
        $("#re-error-msg").show();
        return;
    }
    //if (username == "") {
    //    $("#re-error-msg").html("Username is required.");
    //    $("#re-error-msg").show();
    //    return;
    //}
    if (!CheckingIsEmail(email)) {
        $("#re-error-msg").html("Enter a valid email");
        $("#re-error-msg").show();
        return;
    }
    if (password == "") {
        $("#re-error-msg").html("Password is required.");
        $("#re-error-msg").show();
        return;
    }
    if (password.length < CONSTANTS.INPUT_LENGTH.PASSWORD_MIN) {
        $("#re-error-msg").html(String.format(CONSTANTS.NOTIFY_USER.PASSWORD_LENGTH, CONSTANTS.INPUT_LENGTH.PASSWORD_MIN));
        $("#re-error-msg").show();
        return;
    }

    var api = window.APIService.Init();
    var successFunc = function (res) {
        var data = res.data;
        register_success_data = data;
        $('#success-email').html(email);
        $('.register-session').hide();
        $('.register-success-session').show();

    }
    var errorFunc = function (res) {
        var data = res.data.responseJSON;
        $("#re-error-msg").html(data.message);
        $("#re-error-msg").show();

    }
    var _data = {
        "email": email,
        "password": password
    }
    api.callRequest('users?', 'post', _data, successFunc, errorFunc, { isAuthorized: false });
}
function GoToRegister() {
    $("#re-email, #re-username, #re-password").val('');
    $("#re-error-msg").hide();
    $("#re-note-msg").show();
    $('.login-session').hide();
    $('.register-session').show();
}
function GoToLogin() {
    $("#username, #password").val('');
    $("#error-msg").hide();
    $('.register-session').hide();
    $('.login-session').show();
    $('.enter-email-reset-session').hide();
}
function LoginSuccess(data, isRegister) {
    var user_info = {
        email: data.user.email,
        role: data.user.roles[0]
    }
    window.SetLocalStorage(CONSTANTS.STORAGE_NAME.ACCESS_TOKEN_KEY_NAME, data.accessToken);
    window.SetLocalStorage(CONSTANTS.STORAGE_NAME.USER_INFO, user_info);
    window.location.href = "/";
}
function RegisterSuccess() {
    LoginSuccess(register_success_data, true);
}
function LoginBySocial(loginMethod, accessToken) {
    var api = window.APIService.Init();
    var successFunc = function (res) {
        var data = res.data;
        LoginSuccess(data);
    }
    var errorFunc = function (res) {
    }
    var _data = {
        "strategy": loginMethod,
        "access_token": accessToken
    }
    api.callRequest('authentication', 'post', _data, successFunc, errorFunc, { isAuthorized: false });
}
function GoForgotPassword() {
    $('#email-reset').val($('#username').val());
    $('.login-session').hide();
    $('.enter-email-reset-session').show();
    $('#email-reset').focus();
}
function SendMailResetPassword() {
    var email = $('#email-reset').val();
    if (email == "") {
        $("#email-error-msg").html("Email is required.");
        $("#email-error-msg").show();
        return;
    }
    if (!CheckingIsEmail(email)) {
        $("#email-error-msg").html("Enter a valid email");
        $("#email-error-msg").show();
        return;
    }
    $("#email-error-msg").hide();
    var api = window.APIService.Init();
    var successFunc = function (res) {
        swal({
            title: CONSTANTS.NOTIFY_USER.EMAIL.SEND_SUCCESS, icon: CONSTANTS.NOTIFY_TYPES.SUCCESS, dangerMode: true,
            text: CONSTANTS.NOTIFY_USER.EMAIL.CHECK_EMAIL_TO_RESET_PASSWORD
        }).then(
            GoToLogin()
        );;
    }
    var errorFunc = function (res) {
        var data = res.data;
        if (data.responseJSON.errors.$className === "isVerified") {
            swal({
                title: CONSTANTS.NOTIFY_USER.EMAIL.EMAIL_NOT_VERIFY,
                text: CONSTANTS.NOTIFY_USER.EMAIL.EMAIL_NOT_VERIFY_NOTE,
                icon: CONSTANTS.NOTIFY_TYPES.WARNING,
                buttons: {
                    cancel: "CLOSE",
                    ok: "RESEND VERIFY EMAIL"
                },
                dangerMode: true
            }).then(function (willSendEmailAgain) {
                if (willSendEmailAgain) {
                    ResendMailVerify(email);
                }
            });
        } else {
            $("#email-error-msg").html(res.data.responseJSON.message);
            $("#email-error-msg").show();
        }
    }
    var _data = {
        action: CONSTANTS.PASSWORD_API_ACTION.SEND_RESET_PASSWORD,
        value: { "email": email }
    }
    api.callRequest('authmanagement', 'post', _data, successFunc, errorFunc, { isAuthorized: false });
}
function CheckingIsEmail(value) {
    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(value);
}
var ResendMailVerify = function (email) {
    var successFunc = function (res) {
        swal({ title: CONSTANTS.NOTIFY_USER.EMAIL.SEND_SUCCESS, text: CONSTANTS.NOTIFY_USER.EMAIL.SEND_SUCCESS_NOTE, icon: CONSTANTS.NOTIFY_TYPES.SUCCESS });
    }
    var errorFunc = function (res) {
        if (res.data.responseJSON.errors.$className === CONSTANTS.SERVER_ERROR.EMAIL.IS_NOT_VERIFIED) {
            swal(CONSTANTS.NOTIFY_USER.EMAIL.YOUR_EMAIL_VERIFIED, "", CONSTANTS.NOTIFY_TYPES.ERROR).then(function (result) {
            });
        } else {
            swal(CONSTANTS.NOTIFY_USER.EMAIL.SEND_FAIL, CONSTANTS.NOTIFY_USER.EMAIL.SEND_FAIL_NOTE, CONSTANTS.NOTIFY_TYPES.ERROR);
        }
    }
    window.ResendNewMailVerify(email, successFunc, errorFunc);
}