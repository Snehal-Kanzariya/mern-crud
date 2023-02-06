let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let studentSchema = require("../models/Student");

// creating user
router.post("/create-student", (req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

module.exports = router;
