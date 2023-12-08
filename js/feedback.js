function validate() {
    let email = document.forms["myForm"]["email"];
    let feedback = document.forms["myForm"]["feedback"];

    if (email.value == "") {
        swal("Email anda harus diisi!!");
        email.focus();
        return false;
    }
    if (feedback.value == "") {
        swal("Maaf,feedback anda belum diisi!!");
        feedback.focus();
        return false;
    }
    else {
        location.href = "profile.html";
    }

    return true;
}