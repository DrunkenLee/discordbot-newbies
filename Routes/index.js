const router = require('express').Router();
const messageRoutes = require('./messageRoutes');

router.get('/', (req, res) => {
  res.send('https://github.com/DrunkenLee');
});

router.use('/message', messageRoutes)

module.exports = router;
