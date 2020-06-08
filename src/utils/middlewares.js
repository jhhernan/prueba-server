const jwt = require('jsonwebtoken'); 

module.exports = {
  auth(req, res, next) {
    try {
      const token = req.headers.authorization;

      if(!token) {
        throw Error();
      }

      req.user = jwt.verify(token, process.env.SECRET);

      next();
    } catch(error) {
      res.status(401).json({ message: 'Your session has expired' });
    }
  }
}