const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Joao',
    email: 'joao@email.com',
    phone: '99999',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Vitor',
    email: 'vitor@email.com',
    phone: '99999',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  getById(id) {
    return new Promise((resolve) => {
      const contact = contacts.find((contactId) => contactId.id === id);
      resolve(contact);
    });
  }
}

module.exports = new ContactsRepository();
