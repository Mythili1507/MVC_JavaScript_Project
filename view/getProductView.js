function getProductView(modelData)
{
    let template =
    `
    <div class='product-card'>
        <div class="product-pic">${modelData.pic}</div>
        <div>${modelData.name}</div>
        <div>$ ${modelData.price}</div>
        <div>${modelData.description}</div>
        <div class="add-to-cart"> <button class="buy-now" onclick="changeViewWithMVC('deals')">Buy now</button> <span> <button class= "add-to-cart-btn" onclick="changeViewWithMVC('addToCart','${modelData.id}')">Add to cart</button></span></div>
        <button class="prod-backto-home-btn" onclick="changeViewWithMVC('home')"> Back to home🏠</button>
    </div>
    `;
    return template;
}

export { getProductView };