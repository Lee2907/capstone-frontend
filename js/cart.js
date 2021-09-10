let storedCartitems = JSON.parse(localStorage.getItem("cart") || "[]");

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
                  <button class ="revome_cart" onclick="removeItem(${cartItem.prod_id})">Remove item</button>
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

renderCart(storedCartitems);
  
function toggleCart() {
    document.querySelector("#cart").classList.toggle("active");
}

// remove from cart
function removeItem(id) {
    storedCartitems = storedCartitems.filter(item => item.prod_id != id)
    renderCart(storedCartitems);
    localStorage.setItem('cart', JSON.stringify(storedCartitems))
}
  
