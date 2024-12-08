
//class is a better way to genrate objects in oop
class Cart{
  cartItems;
  #localStorageKey= undefined; //private property
  //# makes the variable private to the class
  //both the above have undefined as the value
   
  //to call the method of the page(setup code)
  //cannot return in constructor
  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();    
  }
  //private method use #
  #loadFromStorage(){
    this.cartItems =  JSON.parse(localStorage.getItem(this.#localStorageKey));
      if(!this.cartItems){
        this.cartItems = [{
          productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
          quantity: 2,
          deliveryOptionId: '1'
        },{
          productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity: 1, 
          deliveryOptionId: '2'
        }];
      }
    };

    saveToStorage(){
      localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    };

  //function to use button add to cart
  addToCart(productId){
    //created a empty varible
    let matchingItem;  
    this.cartItems.forEach((cartItem)=>{
      if(productId===cartItem.productId){
        matchingItem = cartItem;
      }
    });
    if(matchingItem){
      //if same item exists only increase the quantity
      matchingItem.quantity +=1; 
    }else{
      //pushing product to cart array in cart.js
      this.cartItems.push({   
        productId: productId,
        quantity: 1,
        deliveryOptionId :'1'
      });
      }
      this.saveToStorage();
    };
    
    removeFromCart(productId){
      const newCart=[];
      this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
      this.saveToStorage();
    };
    
      updateDelvieryOption(productId, deliveryOptionId){
        let matchingItem;  
        this.cartItems.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem = cartItem;
        }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
      };
};

const cart= new Cart('cart-oop');
const businessCart = new Cart('cart-business');

console.log(cart);