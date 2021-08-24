let products = [
  {
    name: "Burgers",
    tag: "burger",
    price: 20,
    inCart: 0,
  },
  {
    name: "SandWiches",
    tag: "sandwiches",
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
    tag: "StuffedEggs",
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
  document.querySelectorAll(".add-cart").forEach((item, index) => {
    item.addEventListener("click", (event) => {
      console.log("events", event);
      cartNumber(products[index]);
      totalCost(products[index]);
    });
  });
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
    if (cartItems[productItem.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [productItem.tag]: productItem,
      };
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

function totalCost(product) {
  console.log(product.price);
  let total = localStorage.getItem("totalCost");


  if (total != null) {
    total = parseInt(total);
    let totalPrice = product.price + total;
    localStorage.setItem("totalCost", totalPrice);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}
