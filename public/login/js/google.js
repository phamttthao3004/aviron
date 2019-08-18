function InitGoogle() {
    // Load "client" & "auth2" libraries
    gapi.load('client:auth2', {
        callback: function () {
            // Initialize client & auth libraries
            gapi.client.init({
                clientId: '975214623529-fi3hd94ad1ch29mlv2e6emgk663icr63.apps.googleusercontent.com',
                scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
            }).then(
                function (success) {
                    // You can now make API calls
                },
                function (error) {
                    // console.log(error) to find the reason
                }
            );
        },
        onerror: function () {
            // Failed to load libraries
        }
    });
}
function LoginGoogle() {
    gapi.auth2.getAuthInstance().signIn().then(
        function (data) {
            LoginBySocial(CONSTANTS.LOGIN_METHOD.GOOGLE, data.Zi.id_token);
        },
        function (error) {
            // console.log(error) to find the reason
        }
    );
}