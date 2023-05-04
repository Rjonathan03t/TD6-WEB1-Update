const form = document.getElementById("form");
const formulaire = document.getElementById("formulaire");
const register = document.getElementById("registerButton");
const addButton = document.getElementById("addButton");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");

formulaire.classList.add("lowOpacity");
if (formulaire.classList == "lowOpacity") {
    addButton.disabled = true;
    firstName.disabled = true;
    lastName.disabled = true;
}

addButton.addEventListener("click", () => {
    register.classList.remove("lowOpacity");
    addButton.classList.add("lowOpacity");
    register.disabled = false;
    addButton.disabled = true;
    firstName.disabled = true;
    lastName.disabled = true;
    formulaire.classList.add("dontShow");
    
    setTimeout(() => {
        if(firstName.value == "" || lastName.value == ""){
            alert("Empty values, please enter something not empty.")
        }else{
            alert(firstName.value + " " + lastName.value + " registered");
        }  
        firstName.value = "";  
        lastName.value = "";  
    }, 1000);

})
register.addEventListener("click", () => {
    register.classList.add("lowOpacity");
    addButton.classList.remove("lowOpacity");
    register.disabled = true;
    addButton.disabled = false;
    firstName.disabled = false;
    lastName.disabled = false;
    formulaire.classList.remove("lowOpacity");
    formulaire.classList.remove("dontShow");
    let newInput = document.createElement("<input>");
    newInput.innerText = "type = 'text'";
    
})




