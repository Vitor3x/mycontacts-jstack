const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoryRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;
    const category = await CategoryRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: 'Category not found' });
    }

    return response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Category name is required!' });
    }

    const categoryExists = await CategoryRepository.findByCategoryName(name);

    if (categoryExists) {
      return response.status(400).json({ error: 'Category already exists!' });
    }

    const category = await CategoryRepository.create({
      name,
    });

    return response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return response.status(400).json({ error: 'Category not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Category name is required!' });
    }

    const categoryByName = await CategoryRepository.findByCategoryName(name);

    if (categoryByName && categoryByName.id !== id) {
      return response.status(400).json({ error: 'This name is already in use' });
    }

    const category = await CategoryRepository.update(id, { name });

    return response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    await CategoryRepository.delete(id);

    return response.sendStatus(204);
  }
}

module.exports = new CategoryController();
