var API_DOMAIN = "http://192.168.23.246:3030/";
var ROOT_FILE = "";
var CONSTANTS = new function () {
    this.NOTIFY_TYPES = new function () {
        this.SUCCESS = "success";
        this.ERROR = "error";
        this.INFO = "info";
        this.WARNING = "warning";
    }
    this.LOGIN_METHOD = new function () {
        this.LOCAL = "local";
        this.GOOGLE = "google-token";
        this.FACEBOOK = "facebook-token";
    };
    this.USER = new function () {
        this.ROLE = new function () {
            this.NORMAL_USER = "authenticated";
            this.ADMIN = "administrator";
            this.EDITOR = "editor";
        }
    }
    this.PASSWORD_API_ACTION = new function () {
        this.RESET_PASSWORD = "resetPwdLong";
        this.SEND_RESET_PASSWORD = "sendResetPwd";
        this.CHANGE_PASSWORD = "passwordChange";
    }
    this.EMAIL_API = new function () {
        this.VERIFY_SIGNUP_LONG = "verifySignupLong";
        this.RESEND_VERIFY_SIGNUP = "resendVerifySignup";
        this.CHANGE_EMAIL = "identityChange";
        this.CHECK_UNIQUE = "checkUnique";
    }
    this.STORAGE_NAME = new function () {
        this.ACCESS_TOKEN_KEY_NAME = "ACCESS_TOKEN";
        this.USER_INFO = "USER_INFO";
    }
    this.INPUT_LENGTH = new function () {
        this.PASSWORD_MIN = 6;
    }
    this.NOTIFY_USER = new function () {
        this.PASSWORD_LENGTH = "Password must be at least {0} characters";
        this.CONFIRM_PASSWORD_ERROR = "Those passwords didn't match. Try again.";
        this.EMAIL = new function () {
            this.VERIFY_FAIL = "Verify fail!";
            this.VERIFY_SUCCESS = "Verify Successfully!";
            this.YOUR_EMAIL_VERIFIED = "Your email verified!";
            this.YOUR_EMAIL_VERIFIED_NOTE = "Your email is only verified once";
            this.SEND_SUCCESS = "Send Successfully!";
            this.SEND_SUCCESS_NOTE = "Please check your email to verify";
            this.SEND_FAIL = "Send mail not success!";
            this.SEND_FAIL_NOTE = "Try again!";
            this.EMAIL_NOT_VERIFY = "Your email not verify!";
            this.EMAIL_NOT_VERIFY_NOTE = "Please check your email to verify";
            this.CHECK_EMAIL_TO_RESET_PASSWORD = "Please check your email to reset password";
        }
    }
    this.SERVER_ERROR = new function () {
        this.GENERAL = new function () {
            this.BAD_REQUEST = "bad-request";
        }
        this.EMAIL = new function () {
            this.IS_NOT_VERIFIED = "isNotVerified";
        }
    }
};