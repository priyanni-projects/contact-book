let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Save Contact
function addContact() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!document.getElementById("email").checkValidity()) {
        alert("Please enter a valid email!");
        return;
    }

    contacts.push({
        name: name,
        email: email,
        phone: phone
    });

    localStorage.setItem("contacts", JSON.stringify(contacts));

    alert("Contact Saved Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";

    displayContacts();
}

// Display and Search Contacts
function displayContacts() {
    let search = document.getElementById("search").value.toLowerCase();

    let list = document.getElementById("contactList");
    list.replaceChildren();

    let filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(search)
    );

    if (filtered.length === 0) {
        list.textContent = "No contacts found!";
        return;
    }

    filtered.forEach(contact => {
        let card = document.createElement("div");
        card.className = "contact";

        let name = document.createElement("p");
        let email = document.createElement("p");
        let phone = document.createElement("p");

        name.textContent = "Name: " + contact.name;
        email.textContent = "Email: " + contact.email;
        phone.textContent = "Phone: " + contact.phone;

        card.append(name, email, phone);
        list.appendChild(card);
    });
}

// Display saved contacts when page loads
displayContacts();