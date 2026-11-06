const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = getTokenFrom(req);

  if (!token) {
    return res.status(401).json({
      error: "token missing",
    });
  }

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.SECRET
    );

    req.user = decodedToken;

    next();
  } catch (error) {
    return res.status(401).json({
      error: "token invalid",
    });
  }
};

module.exports = authMiddleware;