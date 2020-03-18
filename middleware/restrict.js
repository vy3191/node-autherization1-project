const userModal = require('../modals/users-modal');
const bcrypt = require('bcryptjs');
const session = {};

async function restrict(req,res,next) {
  try{
    // **** Adding session with no state ******
     console.log('Request Head', req.headers);
     const { authorization } = req.headers;
     if(!session[authorization]) res.status(401).json({msg:'Invalid credentials'});

     next();
  }catch(err) {
     next(err);
  }
};

module.exports = {
  restrict,
  session
};