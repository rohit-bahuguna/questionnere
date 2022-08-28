var jwt = require('jsonwebtoken');


const  verifyToken  = (req, res, next) => {


    try {
        let token = req.headers.auth;
      
        if(token){
          
            let user = jwt.verify(token , process.env.SECRET_KEY);
            req.userId = user.id;
            req.userName = user.name
           
        }
        else{
            res.status(401).json({massage : "Unauthorization user"});
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({massage : "Unauthorization user"});
    }

}

module.exports = verifyToken;