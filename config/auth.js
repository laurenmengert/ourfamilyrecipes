const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  const fullTokenString = req.get('Authorization') || req.query.token || req.body.token;
  console.log(fullTokenString, 'Full Token String');
  if (fullTokenString) {
    parsedTokenString = fullTokenString.replace('Bearer ', '');
    jwt.verify(parsedTokenString, SECRET, function(err, decodedToken) {
      if (err) {
        next(err);
      } else {
        req.user = decodedToken.user;    
        next();
      }
    });
  } else {
    next('No token sent');
  }
};