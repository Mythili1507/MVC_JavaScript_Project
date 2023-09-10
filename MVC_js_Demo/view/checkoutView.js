function getCheckoutView(modelData)
{
  let template =
  `
  <div class= "checkout-container">
  <div><p class="checkout-desc"> Please wait your payment is processing 😄 </p></div>
  <div><p class="checkout-desc"> The price for purchased product is $ ${modelData.price} ${modelData.pic}</p></div>
  <div><button class="paynow-btn" onclick="changeViewWithMVC('thankyou','${modelData.id}')">Pay Now</button></div>

  `
  return template;
}

export {getCheckoutView};