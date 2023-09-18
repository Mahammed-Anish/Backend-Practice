const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.get('/',contactController.getAllData);
router.post('/create-contact',contactController.contactRegistered);
router.get("/delete-contact",contactController.deleteContact);

module.exports = router;