import React from 'react'
//import { isHtmlElement } from 'react-router-dom/dist/dom'
import { useParams } from 'react-router-dom'
import { useEffect, useState }  from 'react';
import axios from 'axios'
import '../Stylesheets/ShowBlog.css'


function DisplayBlog() {
    const {title} = useParams()
    const [blog,setBlog] = useState([]);
   //const content = useParams();

   useEffect(() => {
   
    try{
        const userId= localStorage.getItem('userId');
        axios.get(`http://localhost:3001/posts/${userId}/${title}`)
       .then(response => {
       
        setBlog(response.data);
       })
    }catch(err){
        console.log(err)
    }
   },[])
  return (
    <div>
        <article>
      <div className='content-container'>
        <div className='child-content-container'>

            {/* {blog.map((item,index) => ( */}
                <div className='blog-container'>

                    <h2 className="blog-title">{blog.title}</h2>
                   <p className='tags'>Tag - {blog.tags}</p>
                   <h4 className='main-content'>{blog.content}</h4>
                </div>
            {/* ))} */}
        </div>
      </div>
      
      </article>
    </div>
  )
}

export default DisplayBlog
