
function createHome() {
    const content = document.getElementById("content");

    const home = document.createElement("div");
    home.setAttribute("id", "home");
    content.appendChild(home);

    const homeHeader = document.createElement("div");
    homeHeader.setAttribute("id", "home-header");
    homeHeader.innerHTML = "We are L'angolo della pizza. The pizza corner."

    const homeContent = document.createElement("div");
    homeContent.setAttribute("id", "home-content");
    homeContent.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    home.appendChild(homeHeader);
    home.appendChild(homeContent);
}

export default createHome;
