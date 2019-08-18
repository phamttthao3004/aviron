function ResetPassword() {
    $("#re-note-msg").hide();
    $("#re-error-msg").hide();
    $("#re-error-msg").html();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();

    if (password == "") {
        $("#re-error-msg").html("New password is required.");
        $("#re-error-msg").show();
        return;
    }
    if (password.length < CONSTANTS.INPUT_LENGTH.PASSWORD_MIN) {
        $("#re-error-msg").html(String.format(CONSTANTS.NOTIFY_USER.PASSWORD_LENGTH, CONSTANTS.INPUT_LENGTH.PASSWORD_MIN));
        $("#re-error-msg").show();
        return;
    }
    if (password !== confirmPassword) {
        $("#re-error-msg").html(CONSTANTS.NOTIFY_USER.CONFIRM_PASSWORD_ERROR);
        $("#re-error-msg").show();
        return;
    }

    var api = window.APIService.Init();
    var url_string = window.location.href
    var url = new URL(url_string);
    var token = url.searchParams.get("token");

    var successFunc = function (res) {
        var data = res.data;
        register_success_data = data;
        swal("Reset password successfully!", "", "success").then((result) => {
            ResetPasswordSuccess(register_success_data);
        });       
    }
    var errorFunc = function (res) {
        var data = res.data.responseJSON;
        if (res.data.responseJSON.errors.$className == 'resetExpired') {
            $("#re-error-msg").html("Password reset token has expired. You need to request another email forgot password!");
        } else {
            $("#re-error-msg").html(data.message);
        }
        $("#re-error-msg").show();
    }
    var _data =
    {
        "action": CONSTANTS.PASSWORD_API_ACTION.RESET_PASSWORD,
        "value": {
            "password": password,
            "token": token
        }
    }
    api.callRequest('authmanagement', 'post', _data, successFunc, errorFunc, { isAuthorized: false });
}
function ResetPasswordSuccess(data) {
    var user_info = {
        email: data.user.email,
        role: data.user.roles[0]
    }
    window.SetLocalStorage(this.CONSTANTS.STORAGE_NAME.ACCESS_TOKEN_KEY_NAME, data.accessToken);
    window.SetLocalStorage(this.CONSTANTS.STORAGE_NAME.USER_INFO, user_info);
    window.location.href = "/";
}
function GoToLogin() {
    window.location.href = "/login.html";
}