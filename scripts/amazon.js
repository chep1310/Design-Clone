import {cart, addToCart} from '../data/cart.js'; 
import {products, loadProducts} from '../data/products.js'
import { formatCurrency } from './utils/money.js';
//always put imports at TOP
//to imports to work always use LIVE Server
//no need of order in HTML to load scripts first

loadProducts(renderProductsGrid); //callback

export function renderProductsGrid(){
    let productsHTML = '';

    products.forEach((product)=>{
      productsHTML += `
            <div class="product-container">
              <div class="product-image-container">
                <img class="product-image"
                  src="${product.image}">
              </div>

              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>

              <div class="product-rating-container">
                <img class="product-rating-stars"
                  src="${product.getStarsUrl()}">
                <div class="product-rating-count link-primary">
                  ${product.rating.count}
                </div>
              </div>

              <div class="product-price">
              ${product.getPrice()}
              </div>

              <div class="product-quantity-container">
                <select>
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              
              ${product.extraInfoHTML()}

              <div class="product-spacer"></div>

              <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
              </div>

              <button class="
              add-to-cart-button 
              button-primary 
              js-add-to-cart" 
              data-product-id="${product.id}"> 
                Add to Cart
              </button>
            </div>`;
            
    });
    //line 53: data attritbute in html always starts with data-
    document.querySelector('.js-products-grid').innerHTML=productsHTML;
    updateCartQuantity();
    //function of updating cartqty on homepage only
    function updateCartQuantity(){
      let cartQuantity = 0;
      cart.forEach((cartItem)=>{
        cartQuantity += cartItem.quantity;
      });
      document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
    }

    //select the Add to cart button and put values in button.
    //running forEach to set values to button variable
    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{  
    //add to cart button listener 
      button.addEventListener('click',()=>{ 
      //fetch the product name when add to cart is clicked
      const productId = button.dataset.productId; 

      addToCart(productId);
      updateCartQuantity();
      });
    });
};