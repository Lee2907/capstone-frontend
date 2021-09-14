function getUser() {
    fetch("https://lee-buka2907.herokuapp.com/user-registration/", {
      method: "GET",
      body: JSON.stringify({
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let product_container = document.querySelector("#user-info");
        product_container.innerHTML = "";
      
          product_container.innerHTML += `
  
            <div class = "products">
              <div class = "product-content"> 
                <p class = "product-title">First Name: ${data.data.first_name}</p>
                <p class = "product-description">Last Name: ${data.data.last_name}</p>
                <p class = "product-price">Username: ${data.data.username} </p>
                <p class = "user_phone"> Password: ${data.data.password}</p>
                <p class = "user_phone"> Phone Number: ${data.data.phone_number}</p>
                <p class = "user_phone"> E-mail address: ${data.data.user_email}</p>
                

                
              </div>
                
            </div>
           `;
        
      });
}
getUser();



