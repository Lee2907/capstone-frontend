let products = [];
let cart = [];
let storedCartitems = JSON.parse(localStorage.getItem("cart") || "[]");


// Function to get all data
function getData() {
    fetch("https://lee-buka2907.herokuapp.com/create-products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        products = data;
        make_products(data);
      });
  }
  
  getData();


function make_products(products) {
  let product_container = document.querySelector("#products-container");
  product_container.innerHTML = "";
    
  products.data.forEach((product) => {

    product_container.innerHTML += `

          <div class = "products">
              <img src="${product.image}" class = "product-image">
              <div class = "product-content"> 
                  <h4 class = "product-title"> ${product.product_name}</h4>
                  <p class = "product-description"> ${product.brand}</p>
                  <p class = "product-price">R${product.price} </p>
                  <button onclick="addToCart(${product.prod_id})">Add to Cart</button>
              
              </div>
              
          </div>
          `;
      });
}
make_products();

// function to add to cart
function addToCart(prod_id) {
  console.log(products.data);
  let product = products.data.find((item) => {
    return item.prod_id == prod_id;
  });
  
  cart.push(product);
  
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart(storedCartitems);
  
  console.log(prod_id);
  
  
}

// function to show items in the cart
function renderCart(cartItems) {
  let cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = "";
  if (cartItems.length > 0) {
    cartItems.map((cartItem) => {
      cartContainer.innerHTML += `
      <div class = "products">
            <img src="${cartItem.image}" class = "product-image">
            <div class = "product-content"> 
                <h4 class = "product-title"> ${cartItem.product_name}</h4>
                <p class = "product-description"> ${cartItem.brand}</p>
                <p class = "product-price">R${cartItem.price} </p>
                <button class ="revome_cart" onclick="removeItem(${cartItems.prod_id})">Remove item</button>
            </div>
            
        </div>
      
      
      `;
    });
    let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    cartContainer.innerHTML += `<h3> Your total is: ${totalPrice} </h3>`;
  } else {
    cartContainer.innerHTML = "<h2> No items in cart</h2>";
  }
}

function toggleCart() {
  document.querySelector("#cart").classList.toggle("active");
}

// filter items
function searchForProducts() {
  let searchTerm = document.querySelector("#searchTerm").value;
  console.log(searchTerm);
  console.log(products.data);
  let searchedProducts = products.data.filter((product) =>
    product.product_name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  console.log(Object.entries(searchedProducts));
  make_products(Object.entries(searchForProducts));
}




  
  