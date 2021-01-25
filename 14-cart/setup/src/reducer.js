
const reducer = (state, action) => {
 switch (action.type) {
  case 'CLEAR_CART':
   return { ...state, cart: [] };
  case 'REMOVE':
   return { ...state, cart: state.cart.filter((cartItem) => cartItem.id !== action.payload) }
  case 'TOGGLE_AMOUNT':
   let tempCart = state.cart.map((cartItem) => {
    if (cartItem.id === action.payload.id) {
     if (action.payload.type === 'inc') {
      return { ...cartItem, amount: cartItem.amount + 1 }
     }
     if (action.payload.type === 'dec') {
      return { ...cartItem, amount: cartItem.amount - 1 }
     }
    }
    return cartItem;
   }).filter((cartItem) => cartItem.amount !== 0);
   return { ...state, cart: tempCart }
  case 'GET_TOTALS':
   let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
    const { price, amount } = cartItem;
    const itemTotalPrice = (price * amount);

    cartTotal.total += itemTotalPrice; //total price in the cart
    cartTotal.amount += amount; // amount of itens in the cart
    return cartTotal;
   }, {
    total: 0,
    amount: 0
   })
   total = parseFloat(total.toFixed(2)) //function to fix the .9999999 results
   return { ...state, total, amount }
  case 'LOADING':
   return { ...state, loading: true }
  case 'DISPLAY_ITEMS':
   return { ...state, cart: action.payload, loading: false }

 }
 throw new Error('no matching action type');
}

export default reducer

/*
---->>>FUNCTIONALITY TO INCREASE AND DECREASE SEPARATELY
 case 'INCREASE':
 let incCart = state.cart.map((cartItem) => {
  if (cartItem.id === action.payload) {
   return { ...cartItem, amount: cartItem.amount + 1 }
  }
  return cartItem;
 })
 return { ...state, cart: incCart }
case 'DECREASE':
 let decCart = state.cart.map((cartItem) => {
  if (cartItem.id === action.payload) {
   return { ...cartItem, amount: cartItem.amount - 1 }
  }
  return cartItem;
 }).filter((cartItem) => cartItem.amount !== 0);
 return { ...state, cart: decCart };
*/