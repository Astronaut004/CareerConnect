import jwt from 'jsonwebtoken';

const protect = (req,res,next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if(!token) return res.status(401).json({error: 'Not authorized, no token'});

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  }
  catch (error) {
    return res.status(401).json({error: 'Not authorized, token failed'});
  }
}

export default protect;