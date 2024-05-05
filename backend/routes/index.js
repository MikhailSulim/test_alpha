const router = require('express').Router();
const { getCompany } = require('../controllers/egrul');

router.post('/company', getCompany);

module.exports = router;
