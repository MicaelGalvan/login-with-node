const express = require('express');
const router = express.Router();
const { list, get, remove, create, update } = require('../controllers/user');
const { validateCreate } = require('../validators/user');

router.get('/all', list);
router.get('/:id', get);
router.post('/', validateCreate, create);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;