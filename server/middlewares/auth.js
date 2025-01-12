import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers; 

        if (!token) {
            return res.status(401).json({ success: false, message: 'Authentication token is missing' });
        }

        const token_decoded = jwt.decode(token);
        console.log('Decoded Token:', token_decoded);

        if (!token_decoded || !token_decoded.clerkId) {
            return res.json({ success: false, message: 'Invalid token: clerkId not found' });
        }

        req.body.clerkId = token_decoded.clerkId;
        console.log('Authorized clerkId:', req.body.clerkId);
        next();
    } catch (error) {
        console.error('Error in auth middleware:', error);
        res.status(401).json({ success: false, message: 'Authentication failed' });
    }
};

export default authUser