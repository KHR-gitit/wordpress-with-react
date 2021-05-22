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
let allPosts;
loading? '...' : allPosts = data.map(e => <h1 key={e.title.rendered}>{ e.title.rendered}</h1>);
    return (
        <div>
            {/* {
                data.map((e)=>{
                    {}
                    loading? '...' : <div dangerouslySetInnerHTML={{__html: e.excerpt.rendered}}/> 
                })
            } */}
            {allPosts}
        </div>
    )
}

export default Posts