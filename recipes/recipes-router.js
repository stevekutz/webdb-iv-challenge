const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/', async (req, res) => {
   try {
       const recipes = await Recipes.getRecipes();
       res.status(200).json(recipes);
    }
    catch (err) {
        res.status(500).json({
            messge: `Error getting recipes`
        })
    }
});


router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipes.getRecipeID(req.params.id);
        if (recipe) {
            res.status(200).json(recipe);
        } else {
            res.status(404).json({ 
                message: ` the recipe with id ${id} does not exist `
             })
        }
    } catch (error) {
        res.status(500).json({ 
            message: `recipe Error with router`
        })
    }
});    




/*
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
*/

/*
router.post('/', async (req, res) => {
    const newRecipe = req.body;
    
    try {  
        const recipe = await Recipes.addRecipe(req.body);
        res.status(201).json(recipe);
        
    } catch (error) {
        res.status(500).json({ 
            message: `recipe Error with router`
        })
    }
});
*/

router.post('/', async (req, res) => {
    try {
            const recipe = await Recipes.addRecipe(req.body);
            res.status(201).json(recipe);

    } catch (error) {
        res.status(500).json({ 
            message: `recipe Error with router`
        })
    }
})


// DON'T FORGET
module.exports = router;