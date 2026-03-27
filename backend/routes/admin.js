const express = require("express");
const router = express.Router();
const result = require("../utils/createResult");
const pool = require("../DB/pool");

router.get("/getAllUsers", (req, res) => {
  const sql = "select * from users  ";
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

router.get("/getAllBooks", (req, res) => {
  const sql = "select * from books  ";
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

router.get("/getAllCategories", (req, res) => {
  const sql = "select * from categories";
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

router.get("/getAllFines", (req, res) => {
  const sql = "select * from fines  ";
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

router.get("/getAllLoans", (req, res) => {
  const sql = "select * from loans  ";
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

router.get("/getAllMembers", (req, res) => {
  const sql = "select * from members ";
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

router.get("/getAllReservations", (req, res) => {
  const sql = "select * from reservations  ";
  pool.query(sql, (error, data) => {
    res.send(result.createResult(error, data));
  });
});

module.exports = router;
