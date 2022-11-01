module.exports = {

    getToken: async (req, res, next) => {
        const token = req.cookies.jwt;

        if (!token) {
            console.log("not got");

            res.status(400).json({ err: "not got token" });
        }
        else {
            res.status(200).send(token);
        }


        next();
    },
}