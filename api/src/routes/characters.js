const { Router } = require('express');
const { Characters } = require('../db')
const router = Router();

router.get('/', (req, res, next) => {
  return Characters.findAll()
    .then((characters) => {
    res.send(characters)
  })
})

router.post('/', async (req, res, next) => {
  const { name, image } = req.body;
  const newCharacter = await Characters.create({
    name,
    image,
  })
  res.send(newCharacter)
})

router.put('/', (req, res, next) => {
  res.send('soy el put de charactes')
})

router.delete('/', (req, res, next) => {
  res.send('soy el delete de charactes')
})

module.exports = router;