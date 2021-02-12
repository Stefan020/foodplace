const cfg = require('../../pkg/config/index');
require('../../pkg/db');

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
var path = require('path');
const recipe = require('../recipes/handler/recipes');
const cors =require('cors');


const api = express();
api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(jwt({ 
    secret: cfg.get('security').jwt_key,
    algorithms: ['HS256']
}).unless({
    path: [
        { url: /\/api\/v1\/recipe\/.*\/star/, methods: ['PUT'] },
        { url: /\/api\/v1\/recipe\/category\/.*\/cat/, method: ['GET']},
        { url: /\/api\/v1\/recipe\/.*\/id/, method: ['GET']},
        { url: '/api/v1/recipe/most-stared', method: ['GET']},
        { url: '/api/v1/recipe/pub-date', methods: ['GET'] }
    ]
}));
api.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Bad JWT');
    }
});
api.get('/api/v1/recipe/most-stared', recipe.getByStars);
api.get('/api/v1/recipe/most-stared', recipe.getByStars);
api.get('/api/v1/recipe/category/:cat', recipe.getByCategory);
api.get('/api/v1/recipe/pub-date', recipe.getByPubDate);
api.get('/api/v1/recipe/:id', recipe.getOne);
api.put('/api/v1/recipe/:rid/star', recipe.starOne);
api.get('/api/v1/recipe/myrecipes/:uid', recipe.getByUserId);
api.post('/api/v1/recipe/newrecipe', recipe.save);

api.listen(cfg.get('services').recipe.port, err => {
    if(err){
        console.error('Could not start server:', err);
    }
    console.log('Server successfully started on port', cfg.get('services').recipe.port);
});
