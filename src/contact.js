function createContact() {
    const content = document.getElementById("content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    content.appendChild(contact);

    const contactHeader = document.createElement("div");
    contactHeader.innerHTML = "Contact us";
    contactHeader.setAttribute("id", "contact-header");
    contact.appendChild(contactHeader);

    const contactBox = document.createElement("div");
    contactBox.setAttribute("id", "contact-box");
    contact.appendChild(contactBox);

    const contactPhone = document.createElement("div");
    contactPhone.innerHTML = "+1 123-456-7890";
    contactBox.appendChild(contactPhone);

    const contactLocation = document.createElement("div");
    contactLocation.innerHTML = "Golden Gate Bridge, San Francisco, CA, USA";
    contactBox.appendChild(contactLocation);

    const contactHours = document.createElement("div");
    contactHours.classList.add("contact-hours");
    contactBox.appendChild(contactHours);

    const contactMonday = document.createElement("div");
    contactMonday.innerHTML = "Monday: Closed";
    contactHours.appendChild(contactMonday);

    const contactWeek = document.createElement("div");
    contactWeek.innerHTML = "Tuesday - Sunday: 11am-11pm";
    contactHours.appendChild(contactWeek);
}

export default createContact;