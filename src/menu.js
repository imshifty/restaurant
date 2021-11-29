function createMenu() {
    const content = document.getElementById("content");
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    content.appendChild(menu);

    const menuHeader = document.createElement("div");
    menuHeader.innerHTML = "Menu";
    menuHeader.setAttribute("id", "menu-header");
    menu.appendChild(menuHeader);

    const menuItems = document.createElement("div");
    menuItems.setAttribute("id", "menu-items");
    menu.appendChild(menuItems);
   
    createMenuItem("Margherita", "$21.50", "tomato, mozzarella, fresh basil")
    createMenuItem("Napoletana", "$22.50", "tomato, mozzarella, black olives, anchovies")
    createMenuItem("Pizza alla Pescatore", "$27.00", "tomato, rocket, prosciutto & shaved parmesan cheese")
    createMenuItem("Ortolana", "$24.00", "tomato, mozzarella, roasted capsicum, eggplant, zucchini, pumpkin, olives, spinach leaves")
    createMenuItem("Calabrese", "$24.50", "hot salami, mozzarella, tomato, olives & chili")
    createMenuItem("Pizza alla Norcina", "$25.00", "tomato, spicy pork sausage, spinach, mascarpone cheese, a touch of nutmeg")
}

function createMenuItem(name, cost, description) {
    const menuItems = document.getElementById("menu-items");
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItems.appendChild(menuItem);

    const menuItemBox = document.createElement("div");
    menuItemBox.classList.add("menu-box");
    menuItem.appendChild(menuItemBox);

    const menuItemTitle = document.createElement("div");
    menuItemTitle.innerHTML = name;
    menuItemTitle.classList.add("menu-title");
    menuItemBox.appendChild(menuItemTitle);

    const menuItemCost = document.createElement("div");
    menuItemCost.innerHTML = cost;
    menuItemCost.classList.add("menu-cost");
    menuItem.appendChild(menuItemCost);

    const menuItemDescription = document.createElement("div");
    menuItemDescription.innerHTML = description;
    menuItemDescription.classList.add("menu-description");
    menuItemBox.appendChild(menuItemDescription);
}

export default createMenu;
