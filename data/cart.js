export const cart = [];


//function to use button add to cart
export function addToCart(productId){
  //created a empty varible
  let matchingItem;  
   cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
      matchingItem = cartItem;
    }
   });

   if(matchingItem){
     //if same item exists only increase the quantity
    matchingItem.quantity +=1; 
   }else{
    //pushing product to cart array in cart.js
    cart.push({   
      productId: productId,
      quantity: 1
     });
    }
}
