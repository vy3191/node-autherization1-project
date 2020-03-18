const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userModal = require("../modals/users-modal");
const {session, restrict } = require("../middleware/restrict");

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
});

router.post("/login", async (req,res,next) => {
     try{
      const {username,password} = req.body;
      if(!username) res.status(400).json({msg:'Username is missing'});
      if(!password) res.status(400).json({msg:'Password is missing'});
      if(!req.body) res.status(400).json({msg: 'something is missing'});
      const user = await userModal.findBy({username}).first();
      console.log('user', user);
      const isUserPasswordValid = await bcrypt.compare(password, user.password);
      console.log('passwordValid', isUserPasswordValid);
      if(!user || !isUserPasswordValid) res.status(401).json({msg:'Invalid credentials'});
      // *****setting cookies******
      const authToken = Math.random();
      session[authToken] = user.id // Find the user by the username when you login.
      res.setHeader('Authorization', authToken);

      res.json({
			message: `Welcome ${user.username}!`,
		})
     }catch(err){
        next(err);
     }
});


module.exports = router;
