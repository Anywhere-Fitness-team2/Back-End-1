module.exports = {
  checkInstructor
};

function checkInstructor(req, res, next) {
  // console.log(req.jwt);
  if (req.jwt && req.jwt.role === 1) {
    next();
  } else {
    res.status(403).json({message: 'you are not authorized to be here'});
  }
}
