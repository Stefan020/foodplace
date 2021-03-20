import React, { useState , useEffect} from 'react';

import useFetch from './FetchHook';
import Card from './Card';

export const GetByStars = (props) => {

    const {data} = useFetch('http://localhost:10002/api/v1/recipe/most-stared');

return(
    <div className='mostStared'>
        <div className="div-title">
            <h2 className="title">Most Popular Recipes</h2><hr className="hr-date"></hr>
        </div>
        <div className="date-div">
        <div className="recipes-date">
            {data && <Card recipes={data} />}  
        </div>
        </div>
    </div>
    )
};

export default GetByStars;
