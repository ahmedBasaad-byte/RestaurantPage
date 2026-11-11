export function loadHome(){

    const content= document.querySelector("#content")
    const div=document.createElement("div")
    content.appendChild(div)
    const heading=document.createElement("h1")
    heading.textContent="Welcome to the Pizza Master🍕"
    div.appendChild(heading)
    const paragraph=document.createElement("p")
    paragraph.appendChild(document.createTextNode("We serve the best Pizza in town."))
    paragraph.appendChild(document.createElement("br"))
    paragraph.appendChild(document.createTextNode(" Come and enjoy our delicious Pizza😋!"))
    div.appendChild(paragraph)
    div.classList.add("home");
}