const jwt = require ('jsonwebtoken')

function auth (res, res, nex){
    const token = req.headers.authorization

    if(!token) 
        return res.status(401).json({message:'Sem token'})
}
try{ 
    const decoded = jwt.verify(token, "segredo")

    req.userId = decoded.id;
    next()
}
catch (err){
    return res.status(401).json ({message: 'token invalido'})
}

module.exports = auth