import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact} from "./contact.js";
function clearContent() {
  document.querySelector("#content").textContent = "";
}
loadHome();

const home_btn = document.querySelector("#home_btn");
home_btn.addEventListener("click", () => {
    clearContent();
    loadHome();
    home_btn.classList.add("active");
    menu_btn.classList.remove("active");
    contact_btn.classList.remove("active");
});

const menu_btn = document.querySelector("#menu_btn");
menu_btn.addEventListener("click", () => {
    clearContent();
    loadMenu();
    menu_btn.classList.add("active");
    home_btn.classList.remove("active");
    contact_btn.classList.remove("active");
});

const contact_btn = document.querySelector("#contact_btn");
contact_btn.addEventListener("click", () => {
    clearContent();
    loadContact();
    contact_btn.classList.add("active");
    home_btn.classList.remove("active");
    menu_btn.classList.remove("active");
});