const mysql = require('./mysql');

async function getAll(){
    console.log("called get all");
    const sql = `SELECT P.*, FirstName, LastName FROM FITAPP_Comments P Join FITAPP_Users U ON P.Owner_id = U.id`;

    return await mysql.query(sql);
}

async function get(id){
    const sql = `SELECT * FROM FITAPP_Comments WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw{status: 404, message: "COMMENT DOES NOT EXIST" };

    return rows[0];
}

async function add(Text,Workout_id,Owner_id){
    const sql = `INSERT INTO FITAPP_Comments (created_at, Text, Post_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Text, Workout_id, Owner_id]];
    const res = await mysql.query(sql, [params,id]);

    return get(res.insertId);
}

async function update(id, Text, Workout_id, Owner_id){
    const sql = `UPDATE ${PREFIX}Comments SET ? WHERE id = ?;`;
    const params = {Text, Workout_id, Owner_id};
    const res = await mysql.query(sql, [params,id]);

    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Comments WHERE id = ?`;

    return await mysql.query(sql, [id]);
}

module.exports = {getAll, get,add,update,remove}