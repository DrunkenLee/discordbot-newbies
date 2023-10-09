const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('this is message routes');
});



module.exports = router;
