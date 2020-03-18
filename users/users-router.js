const express = require('express');
const router = express.Router();
const userModal = require('../modals/users-modal');
const {restrict} = require("../middleware/restrict");

router.get("/", restrict, async (req,res,next) => {
    try {
      const users = await userModal.find();
      if(users) {
        res.status(200).json(users);
      }
    }catch(err) {
       next(err);
    }
});

router.get("/logout", restrict, (req,res,next) => {
   req.session.destroy( (err) => {
      if(err) next(err);
      res.json({msg:'Successfully Logged out now.'});
   })
})

module.exports = router;

