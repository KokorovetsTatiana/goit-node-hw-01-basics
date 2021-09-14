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
    "name": "Chaim Lewis",
    "email": "dui.in@egetlacus.ca",
    "phone": "(294) 840-6685"
}

//function check

// workWithContacts("listContacts")
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// workWithContacts("getContactById", contactId)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));

// workWithContacts("removeContact", contactId)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// workWithContacts("addContact", "", data)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));



//YARGS

// const argv = require("yargs").argv;

// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       const contacts = contactsOperations.listContacts();
//       contacts
//         .then((data) => console.table(data))
//         .catch((error) => console.log(error));
//       break;

//     case "get":
//       const contactGet = contactsOperations.getContactById(id);
//       contactGet
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
//       break;

//     case "add":
//       const newContact = {
//         name,
//         email,
//         phone,
//       };
//       const contactAdd = contactsOperations.addContact(newContact);
//       contactAdd
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
//       break;

//     case "remove":
//       const contactRemove = contactsOperations.removeContact(id);
//       contactRemove
//         .then((data) => console.log(data))
//         .catch((error) => console.log(error));
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);



//COMMANDER

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = contactsOperations.listContacts();
      contacts
        .then((data) => console.table(data))
        .catch((error) => console.log(error));
      break;

    case "get":
      const contactGet = contactsOperations.getContactById(id);
      contactGet
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    case "add":
      const newContact = {
        name,
        email,
        phone,
      };
      const contactAdd = contactsOperations.addContact(newContact);
      contactAdd
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    case "remove":
      const contactRemove = contactsOperations.removeContact(id);
      contactRemove
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);