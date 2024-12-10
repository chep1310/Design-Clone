import {renderOrderSummary} from '../scripts/checkout/orderSummary.js';
import { renderPaymentSummary } from '../scripts/checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage(){
  await loadProductsFetch(); //only use inside async

  await new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

  renderPaymentSummary();
  renderOrderSummary();
}
loadPage();



/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then(()=>{
  renderPaymentSummary();
  renderOrderSummary();
});

new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('value1');
  })

}).then((value)=>{
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });
}).then(()=>{
  renderPaymentSummary();
  renderOrderSummary();
});

loadProducts(()=>{
  loadCart(()=>{
    renderPaymentSummary();
    renderOrderSummary();
  })
});
*/