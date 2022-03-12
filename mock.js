firstNameEl = document.getElementById("firstName-el")
lastNameEl = document.getElementById("lastName-el")
emailEl = document.getElementById("email-el")
commentsEl = document.getElementById("comments-el")
submitBtn = document.getElementById("submit-btn")

userMessegeEl = document.getElementById("userMessege-el")
firstNameInputEl = document.getElementById("firstNameInput-el")
lastNameInputEl = document.getElementById("lastNameInput-el")
emailInputEl = document.getElementById("emailInput-el")
commentsInputEl = document.getElementById("commentsInput-el")

submitBtn.addEventListener("click", function(){
userMessegeEl.textContent = "Information Submitted. Below is What We received"
firstNameInputEl.textContent = "First Name: " + firstNameEl.value
lastNameInputEl.textContent =  "Last Name: " + lastNameEl.value
emailInputEl.textContent =    "Email: " + emailEl.value
commentsInputEl.textContent =  "Comments: " + commentsEl.value
})
