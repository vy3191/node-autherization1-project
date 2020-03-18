const userModal = require('../modals/users-modal');
const bcrypt = require('bcryptjs');
const session = {};

async function restrict(req,res,next) {
  try{
    // ***********Try1:-Adding session with no state **************
          //  const { authorization } = req.headers;
          //  if(!session[authorization]) res.status(401).json({msg:'Invalid credentials'});

    // *********** Try2:- Adding cookies now: Not state ful ********
            // const { cookie } = req.headers;
            // if(!cookie) res.status(401).json({msg:'Invalid credentials'});
            // const authToken = cookie.replace('token=','');
            // if(!authToken) res.status(401).json({msg:'Invalid credentials'}); 
    
    // ***********Try3:- Adding persistent sessions-State ful ********  
     
     next();
  }catch(err) {
     next(err);
  }
};

module.exports = {
  restrict,
  session
};