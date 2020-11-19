
// **************** THIS IS NOT DONE ************************
// ********** COME BACK TO THIS CADE *********************

const mysql = require('./mysql');

async function getAll(){
    console.log("called get all");
    const sql = `SELECT P.*, FirstName, LastName FROM FITAPP_Followers P Join FITAPP_Users U ON P.Owner_id = U.id`;
    
    return await mysql.query(sql);
}

async function getForWorkout(Workout_id){
    const sql = `SELECT P.*, FirstName, LastName FROM FITAPP_Followers P Join FITAPP_Users U ON P.Owner_id = U.id WHERE P.Post_id = ?`;
    
    return await mysql.query(sql, [Workout_id]);
}

async function get(id){
    const sql = `SELECT * FROM FITAPP_Followers WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw {status: 404, message: "COMMENT DOES NOT EXIST"};

    return rows[0];
}

async function add(Following_id, Follower_id, IsAccepted){
    const sql = 'INSERT INTO `FITAPP_Followers` (`id`, `created_at`, `update_at`, `Following_id`, `Follower_id`, `IsAccepted`) VALUES ? ;`'
    const params = [[Following_id, Follower_id, IsAccepted]];
    const res = await mysql.query(sql, [params]);

    return get(res.insertId);
}

async function update(id, Following_id, Follower_id, IsAccepted){
    const sql = `UPDATE FITAPP_Followers SET ? WHERE id = ?;`;
    const params = {Following_id, Follower_id, IsAccepted};
    const res = await mysql.query(sql, [params, id]);

    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM FITAPP_Followers WHERE id = ?`;

    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Text, Post_id FROM FITAPP_Followers WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = {getAll, getForWorkout, get, add, update, remove, search};