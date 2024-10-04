const express = require('express');

const v1ApiRoutes = require('./v1/index');

const router = express.Route();



router.use('/v1',v1ApiRoutes);

module.exports = router ;


