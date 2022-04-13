const { v4 } = require('uuid');

const db = require('../../database/index');

let contacts = [
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
  async findAll() {
    const rows = db.query('SELECT * FROM contacts');
    return rows;
  }

  async findById(id) {
    const [row] = await db.query('SELECT * FROM contacts WHERE id = $1', [id]);
    return row;
  }

  findByEmail(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === id),
    ));
  }

  async create({
    name, email, phone, category_id,
  }) {
    const [row] = await db.query(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
      `, [name, email, phone, category_id]);

    return row;
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updateContact = {
        id,
        name,
        phone,
        email,
        category_id,
      };

      contacts = contacts.map((contact) => (
        contact.id === id ? updateContact : contact
      ));

      resolve(updateContact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
