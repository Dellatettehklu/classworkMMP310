function randomPassword(length) {

    var update_username = document.getElementById("update_username").value;

    var keyword = document.getElementById("keyword").value;

     var row_password = document.getElementById("row_password").value;


    var chars = keyword + update_username;
    var pass = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
    }
    return pass;
}

function generate() {
    myform.row_password.value = randomPassword(myform.length.value);
}
