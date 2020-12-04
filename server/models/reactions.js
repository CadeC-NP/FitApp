const mysql = require('./mysql');

const Emojis = {LOVE: '❤️'};

async function getAll(){
    console.log("called get all");
    const sql = `SELECT W.*, FirstName, LastName FROM FITAPP_Reactions P Join FITAPP_Users U ON W.Owner_id = U.id`;
    
    return await mysql.query(sql);
}

async function getForWorkout(Workout_id){
    const sql = `SELECT W.*, FirstName, LastName FROM FITAPP_Reactions P Join FITAPP_Users U ON W.Owner_id = U.id WHERE W.Workout_id = ?`;
    
    return await mysql.query(sql, [Workout_id]);
}

async function get(id){
    const sql = `SELECT * FROM FITAPP_Reactions WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw {status: 404, message: "COMMENT DOES NOT EXIST"};

    return rows[0];
}

async function add(Emoji = Emojis.LOVE, Workout_id, Owner_id){
    const sql = `INSERT INTO FITAPP_Reactions (created_at, Emoji, Workout_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Emoji, Workout_id, Owner_id]];
    const res = await mysql.query(sql, [params]);

    return get(res.insertId);
}

async function update(id, Emoji, Workout_id, Owner_id){
    const sql = `UPDATE FITAPP_Reactions SET ? WHERE id = ?;`;
    const params = {Emoji, Workout_id, Owner_id};
    const res = await mysql.query(sql, [params, id]);

    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM FITAPP_Reactions WHERE id = ?`;

    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Text, Workout_id FROM FITAPP_Reactions WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = {getAll, getForWorkout, get, add, update, remove, search};