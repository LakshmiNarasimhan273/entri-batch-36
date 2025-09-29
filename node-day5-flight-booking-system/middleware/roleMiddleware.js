const checkRole = (allowedRoles) => {
    return (req, res, next) => { // Function Currying
        const authHeaders = req.headers.authorization;

        if(!authHeaders){
            return res.status(401).json({message: "No role provided"});
        }

        // Access control
        if(!allowedRoles.includes(authHeaders)){
            return res.status(403).json({message: "Access Denied"});
        }
        req.userRole = authHeaders;
        next();
    }
}

module.exports = checkRole;