const userModal = require('../modals/users-modal');
const bcrypt = require('bcryptjs');
const session = {};

async function restrict(req,res,next) {
  try{
    // **** Adding session with no state ******
     console.log('Request Head', req.headers);
          //  const { authorization } = req.headers;
          //  if(!session[authorization]) res.status(401).json({msg:'Invalid credentials'});
    // *********** Adding cookies now ********
    const { cookie } = req.headers;
    if(!cookie) res.status(401).json({msg:'Invalid credentials'});
    const authToken = cookie.replace('token=','');
    if(!authToken) res.status(401).json({msg:'Invalid credentials'});    
     next();
  }catch(err) {
     next(err);
  }
};

module.exports = {
  restrict,
  session
};