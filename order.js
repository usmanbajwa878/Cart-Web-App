let products = [
  {
    name: "Burgers",
    tag: "burger",
    price: 20,
    inCart: 0,
  },
  {
    name: "Pureee",
    tag: "puree",
    price: 20,
    inCart: 0,
  },
  {
    name: "Pureee",
    tag: "puree",
    price: 20,
    inCart: 0,
  },
  {
    name: "Stuffed Eggs",
    tag: "puree",
    price: 20,
    inCart: 0,
  },
  {
    name: "Bisque",
    tag: "bisque",
    price: 20,
    inCart: 0,
  },
  {
    name: "Cake",
    tag: "Cake",
    price: 20,
    inCart: 0,
  },
  {
    name: "Drinks",
    tag: "Drinks",
    price: 20,
    inCart: 0,
  },
];
let carts = document.getElementsByClassName("add-cart");

document.addEventListener("DOMContentLoaded", function () {

  var tableElements = document.getElementsByClassName("add-cart");
  console.log("table", tableElements);
  for (var i = 0; i < tableElements.length; i++) {
    tableElements[i].addEventListener("click", () => {
        console.log('item',i)
      cartNumber(products[i]);
    });
  }
  loadCartNumber();
});

function cartNumber(product) {
  console.log("prod", product);
  let cartNumbers = localStorage.getItem("cartNumbers");
  cartNumbers = parseInt(cartNumbers);
  if (cartNumbers) {
    localStorage.setItem("cartNumbers", cartNumbers + 1);
    document.getElementsByClassName("cart-qty")[0].textContent = cartNumbers;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.getElementsByClassName("cart-qty")[0].textContent = 1;
  }
  setItems(product);
}

function setItems(productItem) {
  let cartItems = localStorage.getItem("Cart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
      if(cartItems[productItem.tag] == undefined){
          cartItems={
              ...cartItems,
              [productItem.tag]:productItem
          }
      }
    cartItems[productItem.tag].inCart += 1;
  } else {
    productItem.inCart = 1;
    cartItems = {
      [productItem.tag]: productItem,
    };
  }

  localStorage.setItem("Cart", JSON.stringify(cartItems));
}

function loadCartNumber() {
  let cartNumbers = localStorage.getItem("cartNumbers");
  cartNumbers = parseInt(cartNumbers);
  document.getElementsByClassName("cart-qty")[0].textContent = cartNumbers;
}
