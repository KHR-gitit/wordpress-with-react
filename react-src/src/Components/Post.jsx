import React from 'react'

function Post({title, excerpt}) {
    return (
    
            <div>
            <h1>{title}</h1>
            <div  dangerouslySetInnerHTML={{__html: excerpt}}/>
            </div>
            
    )
}

export default Post
