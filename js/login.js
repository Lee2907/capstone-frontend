
const user = window.localStorage;
function login() {
    fetch("https://lee-buka2907.herokuapp.com/user-registration/", {
      method: "POST",
      body: JSON.stringify({
        username: document.getElementById("auth_username").value,
        password: document.getElementById("auth_password").value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data["description"] == "Invalid credentials") {
          alert("invalid cedentials")
          window.location.href = "./index.html";
          
          
        } else {
          
          window.location.href ="./logged_in.html";
        }
      });
  }

  function collect(){
    var inputUsername= document.getElementById("auth_username");
     localStorage.setItem("username", inputUsername.value);
    var inputPassword= document.getElementById("auth_password");
     localStorage.setItem("password", inputPassword.value);
     

  }