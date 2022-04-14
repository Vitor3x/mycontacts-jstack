const db = require('../../database');

class CategoryRepository {
  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);
    return row;
  }
}

module.exports = new CategoryRepository();
