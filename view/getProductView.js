function getProductView(modelData)
{
    let template =
    `
    <div class='product-card'>
        <div class="product-pic">${modelData.pic}</div>
        <div>${modelData.name}</div>
        <div>$ ${modelData.price}</div>
        <div>${modelData.description}</div>
        <div class="add-to-cart"> <button onclick="changeViewWithMVC('deals')">Buy now <span> <button onclick="changeViewWithMVC('addToCart','${modelData.id}')">Add to cart</button></span></button> </div>
        <button class="backto-home-btn" onclick="changeViewWithMVC('home')"> Back to home🏠</button>
    </div>
    `;
    return template;
}

export { getProductView };