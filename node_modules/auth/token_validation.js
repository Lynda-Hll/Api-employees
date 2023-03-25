const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  },


  checkTokentest: (req, res, next) => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsia2V5IjoiYW5vdGhlciBqc29uIHN0cnVjdHVyZSIsImtleTIiOiJhbm90aGVyIGpzb24gc3RydWN0dXJlIn0sImlhdCI6MTY2Mzc1ODQ2NiwiZXhwIjoxNjYzNzYyMDY2fQ.wmG0LlG2Fykvj2yNF1GNgrrhbiufjbuW6yqTVkdzrxU";// exemple
  
      // Remove Bearer from string
     
      jwt.verify(token, "qwe1234", (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          return res.json({
            success: 0,
            message: req.decoded.result.key
          });
        }
      });
  
    
  }
};
