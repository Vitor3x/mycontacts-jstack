const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Joao',
    email: 'joao@email.com',
    phone: '99999',
    category_id: uuid(),
  },
  {
    id: uuid(),
    name: 'Vitor',
    email: 'vitor@email.com',
    phone: '99999',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
