const { Router } = require('express');

const ContactController = require('./app/controllers/ContactController');
const CategoryController = require('./app/controllers/CategoryController');

const router = Router();

router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);
router.delete('/contacts/:id', ContactController.delete);

router.get('/category', CategoryController.index);
router.get('/category/:id', CategoryController.show);
router.post('/category', CategoryController.store);
router.put('/category/:id', CategoryController.update);
router.delete('/category/:id', CategoryController.delete);

module.exports = router;
