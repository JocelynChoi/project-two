// Getting references to our form and inputs
function handleLoginSignup(form, url) {
    var form = $(form);
    var usernameInput = $("input#username-input");
    var passwordInput = $("input#password-input");

    // When the form is submitted, we validate there's an email and password entered
    form.on("submit", function (event) {
        event.preventDefault();
        $(".container").hide();
        var userData = {
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.username || !userData.password) {
            return;
        }

        // If we have an email and password we run the authUser function and clear the form
        authUser(userData.username, userData.password);
        usernameInput.val("");
        passwordInput.val("");
    });

    // AUTHUser does a post to the url and if successful, redirects us the the members page
    function authUser(username, password) {
        $.post(url, {
            username: username,
            password: password
        }).then(function (data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(handleAuthErr);
    }

    function handleAuthErr(err) {
        $(".container").show();
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
}