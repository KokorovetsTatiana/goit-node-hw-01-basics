const contactsOperations = require("../goit-node-hw-01-basics/contacts");

const workWithContacts = async(type = "listContacts", contactId, data) => {
    try {
        switch (type) {
            case "listContacts":
                return await contactsOperations.listContacts();
            case "getContactById":
                return await contactsOperations.getContactById(contactId);
            case "removeContact":
                return await contactsOperations.removeContact(contactId);
            case "addContact":
                return await contactsOperations.addContact(data);
        }
    }
    catch (error) {
        throw error;
    }
}

const contactId = 2;
const data = {
    "id": 2,
    "name": "Chaim Lewis",
    "email": "dui.in@egetlacus.ca",
    "phone": "(294) 840-6685"
}

// workWithContacts("listContacts")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// workWithContacts("getContactById", contactId)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// workWithContacts("removeContact", contactId)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

workWithContacts("addContact", "", data)
    .then(data => console.log(data))
    .catch(error => console.log(error));

