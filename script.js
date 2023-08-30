function displayInput() {
    var firstName = document.getElementById("firstname").value;
    var middleName = document.getElementById("middlename").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var suffix = document.getElementById("suffix").value;
    var permanentAddress = document.getElementById("permanentAddress").value

    var output = "First Name: " + firstName + "<br>" +
                "Middle Name: " + middleName + "<br>" +
                "Last Name: " + lastName + "<br>" +
                "Email: " + email + "<br>" +
                "Contact Number: " + contact + "<br>" +
                "Suffix: " + suffix + "<br>" +
                "Permanent Address" + permanentAddress + "<br>";

    document.getElementById("output").innerHTML = output;

    alert("You are now seccessfully registered!");
}
