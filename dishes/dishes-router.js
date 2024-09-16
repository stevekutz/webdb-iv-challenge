const express = require('express');
const Dishes  = require('./dishes-model.js');
const router = express.Router();

router.get('/', async (req, res) => {

    try{
        const dishes = await Dishes.getDishes();
        res.status(200).json(dishes);

    } catch (err) {
        res.status(500).json({
            message: `Error getting dishes`
        });
    }

})

/*
router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        const dish = await Dishes.getDish(id)

        if(dish) {
            const recipesArr = dish.map(obj => {
                const recipe = {name: obj.recipe};
                return recipe;
            })
            const dishResult = {id: dish[0].id, name: dish[0].dish, recipes: recipesArr};
            res.status(200).json(dishResult);
        } else {
            res.status(404).json({
                message: `Dish with id ${id} no found`
            })
        }
    } catch (err) {
        res.status(500).json({
            message: `Error getting Dishes, check router`
        })
    }

});
*/

router.get('/:id', async (req, res) => {
    try {
        const dish = await Dishes.getDish(req.params.id);
        if (dish) {
            const recipes= dish.map(obj => {
                const recipe = {name: obj.recipe};
                return recipe;
            })
            const dishObj = {id: dish[0].id, name: dish[0].dish, recipes: recipes};
            res.status(200).json(dishObj);
        } else {
            res.status(404).json({ message: "The dish with the specified ID does not exist." })
        }
    } catch (error) {
        res.status(500).json({ message: "The dish information could not be retrieved", error: error });
    }
})



router.post('/', async (req, res) => {
    const newDish = req.body;
    
    try {
        const dish = await Dishes.addDish(newDish);
        res.status(201).json(dish)

    } catch (err) {
        res.status(500).json({
            message: `Error getting Dishes, check router`
        })
    }

});



// DON'T FORGET
module.exports = router;
