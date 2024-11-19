import {cart} from '../data/cart.js'; 
//always put imports at TOP
//to imports to work always use LIVE Server
//no need of order in HTML to load scripts first

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
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
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

document.querySelectorAll('.js-add-to-cart') //select the ATC button and put values in button.
.forEach((button)=>{    //running for each to set values to button variable
  button.addEventListener('click',()=>{ //add to cart button listener
   const productId = button.dataset.productId; //fetch the product name when add to cart is clicked
   let matchingItem;  //created a empty varible
   cart.forEach((item)=>{
    if(productId===item.productId){
      matchingItem = item;
    }
   });
   if(matchingItem){
    matchingItem.quantity +=1;  //if same item exists only increase the quantity
   }else{
    cart.push({   //pushing product to cart array in cart.js
      productId: productId,
      quantity: 1
     });
    }
    let cartQuantity = 0;
    cart.forEach((item)=>{
      cartQuantity += item.quantity;
    });
    document.querySelector('.js-cart-quantity').innerHTML=cartQuantity;
  });
});