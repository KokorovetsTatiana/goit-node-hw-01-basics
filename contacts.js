const fs = require("fs/promises");
const path = require("path");
const { v4 } = require("uuid");
const contacts = require("./db/contacts.json")

const contactsPath = path.join("./db", "contacts.json");

const updateContacts = async(data) => {
    await fs.writeFile(contactsPath, JSON.stringify(data));
    }

const listContacts = async ()  => contacts;

const getContactById = async(contactId) => {
    const contacts = await listContacts();
    const contact = contacts.find(item => item.id === contactId);
    if (!contact) {
        console.log(`Contact with id=${contactId} not found`)
    }
    return contact;
};

const removeContact = async(contactId) => {
    const contacts = await listContacts();
    const idRemove = contacts.findIndex(item => item.id === contactId);
    if (idRemove === -1) {
        throw new Error(`Contact with id=${contactId} not found`)
    }
    contacts.splice(idRemove, 1)
        await updateContacts(contacts);
        return `Contact with id=${contactId} has been successfully removed`;
    };

const addContact = async (data) => {
    const contacts = await listContacts();
    const newContact = { ...data, id: v4() };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
};

const contactsOperations = {
    updateContacts,
    listContacts,
    getContactById,
    removeContact,
    addContact,
};

module.exports = contactsOperations;