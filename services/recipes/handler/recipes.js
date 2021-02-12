const recipeModel = require('../../../pkg/recipes');
const recipeValidator = require('../../../pkg/recipes/validator');


const save = async (req,res) => {

    console.log(req.body);
    // return;
    try {
        await recipeValidator.validate(req.body, recipeValidator.recipeSchema);
    } catch (error) {
        console.log(error);
        return res.status(400).send('Bad Request');
    }
    try {
        let data = {
            ...req.body,
            pubDate: new Date(),
            _deleted:false,
            starCount:0,
            uid:req.user.uid,
        }
        await recipeModel.save(data);
        return res.status(201).send('Recipe Saved');
    } catch (error) {
        console.log(error);
        return res.status(404).send('Internal Server Error');
    }
};

// const uploadImage = async (req,res) => {
//     try {
//         let image = 
//     } catch (error) {
//         console.log(error);
//         return res.status(404).send('Internal Server Error');
//     }
// }

const getOne = async (req,res) => {
    try{
        let data = await recipeModel.getOne({_id:req.params.id});
        return res.status(200).send(data);
    }catch(error){
        console.log(error);
        return res.status(404).send('Internal Server Error');
    }
};

const getByUserId = async (req,res) => {
    try {
        let data = await recipeModel.getByUserId(req.user.userId)
        return res.status(200).send(data);
    } catch (error) {
        console.log(error);
        return res.status(404).send('Internal Server Error');
    }
}

const getByCategory = async (req,res) => {
    try {
        let data = await recipeModel.getByCategory(req.params.cat);
        return res.status(200).send(data);
    } catch (error) {
        console.log(error);
        return res.status(404).send('Internal Server Error');
    }
};

const getByStars = async (req,res) => {
    try {
        let data = await recipeModel.getByStars({})
        return res.status(200).send(data);
    } catch (error) {
        console.log(error);
        return res.status(404).send('Internal Server Error');
    }
}

const starOne = async (req,res) => {
    try {
        const id = req.params.rid
        let recipe = await recipeModel.getOne({_id:id})
        let starRecipe = await recipeModel.updateStar(id,{starCount:recipe.starCount + 1})
        return res.status(200).send(starRecipe);
    } catch (error) {
        console.log(error);
        return res.status(404).send('Internal Server Error');
    }
};

const getByPubDate = async (req,res) => {
    try{
        let data = await recipeModel.getByPubDate({})
        return res.status(200).send(data);
    }catch(error){
        console.log(error);
        return res.status(404).send('Internal Server Error');
    }
};





module.exports = {
    save,
    getOne,
    getByUserId,
    getByCategory,
    starOne,
    getByPubDate,
    getByStars
};