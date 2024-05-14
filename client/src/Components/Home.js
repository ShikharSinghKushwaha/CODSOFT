import React from 'react'
import axios from 'axios';
import { useState , useEffect} from 'react';

import { NavLink} from 'react-router-dom'
import '../Stylesheets/StylePosts.css';
function Home() {
    const [ allBlogs, setAllBlogs] = useState([]);
    
    useEffect(() => {
    const getAllBlogs = () => {
      try{
         axios.get('http://localhost:3001')
        .then((data) => {
            setAllBlogs(data.data);
          
            console.log(data.data)
         // jokes = allJokes;
        })
      }catch(err){
        console.log(err);
      }
    }//function closed
    getAllBlogs();
  }, [])


  return (

    <div>
      <h1>All Blogs</h1>
      <div className='post-container'>
      {allBlogs.map((item,index) => (
        <div className="blog-post" key={index}>
        <NavLink to={`/posts/${item.userId}/${item.title}`} style={{textDecoration:'none'}}>   
        <div className='img-container'>
          <img src={`https://source.unsplash.com/300x300?${item.tags.toLowerCase()}` 
          }
          alt={item.tags}
           className='img-banner'
          />
         
        </div>
        <h2 className='post-title'>{item.title}</h2>
        </NavLink>
      </div>
      ))}
      </div>
    </div>
  )
}

export default Home

