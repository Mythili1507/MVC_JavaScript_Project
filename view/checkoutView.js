function getCheckoutView(modelData)
{
  let subTemplate = getProductsTableTemplate(modelData.products);
  let template =
  `
  <div class= "checkout-container">
    <div>
    <table id="checkoutTableId">
      <thead>
        <tr><th>S.no</th><th>Name</th><th>Picture</th><th>Price</th></tr>
      </thead>
      <tbody>
        ${subTemplate.join('')}
        <tr><th colspan='3'>Grand Total</th><td>$ ${modelData.totalPrice}</td></tr>
      </tbody>
    </table>
    </div>
    <div><button class="paynow-btn" onclick="changeViewWithMVC('thankyou')">Pay Now</button></div>
  </div>
  `;
  return template;
}

function getProductsTableTemplate(productsList)
{
  let subTemplate = [];
    for(let i=0; i<productsList.length; i++)
    {
      let product = productsList[i];
      let rowTemplate = 
      `
      <tr><td>${i+1}</td><td>${product.name}</td><td>${product.pic}</td><td>$ ${product.price}</td></tr>
      `;
      subTemplate.push(rowTemplate);
    }
  return subTemplate;
}

export { getCheckoutView };
