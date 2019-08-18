function InitFb() {
    window.fbAsyncInit = function () {
        // FB JavaScript SDK configuration and setup
        FB.init({
            appId: '553320404855002', // FB App ID
            cookie: true,  // enable cookies to allow the server to access the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.8' // use graph api version 2.8
        });

        // Check whether the user already logged in
        FB.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                //FB.getAccessToken();
            }
        });
    };

    // Load the JavaScript SDK asynchronously
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}
function FbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            LoginBySocial(CONSTANTS.LOGIN_METHOD.FACEBOOK, FB.getAccessToken());
        }
    }, { scope: 'email' });
}
function GetFbUserData() {
    FB.api('/me', { locale: 'en_US', fields: 'id,first_name,last_name,email,link,gender,locale,picture' },
        function (response) {
        });
}
function FbLogout() {
    FB.logout(function () {
    });
}