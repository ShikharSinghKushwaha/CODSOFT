const express = require('express');
const port = 3001;
const home = require('./routes/home');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv');
const {databaseConnection} = require('./db')
const signUp = require('./routes/signup')
const login = require('./routes/login');
//const User = require('./models/user');
const Blog = require('./models/blog')
const posts = require('./routes/post');
const blogs = require('./routes/blogs')
env.config();

databaseConnection().then('connected');

app.use(express.urlencoded({extended :true}))
app.use(cors())
// app.use(express.json())
app.use(bodyParser.json())


app.use('/signup', signUp)

app.use('/login',login)

app.use('/blog',blogs)

 app.get('/posts/:userId', async (req, res) => {
     const  userId  = req.params.userId;

    try {
         const findUsersBlog = await Blog.find({ userId }); 

        if (findUsersBlog.length > 0) {
             return res.status(200).send(findUsersBlog);
         } else {
             return res.status(404).send({ message: 'User id Not Found' }); 
         }
     } catch (err) {
         return res.status(500).send({ message: 'Something went Wrong, Please try again', err }); 
     }
 });



app.get('/posts/:userId/:title',async(req,res) => {
    const requestedTitle = req.params.title;

    try{
        const blogWithTitle = await Blog.find({ title:requestedTitle });
        
        if (blogWithTitle && blogWithTitle.length > 0) {
            const result = blogWithTitle.filter((blog) => {
                if (blog.title === requestedTitle) { // Use the renamed variable here
                    console.log(blog);
                    return res.send(blog);
                }
            });
        }else{
            res.send('User id not found')
        }

    }catch(err) {
        console.log(err)
        res.send({
            message:'Internal server Error occured',
            err
        })
    }
})

//app.use('/posts',posts)

app.use('/',home)

app.listen(port,() => {
    console.log('Server is running on port' + port)
})