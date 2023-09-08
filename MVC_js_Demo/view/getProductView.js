function getProductView(modelData)
{
    let template = 
    `
    <div class='product-card'>
        <div class="product-pic">${modelData.pic}</div>
        <div>${modelData.name}</div>
        <div>$ ${modelData.price}</div>
        <div>${modelData.description}</div>
        <button onclick="changeViewWithMVC('deals','productId','${modelData.id}')">Buy now</button>
        <button class="backto-home-btn" onclick="changeViewWithMVC('home')"> Back to home🏠</button>

    </div>
    `;
    return template;
}

export { getProductView };