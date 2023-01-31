const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.send('soy el get de episodes')
})

router.put('/', (req, res, next) => {
  res.send('soy el put de episodes')
})

router.delete('/', (req, res, next) => {
  res.send('soy el delete de episodes')
})

router.post('/', (req, res, next) => {
  res.send('soy el post de episodes')
})

module.exports = router;