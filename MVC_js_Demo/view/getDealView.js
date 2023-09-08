function getDealView(modelData)
{

  let template = 
  `
  <h1> Deals for you 😍</h1>
  <p> Buy 1kg🍎 apple and get 1kg free <button> Add</button></p>
  <p> Buy 2kg 🍑peach and get Ikg free <button> Add</button> </p>
  <button onclick="changeViewWithMVC('checkout','productId','${modelData.id}')"> Skip & Proceed to checkout </button>
  <button class="backto-home-btn" onclick="changeViewWithMVC('home')"> Back to home🏠</button>

  `

  return template;
}


export {getDealView};