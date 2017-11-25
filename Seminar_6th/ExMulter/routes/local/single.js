const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: './saved', // 기본 '.'의 위치가 Express Directory이다.
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  })
});

router.post('/', upload.single('image'), function(req, res) {
  res.status(201).send("successful save image file!");
});

module.exports = router;
