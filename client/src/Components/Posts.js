import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import { useParams,useNavigate,NavLink ,useLocation} from 'react-router-dom'
//import DisplayBlog from './DisplayBlog'
import '../Stylesheets/StylePosts.css'

function Posts() {
  const [ data, setData ] = useState([])
  const [ userName, setUserName ] = useState('');
  const navigate = useNavigate();
 // const location = useLocation();

  
  const userId = localStorage.getItem('userId')   


  useEffect(() => {
  const handleLogin = () => {
    
    axios.get(`http://localhost:3001/posts/${userId}`)
      .then(response => {
       
        setData(response.data)
       
       
        const userName = localStorage.getItem('username'); 
        const sliceUserName = userName.substring(userName.lastIndexOf('@'),-1);

        setUserName(sliceUserName.charAt(0).toUpperCase()+sliceUserName.slice(1));

        
    }).catch((err) => {
      console.log(err);
    })
  }
  handleLogin();

  const getJwt= localStorage.getItem('jwt');

        if(getJwt) {
        return  navigate(`/posts/${userId}`)
        }else{
          return navigate('/login')
        }
},[])
   

 //  axios.post('http://localhost:3001/posts',)
   
  return (
    <div>
      <h1>Your Posts</h1>
      <h4 className='heading'>Welcome 🙂 {userName}</h4>
      <div className='post-container'>
      {data.map((item,index) => (
        <div className="blog-post" key={index}>
          <NavLink to={`/posts/${userId}/${item.title}`} style={{textDecoration:'none'}}>
          <div className='img-container'>
            <img src={`https://source.unsplash.com/300x300?${item.tags.toLowerCase()}` 
            }
            title={item.tags}
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

export default Posts
