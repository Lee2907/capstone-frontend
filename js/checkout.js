let storedCartitems = JSON.parse(localStorage.getItem("cart") || "[]");
function showCart(){
    console.log(storedCartitems);
    let product_container = document.querySelector("#cart-items");
    
      
    storedCartitems.forEach((product) => {
  
      product_container.innerHTML += `
  
            <div class = "products">
                <img src="${product.product_picture}" class = "product-image">
                <div class = "product-content"> 
                    <h4 class = "product-title"> ${product.product_name}</h4>
                    <p class = "product-description"> ${product.description}</p>
                    <p class = "product-price">R${product.price} </p>
                    <button onclick="addToCart(${product.order_id})">Add to Cart</button>
                
                </div>
                
            </div>
            `;
        });
  
  }
  showCart();