function getCheckoutView(modelData)
{
  let template =
  `
  <div class= "checkout-container">
  <p> Please wait your payment is processing 😄 </p>
  <p> The price for purchased product is $ ${modelData.price} ${modelData.pic}</p>
  <button onclick="changeViewWithMVC('thankyou','productId','${modelData.id}')">Pay Now</button>

  `
  return template;
}

export {getCheckoutView};