 class State
{

  #currentViewName;
  #cartItems = [];

  getCurrentViewName()
  {
    return this.#currentViewName;
  }

  setCurrentViewName(currView)
  {
    this.#currentViewName = currView;
  }

  getCartItems()
  {
    return this.#cartItems.slice();
  }

  addToCart(productId)
  {
    if(!this.#cartItems.includes(productId))
    {
      this.#cartItems.push(productId);
    }
  }

  removeFromCart(productId)
  {
    let i = this.#cartItems.indexOf(productId);
    if(i !== -1)
    {
      this.#cartItems.splice(i,1);
    }
  }

  clearCart()
  {
    this.#cartItems = [];
  }
}

export {State};