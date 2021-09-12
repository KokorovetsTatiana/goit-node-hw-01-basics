const fs = require("fs/promises");
// const path = require("path");
// const { v4 } = require("uuid");

// const contactsPath = path.join("./db", "contacts.json");

// const updateContacts = async (newContacts) => {
//     await fs.writeFile(contactsPath, JSON.stringify(newContacts));
// };

// module.exports = updateContacts;

fs.readFile("db/text.txt", (error, data) => {
    // if (error) {
    //     throw new Error("cannot read file")
    // }
    // const text = data.toString();
    console.log(error);
    console.log(data);
})