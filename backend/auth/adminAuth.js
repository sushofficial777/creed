const jsonwebtoken = require('jsonwebtoken');
const localStorage = require('localStorage')


const adminAuth  = async (req,res,next) =>{
    try{

        const token = req.cookies.jwt;
        

       
            console.log(`hello----${token}`);
        
        const verifyAdmin = jsonwebtoken.verify(token,process.env.ADMIN_SECRET_KEY);
        
        if(!verifyAdmin){
            return res.status(500).send("user not sign-in ");
            

        }
        else
        {
            next();
        }

        
           

    }catch(err){

        res.status(501).send(`you are not autherised for the access: ${err}`);

    }
}
module.exports = adminAuth;

