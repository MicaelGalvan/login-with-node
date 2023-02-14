const express = require('express');
const router = express.Router();
const { list, get, remove, create, update } = require('../controllers/estate');
const { validateCreate } = require('../validators/user');

router.get('/all', list);
router.get('/:id', get);
router.post('/', validateCreate, create);
router.patch('/:id', update);
router.delete('/:id', remove);

module.exports = router;