const menuFood = [
    {
        name: "Pepperoni Pizza",
        description: "A classic pizza with pepperoni and cheese",
        price: 12.99
    },
    {
        name: "Margherita Pizza",
        description: "A simple yet delicious pizza with tomato sauce and mozzarella",
        price: 10.99
    },
    {
        name: "Vegetarian Pizza",
        description: "A healthy option with various vegetables",
        price: 13.99
    },
    {
        name: "BBQ Chicken Pizza",
        description: "A flavorful pizza with BBQ sauce and grilled chicken",
        price: 14.99
    },
    {
        name: "Hawaiian Pizza",
        description: "A tropical pizza with ham and pineapple",
        price: 13.49  
    }
];

export function loadMenu() {
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    content.appendChild(div);
    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";
    div.appendChild(heading);
    const menuList = document.createElement("ul");
    div.appendChild(menuList);

    menuFood.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `Dish: ${item.name+"🍕"}\nDish Description: ${item.description}\nPrice: $${item.price.toFixed(2)}`;
        menuList.appendChild(listItem);
    });

    div.classList.add("menu");
}