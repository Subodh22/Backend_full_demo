const express = require('express');
const router = express.Router();
const axios = require('axios');

const PostApi='https://jsonplaceholder.typicode.com';

router.get('/',(req,res)=>
{
  axios.get(`${PostApi}/posts`).then(posts=>
    {
      res.status(200).json(posts.data);
    })
    .catch(error=>{
      res.status(500).send(error);
    })
});

module.exports=router;
