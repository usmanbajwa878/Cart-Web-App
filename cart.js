

function displayCart(){
    let cartItems = localStorage.getItem('Cart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    if(cartItems && productContainer){
      console.log('running')
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item=>{
          productContainer.innerHTML += `
          <div class="product-header">
                <div class="product-title">${item.name}</div>
                <div class="price">${item.price}</div>
                <div class="quantity">${item.inCart}</div>
                <div class="total">$${item.inCart*item.price}.00</div>
          </div>
    
          `
      });

      productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
        Total
        </h4>
        <h4 class="basketTotal">
        $${cartCost}.00
        </h4>
      </div>
      `
    }
  
  }
  document.addEventListener("DOMContentLoaded", function () {
    displayCart();
    var checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click',()=>{
        const data = localStorage.getItem('Cart');
        const total = localStorage.getItem('totalCost');
        
      firebase.database().ref('orders/' + Math.floor(Math.random()*100)).set({
         cart:data,
         Total:total
        });
    })
  });
  


  
