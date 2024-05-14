import React from 'react'
import axios from 'axios'
import { useState, useEffect} from 'react';
import { useNavigate, useParams ,NavLink} from 'react-router-dom'
import '../Stylesheets/form.css'
function Blog() {
  
  // const [blogs, setBlogs] = React.useState([])
  const navigate = useNavigate()
  const userId = localStorage.getItem('userId');
  const [ message, setMessage ] = useState('');
  let [ blogInput , setBlogInput] = useState({
    userId:userId,
    title: "",
    content:"",
    tags:''
  })

  const handleInput = (e) => {
    const {name ,value } = e.target;

    setBlogInput({...blogInput, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try{
      axios.post('http://localhost:3001/blog',blogInput)
      .then(response => {
        ///console.log('Created Successfully',response)
        setMessage(response.data.message);
     
      })
    }catch(err){
      console.log('Some Error occured',err);
    }
  }
  const checkJwt = localStorage.getItem('jwt');
  if(!checkJwt){
   return  navigate('/signup')  
  }

  const handleDisable = blogInput.title.trim() === '' || blogInput.content.trim() === '' || blogInput.tags.trim() === '';
  return (
    <div>

     <div className='main-form-container'>
      <div className='child-container'>
      <h1>Create Your Blog</h1>
      <form onSubmit={handleSubmit} className='form-content'>   
      <input type="text"
         placeholder="Your id"
         name='userId'
         contentEditable={false}
         value={blogInput.userId}
         onChange={handleInput}
         className='input-field'
         /> 
        <input type="text"
         placeholder="Your Title"
         name='title'
         value={blogInput.title}
         onChange={handleInput}
         className='input-field'

         />
         <textarea type='text'
         placeholder='Your Content'
         name='content'
         rows='10'
         column='10'
         value={blogInput.content}
         onChange={handleInput}
         className='input-field'
         style={{resize:'none'}}

         required
          />
           <input type='text'
         placeholder='Type only one Tag e.g{Lifestyle,Coding,Thoughts}'
         name='tags'
         value={blogInput.tags}
         onChange={handleInput}
         className='input-field'
          />

          <button type='submit'
          disabled={handleDisable ?  true : false}
          className={`submit-btn ${handleDisable ? 'disabled' : ''}`}>Submit</button>
        </form>
        <h2 style={{textAlign:'center'}}>{message}</h2>
        {message && <h3 style={{textAlign:'center'}}>Go to <NavLink to="/posts/:userId" style={{textDecoration:'none',color:'purple'}}>Post</NavLink> to see your Blog</h3>}
      </div>
     </div>
    </div>
  )
}

export default Blog
