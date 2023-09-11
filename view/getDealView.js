function getDealView(modelData)
{

  let template =
  `<div class="deal-container">
  <div><h1 class="deal-heading"> Deals for you 😍</h1></div>
  <div><p class="deal-desc"> Buy 1kg 🍎 apple and get 1kg free </p></div>
  <div><p class="deal-desc"> Buy 2kg 🍑 peach and get 1kg free </p></div>
  <div> <button class="deal-btn" onclick="changeViewWithMVC('checkout')"> Skip & Proceed to checkout </button></div>
  <div><button class="deal-backhome-btn" onclick="changeViewWithMVC('home')"> Back to home🏠</button></div>
  </div>
  `

  return template;
}


export {getDealView};