// Settings to make program modifiable
var users = ["abc", "def", "ghi"];
var passwords = ["123", "456", "789"];
var max_attempts = 3;

// HTML objects
var output = document.getElementById("output");

// Variables modified by code
var attempts = 0;

/**
 * Starts the login process
 */
function login() {
    if (attempts < max_attempts) {
        user = check();
        if (user) {
            valid(user);
            attempts = 0;
        } else {
            attempts++;
            output.innerHTML = "Feil brukernavn eller passord, " + (max_attempts - attempts) + " forsøk igjen.";
        }
    } else {
        output.innerHTML = "For mange forsøk!"
    }
}

/**
 * Checks if username/password combo is correct
 * @returns {String} Position of user in array
 */
function check() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for (const i in users) {
        if (username == users[i] && password == passwords[i]) {
            return i;
        }
        return 0;
    }
    return 0;
}

/** 
 * Code to be run on correct username/password combo
 * @param {Number} user - Position of user in array
 */
 function valid(user) {
    output.innerHTML = "Velkommen, " + users[user];
}