// small validation for empty fields
module.exports = (req, res, next) => {
  const { name, email, department } = req.body;
  if (!name || !email || !department) {
    return res.status(400).json({ message: "All fields are required" });
  }
  next();
};
