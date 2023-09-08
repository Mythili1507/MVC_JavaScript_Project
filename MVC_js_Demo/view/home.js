function getHomeView(modelData)
{
    let template =
    `
    <div>
        <h1 class="home-heading">Fruit deliver to your home 🚚</h1>
      
        <button class="browse-btn" onClick="changeViewWithMVC('browseProducts')">Browse products</button>
       
    </div>
    `;
    
    return template;
}

export { getHomeView };