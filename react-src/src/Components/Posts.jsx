import React, { useState, useEffect } from 'react'


function Posts() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    async function fetchData () {
    let res = await fetch('http://localhost/react-wp/wp-json/wp/v2/posts');
    res = await res.json();
        console.log(res);
    setData(()=>{
        return res
    })
    setLoading(false);  
}
fetchData();

}, []);

    return (
        <div>
            <h1>{loading? '...' : data[0].title.rendered}</h1>
            { loading? '...' : <div dangerouslySetInnerHTML={{__html: data[0].excerpt.rendered}}/> }
        </div>
    )
}

export default Posts