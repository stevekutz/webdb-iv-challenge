const router = require('express').Router();
const Dishes = require('./dishes-model');

router.get('/', (req, res) => {
    Dishes.getDishes()
        .then(dishes => {
            res.status(200).json(dishes)
        })
        .catch(err => {
            res.status(500).json(err);
         })

})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    Dishes.getDishID(id)
        .then(dishName => {
            if(dishName){
                res.status(200).json(dishName);
            } else {
                res.status(404).json({
                    message: `dish with id ${id} not found`
                })
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

router.post('/', (req, res) => {
    const newDish = req.body;
    Dishes.addDish(newDish)
        .then(idLAstAdded => {
            res.status(200).json(idLAstAdded);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})



// DON'T FORGET
module.exports = router;
