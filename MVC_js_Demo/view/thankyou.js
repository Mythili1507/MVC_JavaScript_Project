

function getThankyouView(modelData)
{
    let template =
    `
    <div class="thankyou-container">
    <div><h1> Payment successful✅ </h1></div>
    <div><p>You have purchased ${modelData.name} ${modelData.pic} which will be delivered soon🚚</p></div>
    <div><h3>Thank you for shopping with us! 🙏</h3></div>
    <div> <h3>See you again* 👋</h3></div>
    <div><p> Please come back again 😊</p></div>
    <div><button class="backto-home-btn" onclick="changeViewWithMVC('home')"> Back to home🏠</button></div>
    </div>
    `;
    console.log(template);
    return template;
}

export { getThankyouView };

