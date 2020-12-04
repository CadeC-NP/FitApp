const mysql = require('./mysql');

async function getAll(){
    console.log("called get all");
    const sql = `SELECT W.*, FirstName, LastName FROM FITAPP_Comments P Join FITAPP_Users U ON W.Owner_id = U.id`;

    return await mysql.query(sql);
}

async function get(id){
    const sql = `SELECT * FROM FITAPP_Comments WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw{status: 404, message: "COMMENT DOES NOT EXIST" };

    return rows[0];
}

async function getForWorkout(Workout_id){
    const sql = `SELECT W.*, FirstName, LastName FROM FITAPP_Comments P Join FITAPP_Users U ON W.Owner_id = U.id WHERE W.Workout_id = ?`
    return await mysql.query(sql, [Workout_id]);
}

async function add(Text,Workout_id,Owner_id){
    const sql = `INSERT INTO FITAPP_Comments (created_at, Text, Workout_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Text, Workout_id, Owner_id]];
    const res = await mysql.query(sql, [params]);

    return get(res.insertId);
}

async function update(id, Text, Workout_id, Owner_id){
    const sql = `UPDATE FITAPP_Comments SET ? WHERE id = ?;`;
    const params = {Text, Workout_id, Owner_id};
    const res = await mysql.query(sql, [params,id]);

    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM FITAPP_Comments WHERE id = ?`;

    return await mysql.query(sql, [id]);
}

module.exports = {getAll, get,add,update,remove, getForWorkout}