import {renderOrderSummary} from '../scripts/checkout/orderSummary.js';
import { renderPaymentSummary } from '../scripts/checkout/paymentSummary.js';
import { loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

//import '../data/cart-class.js';
//import '../data/backend-practice.js';


//shortcut for promises
//use async await intead of promises and callback
async function loadPage(){

  try{
    await loadProductsFetch(); //only use inside async

    const value = await new Promise((resolve)=>{
      loadCart(()=>{
        resolve('value3');
      });
    })
  } catch (error){
    console.log('Unexpected Error. Please Try again later');
  }

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