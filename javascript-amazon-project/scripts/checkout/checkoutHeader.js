import { getCartQuantity } from "./paymentSummary.js";

export function renderCheckoutHeader() {

  const quantity = getCartQuantity();

  document.querySelector('.js-checkout-header').innerHTML = `
    <div class="header-content">
      <div class="checkout-header-left-section">
        <a href="amazon.html">
          <img class="amazon-logo" src="images/amazon-logo.png" />
          <img
            class="amazon-mobile-logo"
            src="images/amazon-mobile-logo.png"
            alt=""
          />
        </a>
      </div>

      <div class="checkout-header-middle-section">
        Checkout (<a class="return-to-home-link" href="amazon.html">${quantity} ${quantity === 1 ? 'item' : 'items'}</a
        >)
      </div>

      <div class="checkout-header-right-section">
        <img src="images/icons/checkout-lock-ic-on.png" alt="" />
      </div>
    </div>
  `;
};