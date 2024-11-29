const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.header('Authorization');
    
    if (!token) return res.send({message:"access denied.", status:401});
    try {
        const decoded = jwt.verify(token, 'your-secret-key');

        
        req.name = decoded.name;
        next();
    } catch (error) {
        res.send({message:"access denied.", status:401});
    }
};

module.exports = verifyToken;