export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1 
}];


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
