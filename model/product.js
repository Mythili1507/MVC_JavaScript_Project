class Product
{
    
    id;
    name;
    pic;
    price;
    description;
    
    constructor(id, name, pic, price, description='-')
    {
        this.id = id;
        this.name = name;
        this.pic = pic;
        this.price = price;
        this.description = description;
    }
}

export { Product };