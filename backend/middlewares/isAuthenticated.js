import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        
        // 👇 DEBUG LOGS (Watch your VS Code terminal for these)
        console.log("----------------------------------------------");
        console.log("🔍 AUTH DEBUG CHECK");
        console.log("1. Cookies received:", req.cookies);
        console.log("2. Token value:", token);
        console.log("----------------------------------------------");

        if (!token) {
            return res.status(401).json({
                message: "User not authenticated (Token missing)",
                success: false,
            })
        }

        const decode = await jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid token",
                success:false
            })
        }
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log("🔥 AUTH ERROR:", error.message);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}
export default isAuthenticated;