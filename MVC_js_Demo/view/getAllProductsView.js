function getAllProductsView(modelData)
{
    let subTemplateList = [];
    modelData.forEach(productData =>
        {
            // get view of each product
            subTemplateList.push( getBriefProductView(productData) )
        });

    let template =
    `
    <div class='products-container'>
        ${subTemplateList.join('')}
    </div>
    `;

    return template;
}

function getBriefProductView(product)
{
    let subTemplate =
    `
    <div class='product-card'>
        <div class="product-pic">${product.pic}</div>
        <div>${product.name}</div>
        <div>$ ${product.price}</div>
        <button onclick="changeViewWithMVC('viewProduct','${product.id}')">Detail View</button>

    </div>
    `;

    return subTemplate;
}

export { getAllProductsView };