const express = require('express');
const router = express.Router();
const hotelController = require('../controller/hotelController')

router.post('/', hotelController.post);
router.get('', hotelController.getAll);
router.get('/:id', hotelController.getOne);
router.put('/:id', hotelController.update);
router.delete('/:id', hotelController.deleteOne);
router.delete('', hotelController.deleteMany);

module.exports = router;
