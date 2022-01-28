const Phones = require("./celebs-model");

const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  Celebs.getCelebes()
    .then((arr) => {
      res.status(200).json(arr);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.get("/:id", (req, res, next) => {
  Celebs.getCelebById(req.params.id)
    .then((celeb) => {
      res.status(200).json(phone);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

router.post("/", (req, res) => {
  Celebs.add(req.body)
    .then((celeb) => {
      res.status(201).json(celeb);
    })
    .catch((err) => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;