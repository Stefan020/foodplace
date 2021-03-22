// vendor imports
import React, { useState , useEffect} from 'react';
import '../assets/GetByPubDate.css';
import Card from './Card';
import useFetch from './FetchHook';

export const GetByPubDate = (props) => {

    const {data} = useFetch('http://localhost:10002/api/v1/recipe/pub-date')

return(
    <div className='getByPubDate'>
        <div className="div-title">
            <h2 className="title">Fresh & New</h2><hr className="hr-date"></hr>
        </div>
        <div className="date-div">
        <div className="recipes-date">
             {/* {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>} */}
            {data && <Card recipes={data} />} 
        </div>
        </div>
    </div>
    )
};

export default GetByPubDate;

