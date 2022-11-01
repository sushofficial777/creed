const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

module.exports = {
sendMail: async (req, res, next) => {

    const { email, firstName, lastName,role,password  } = req.body;
  
    try {
console.log('triggered');
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "skp952580@gmail.com",
                pass:"fzyoophwqqemrcec"
            }
        });
      
        const mailOptions = {
            from: "skp952580@gmail.com",
            to: email,
            subject: "Sending Email With React And Nodejs",
            html: `Hello, ${firstName} Your user Name:_${email} and Password:_${password}  `
      
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error" + error)
            } else {
                console.log("email sent successfully");
                res.status(201).json({status:201,info})
            }
        })
       
    } catch (error) {
        console.log("Error" + error);
        res.status(401).json({status:401,error})
    }

}
}