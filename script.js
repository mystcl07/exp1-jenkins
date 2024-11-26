function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const qualification = document.querySelector('input[name="qualification"]:checked');
    const photo = document.getElementById("photo").value;

    if (!firstName || !lastName || !dob || !phone || !email || !gender || !qualification || !photo) {
        alert("Please fill out all fields");
        return false;
    }

    // Prompt message and redirect after submission
    alert("Registration Successful!");

    // Storing form data in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("dob", dob);
    localStorage.setItem("gender", gender.value);
    localStorage.setItem("phone", phone);
    localStorage.setItem("email", email);
    localStorage.setItem("qualification", qualification.value);
    localStorage.setItem("photo", photo);

    // Redirect to the details page
    window.location.href = "details.html";
    return false;
}
