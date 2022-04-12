const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;

    const contact = await ContactsRepository.getById(id);

    if (!contact) {
      return response.status(400).json({ error: 'Id not found' });
    }

    response.json(contact);
  }

  store() {}

  update() {}

  delete() {}
}

module.exports = new ContactController();
