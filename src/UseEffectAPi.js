import React,{useEffect, useState} from 'react';
import './App.css';

const UseEffectAPi = () => {

    const [posts,setPosts]=useState([])

    useEffect(()=>{
        const url='https://jsonplaceholder.typicode.com/posts';//api url
        fetch(url).then(resp=>resp.json())//calling url by method GET
        .then(resp=>setPosts(resp))//setting response to state posts
      },[])

  return (
    <div>
            <h1 align="center">React-App</h1>
      {/* lopping through each object and dispaying id and title of posts */}
      {
        posts.map(post=><div><p>{`${post.id}. ${post.title}`}</p></div>)
      }
    </div>
  )
}

export default UseEffectAPi