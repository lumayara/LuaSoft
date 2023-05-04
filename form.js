const validateForm = () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const companyInput = document.getElementById("company");
    const messageInput = document.getElementById("message");
    const submitBtn = document.getElementById("submit-btn");
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || companyInput.value.trim() === "" || messageInput.value.trim() === "") {
      submitBtn.disabled = true;
	    submitBtn.hover = false;
      return false;
    }
    
    submitBtn.disabled = false;
	  submitBtn.hover = true;
    return true;
  }

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const companyInput = document.getElementById("company");
const messageInput = document.getElementById("message");

nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
companyInput.addEventListener("input", validateForm);
messageInput.addEventListener("input", validateForm);