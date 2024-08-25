
function validatePassword(){
    let passInt = document.getElementById("floatPswd").value;
    let submit = document.getElementById("sub-but");

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if(passwordRegex.test(passInt)){
        submit.disabled  = false;
    }
    else{
        submit.disabled = true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const url = "https://a6d6-2401-4900-1c6e-d587-5219-63db-fa6b-25e7.ngrok-free.app/api/signup";

  document.getElementById("sub-but").addEventListener("click", function() {
    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value;
    const email = document.getElementById("floatInput").value;
    const password = document.getElementById("floatPswd").value;

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
     console.log(firstName);
    // Make POST request
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Response from the server
      // Optionally, you can redirect the user or display a success message here
    })
    .catch(error => {
      console.error("Error:", error);
      // Optionally, you can display an error message here
    });
  });
});


  
document.addEventListener("DOMContentLoaded", function() {
  const url = "https://a6d6-2401-4900-1c6e-d587-5219-63db-fa6b-25e7.ngrok-free.app/api/login";

  document.querySelector(".but-on").addEventListener("click", function() {
    const email = document.getElementById("floatInput").value;
    const password = document.getElementById("floatPswd").value;

    const data = {
      email: email,
      password: password
    };

    console.log("Email is:",email);
    // Make POST request
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Response from the server
      // Optionally, you can redirect the user or display a success message here
    })
    .catch(error => {
      console.error("Error:", error);
      // Optionally, you can display an error message here
    });
  });
});


  
