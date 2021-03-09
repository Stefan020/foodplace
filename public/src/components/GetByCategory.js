import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';
import useFetch from './FetchHook';

export const GetByCategory = () => {
    const { cat } = useParams();
    const [title, setTitle] = useState('');
    const {data,isPending, error} = useFetch(`http://localhost:10002/api/v1/recipe/category/${cat}`)
    
    useEffect(()=>{
        pageTitle(cat);
    }, [cat])
  
    const pageTitle = (cat) => {
        switch(cat) {
            case "breakfast":
                setTitle("Breakfast");
                break;
            case "brunch":
                setTitle("Brunch");
                break;
            case "lunch":
                setTitle("Lunch");
                break;
            case "dinner":
                setTitle("Dinner");
                break;
        }
    }

    return(
        <div className='category-page'>
            <div className="div-title">
            <h2 className="title">{title}</h2><hr className="hr-date"></hr>
            </div>
            <div className="div-recipes-category">
                {error && <div> {error} </div>}
                {isPending && <div>Loading...</div>}
                {data && <Card recipes={data} />}
            </div>

        </div>
        
    )

}

export default GetByCategory;