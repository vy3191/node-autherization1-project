const express = require('express');
const router = express.Router();
const userModal = require("../modals/users-modal");

router.post("/register", async (req,res,next) => {
     try {
        const {username,password} = req.body;
        if(!username) res.status(400).json({msg:'Username is missing'});
        if(!password) res.status(400).json({msg:'Password is missing'});
        if(!req.body) res.status(400).json({msg: 'something is missing'});
        const userInDb = await userModal.findBy({username}).first();
        if(userInDb) {
           return res.status(409).json({msg:'Username already exists'});
         }
        const user = await userModal.add({username,password});
        if(user) {
           res.status(201).json(user);
        }
     }catch(err) {
       next(err);
     }
})


module.exports = router;
