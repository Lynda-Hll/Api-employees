const pool = require("../../config/database");

const {
  create,
  getUserByUserId,
  updateUser,
  deleteUser,
} = require("./user.service");
const { hashSync, genSaltSync } = require("bcrypt");
module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    create(body, (err, results) => {
      if (err) {
        return res.status(500).json({
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        results,
      });
    });
  },
  getUserByUserId: (req, res) => {
    const id = req.params.id;
    getUserByUserId(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          message: "Record not Found",
        });
      }
      results.password = undefined;
      return res.json(results);
    });
  },
  getAllUsers: (req, res) => {
    pool.query(
      `select id,firstName, lastName, emailId from joueurs`,
      [],
      (error, results) => {
        if (error) {
          return res.json({
            err: error,
          });
        }
        return res.json(results);
      }
    );
  },

  updateUsers: (req, res) => {
    const body = req.body;
    updateUser(body, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        message: "updated successfully",
      });
    });
  },
  deleteUser: (req, res) => {
    const id = req.params.id;
    deleteUser(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.json({
        message: "user deleted successfully",
      });
    });
  },
};
