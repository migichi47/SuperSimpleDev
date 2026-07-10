export function updateCartQuantity(container) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })

  const element = document.querySelector(container);

  if(cartQuantity) {
    element.innerText = cartQuantity;
  }

  else if(cartQuantity === 0) {
    element.innerText = '';
  }
}
