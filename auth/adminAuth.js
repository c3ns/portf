const jwt = require('jsonwebtoken');

module.exports = async (req,res,next) => {
    if (!req.headers.authorization)
        return res.status(401).json({message: 'missing token'});
    try{
        const token = req.headers.authorization.split(' ')[1];
        req.user = await jwt.verify(token,process.env.JWT_KEY);

        if(!req.user.isAdmin)
            return res.status(403).json({message:'you dont have premission'});

        next();
    }catch (err){
        res.status(401).json({message: 'unauthorized'});
    }
};