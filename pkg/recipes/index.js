const mongoose = require('mongoose');

const Recipe = mongoose.model(
    'recipes',
    {
        title:String,
        category:String,
        prep_time:Number,
        num_people:Number,
        description:String,
        recipe:String,
        image:String ,
        uid:String,
        pubDate:Date,
        starCount:Number,
        _deleted:Boolean
    },
    'recipes'
);

const save = async (data) => {
    let recipe = new Recipe(data)
    return await recipe.save()
};

const getAll = async () => {
    let data = await Recipe.find({})
    return data;
};

const getByPubDate = async() => {
    let data = await Recipe.find({}).sort({pubDate:-1}).limit(3)
    return data;
}

const getOne = async (rid) => {
    let data = await Recipe.findOne({_id:rid})
    return data;
};

const getByCategory = async (cat) => {
    let data = await Recipe.find({ category:cat })
    return data;
};


const getByUserId = async (uid) => {
    let data = await Recipe.find({ userId:uid })
    return data;
};

const updateStar = async( rid, recipeData) => {
    let data = await Recipe.updateOne({_id: rid}, recipeData);
    return data.nModified !== 0;
};

const getByStars = async () => {
    let data = await Recipe.find({}).sort({starCount:-1}).limit(6)
    return data;
}


const remove = async (id) => {
    let data = await Recipe.updateOne({ _id: id }, {_deleted: true});
    return data.nModified !== 0;
};

module.exports = {
    save,
    getAll,
    getOne,
    getByCategory,
    getByPubDate,
    getByUserId,
    updateStar,
    getByStars,
    remove
};