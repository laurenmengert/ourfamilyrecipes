const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = function(req, res, next) {
  let fullTokenString = req.get('Authorization') || req.query.token || req.body.token;
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