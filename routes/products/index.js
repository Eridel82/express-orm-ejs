const express = require('express')
const router = express.Router()
const ProductsController = require('../../controllers/products')

router.get('/', ProductsController.getAll )
router.get('/:id', ProductsController.getById)
router.post('/', ProductsController.save)

router.put('/:id', (req, res)=>{
   return  res.json('Vamos')
} ) // ProductsController.update

router.delete('/:id',ProductsController.delete)

module.exports = router