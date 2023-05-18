const jwt = require("jsonwebtoken");
const User = require("./model/user.model");
async function isLoggedIn(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const { userId } = jwt.verify(token, "mudasirpandith");
    const user = await User.findById(userId);
    req.user = user;
    next();
  } catch (error) {
    return res.sendStatus(404);
  }
}

module.exports = isLoggedIn;
