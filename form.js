function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var companyInput = document.getElementById("company");
    var messageInput = document.getElementById("message");
    var submitBtn = document.getElementById("submit-btn");
    
    if (nameInput.value.trim() == "" || emailInput.value.trim() == "" || companyInput.value.trim() == "" || messageInput.value.trim() == "") {
      submitBtn.disabled = true;
	  submitBtn.hover = false;
      return false;
    }
    
    submitBtn.disabled = false;
	submitBtn.hover = true;
    return true;
  }

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);