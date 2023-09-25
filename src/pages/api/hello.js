import axios from "axios"
 
async function getPosts(req, res) {
  const page = req.query.page
 
    if (req.method === 'GET') {
      try {
        const response = axios("http://localhost:1337/api/:post")
 
         const result = response.data
         console.log(response.data);
         return  res.status(200).json(result);    
        }  catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
    }
  
  
  export default getPosts;
 
 