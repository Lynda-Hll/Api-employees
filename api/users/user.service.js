const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into joueurs(firstName, lastName, emailId) 
                values(?,?,?)`,
      [data.firstName, data.lastName, data.emailId],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },

  getUserByUserId: (id, callBack) => {
    pool.query(
      `select * from joueurs where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },

  getUsers: (callBack) => {
    pool.query(
      `select id,firstName, lastName, emailId from joueurs`,
      [],
      (error, results) => {
        if (error) {
          callBack(error, null);
        }
        callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `update joueurs set firstName=?, lastName=?, emailId=? where id=?`,
      [data.firstName, data.lastName, data.emailId, data.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (id, callBack) => {
    pool.query(
      `delete from joueurs where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
};
