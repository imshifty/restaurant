import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";

function createHomePage() {
    const content = document.getElementById("content");
    const header = document.createElement("div");
    header.setAttribute("id","header");
    header.innerHTML = "L'angolo della pizza"
    content.appendChild(header);

    const tabs = document.createElement("div");
    tabs.setAttribute("id", "tabs");
    
    const home = document.createElement("button");
    home.classList.add("button");
    home.addEventListener("click", () => {
        if (document.getElementById("home")) {
            const home = document.getElementById("home");
            home.remove();
            createHome();
        }
        else if(document.getElementById("menu")) {
            const menu = document.getElementById("menu");
            menu.remove();
            createHome();
        }
        else if (document.getElementById("contact")) {
            const contact = document.getElementById("contact");
            contact.remove();
            createHome();
        }
        else {
            return;
        }

    })
    home.innerHTML = "Home";
    tabs.appendChild(home);

    const menu = document.createElement("button");
    menu.classList.add("button");
    menu.addEventListener("click", () => {
        if (document.getElementById("home")) {
            const home = document.getElementById("home");
            home.remove();
            createMenu();
        }
        else if(document.getElementById("menu")) {
            const menu = document.getElementById("menu");
            menu.remove();
            createMenu();
        }
        else if (document.getElementById("contact")) {
            const contact = document.getElementById("contact");
            contact.remove();
            createMenu();
        }
        else {
            return;
        }
    })
    menu.innerHTML = "Menu";
    tabs.appendChild(menu);

    const contactUs = document.createElement("button");
    contactUs.classList.add("button");
    contactUs.addEventListener("click", () => {
        if (document.getElementById("home")) {
            const home = document.getElementById("home");
            home.remove();
            createContact();
        }
        else if(document.getElementById("menu")) {
            const menu = document.getElementById("menu");
            menu.remove();
            createContact();
        }
        else if (document.getElementById("contact")) {
            const contact = document.getElementById("contact");
            contact.remove();
            createContact();
        }
        else {
            return;
        }
    })
    contactUs.innerHTML = "Contact us";
    tabs.appendChild(contactUs);

    header.appendChild(tabs);

    createHome();


    const footer = document.createElement("footer");
    footer.innerText = "SHIFTY"
    content.append(footer);
}



export default createHomePage;
