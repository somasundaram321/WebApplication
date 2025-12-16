
function saveForm() {

    let nameInput = document.getElementById("name");
    let name = nameInput.value.trim();
    let nameError = document.getElementById("nameError");

    // Clear previous error
    nameError.innerText = "";

    // Full Name validation
    if (name === "") {
        nameError.innerText = "Full Name is required";
        nameInput.focus();
        return; // stop execution
    }

    // Get other values
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;

    let skills = [];
    document.querySelectorAll("input[type='checkbox']:checked").forEach(item => {
        skills.push(item.value);
    });

    let address = document.getElementById("address").value.trim();

    
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("DOB:", dob);
    console.log("Gender:", gender);
    console.log("Skills:", skills);
    console.log("Address:", address);

    alert("Form Saved Successfully!");
}



function clearForm() {
    var inputs = document.querySelectorAll("input, select, textarea");
    console.log(inputs);
    
    inputs.forEach(item => {
        if (item.type === "checkbox" || item.type === "radio") {
            item.checked = false;  // Uncheck checkboxes
        } else {
            item.value = "";       // Clear other fields
        }
    });
}
