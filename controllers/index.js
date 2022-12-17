const router = require('express').Router();
// const apiRoutes = require('./api');
const templateRoutes = require('./templates')
// router.use('/api', apiRoutes);
router.use('/', templateRoutes);
module.exports = router;