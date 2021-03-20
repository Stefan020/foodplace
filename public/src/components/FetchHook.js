import React, { useState , useEffect} from 'react';

const useFetch = (url) => {
    const [data,setData] = useState(null)
    // const [isPending, setIsPending] = useState(true);
    // const [error,setError] =useState(null)
    useEffect(() => {
        fetch(url)
        .then(res=>{
            if(!res.ok){
                throw Error("Can't fetch data")
            }
            return res.json();
        })
        .then(data => {
            console.log(data)
            setData(data)
            // setIsPending(false);
            // setError(null)
        })
        .catch(err => {
            console.log(err)
        })
    }, [url])
    return {data};
};

export default useFetch;
