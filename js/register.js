// function to register user
function register() {
    fetch("https://lee-buka2907.herokuapp.com/user-registration", {
      method: "POST",
      body: JSON.stringify({
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        address: document.getElementById("address").value,
        phone_number: document.getElementById("phone_number").value,
        user_email: document.getElementById("user_email").value,
      }),
      headers: {
        "Content-type": "application/json"
        
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["status_code"] == 201) {
          alert("Registered successfully!, please log in.");
          window.location.href = "./login_page.html";
        } else {
          alert("Please enter correct information");
          
        }
      });
  }