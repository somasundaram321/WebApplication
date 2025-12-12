function saveForm() {
    console.log("Coming here...");
    
    alert("Form Saved Successfully! (No backend yet)");
}

/* function clearForm() {
    var inputs = document.querySelectorAll("input, select, textarea");
    inputs.forEach(item => item.value = "");
} */
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
