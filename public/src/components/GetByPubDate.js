// vendor imports
import React, { useState , useEffect} from 'react';
import { connect } from 'react-redux';
// components

// actions
import { setRecipes } from '../redux/ducks/recipe';
// services

// constants

// styles
import '../assets/GetByPubDate.css';

export const GetByPubDate = (props) => {
    const [recipes, setRecipes] = useState('');


useEffect(() => {
    fetch('http://localhost:10002/api/v1/recipe/pub-date')
    .then(res => {
        return res.json()
    })
    .then(data => {
        
        setRecipes(data);
        console.log(data);
    })
},[]);

return(
    <div className='getByPubDate'>
        <h2>Fresh and New</h2>
        {/* <img src={test} width={290} alt='test'></img> */}
        {recipes && 
        <table border='1'>
            <tbody>
                <tr>
                    <th>Title</th>
                    <th>Recipe</th>
                    <th>Image</th>
                </tr>
                {
                    recipes.map(recipee => {
                        let {_id, title, recipe, image} = recipee;
                        return(
                            <tr key={_id}>
                                <td>{title}</td>
                                <td>{recipe}</td>
                                <td>{image}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        }
    </div>
)

};


const mapStateToProps = state => {
    return {
        recipes: state.recipes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setRecipes: (recipes) => { dispatch(setRecipes(recipes)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GetByPubDate);
