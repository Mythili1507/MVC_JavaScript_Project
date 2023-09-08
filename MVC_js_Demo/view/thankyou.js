

function getThankyouView(modelData)
{
    let template =
    `
    <h1> Payment successful✅ </h1>
    <p>You have purchased ${modelData.name} ${modelData.pic} which will be delivered soon🚚</p>
    <h3>Thank you for shopping with us! 🙏</h3>
    <h3>See you again* 👋</h3>
    <p> Please come back again 😊</p>
    <button class="backto-home-btn" onclick="changeViewWithMVC('home')"> Back to home🏠</button>

    `;
    console.log(template);
    return template;
}

export { getThankyouView };

