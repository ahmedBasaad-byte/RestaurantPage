export function loadContact() {
    const content = document.querySelector("#content");
    const div = document.createElement("div");
    content.appendChild(div);
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    div.appendChild(heading);
    const paragraph = document.createElement("p");
    paragraph.textContent = (
        `For inquiries, please reach out to us at🌐\n
         Email📧: contact@restaurant.com \n
         Phone☎️: (123) 456-7890 \n
         Address📍: 123 Pizza Street, Food City, FC 12345 `);
    div.appendChild(paragraph);
    div.classList.add("Contact");
}