function getHomeView(modelData)
{
    let template =
    `
    <div class= "home-container">

    <h1 class="home-desc"> Fruits are available in this online shop. Buy fresh & healthy fruits online at best price from this
     best fruit shop &
    fill your fruit basket </h1>

     <button class="browse-btn" onClick="changeViewWithMVC('browseProducts')">Browse products</button>

     <h3 class="why-sec-main-heading">Why should you select The Fruit Garden?</h3>
     <p class="why-desc"> Fruits are nature's gift to mankind. These are not only delicious and refreshing but are also the chief source of vitamins, minerals and proteins. These constituents are essential for the normal physiological well being and help in maintaining healthy state through development of
     resistance against pathogens </p>

    <div class="why-sec-heading"> 20+ Years of Experience</div>

    <p class="why-sec-desc"> 20+ years of challenges, renewal, changes, we faced all of that made our distinctive mark</p>

    <div class="why-sec-heading">We Provide Fresh Quality Fruits</div>
    <p class="why-sec-desc"> High quality, health and deliciousness are our quality</p>

    <div class="why-sec-heading">Our Worldwide Suppilers</div>

    <p class="why-sec-desc"> We bring fruits of the world to you</p>

    </div>
    `;
    return template;
}

export { getHomeView };