function a(cart){
    for(let i=0; i < cart.length; i++){
        cart[i] *= 2
    }
    return cart;
}

const cart = [5,6,7,8,9]
const u = a(cart)
console.log(u)
