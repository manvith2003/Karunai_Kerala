import jwt from "jsonwebtoken";

const userLoggedInStatus = async (request, _, next) => {
    let loggedInStatus = false;
    const token = request.cookies?.accessToken;
    if (token) {
        try {
            jwt.verify(token, process.env.JWT_ACCESS_SECRETKEY);
            loggedInStatus = true;
        } catch (error) {
            loggedInStatus = false;
        }
    }
    request.loggedIn = loggedInStatus;
    next();
};

export default userLoggedInStatus;
