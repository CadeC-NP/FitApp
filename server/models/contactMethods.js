const mysql = require('./mysql');
const Types = { EMAIL: 'Email', CELL_PHONE:'Cell Phone' };

async function getAll(){
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM FITAPP_ContactMethods`);
}

async function get(id){
    const rows = await mysql.query(`SELECT * FROM FITAPP_ContactMethods WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows[0];
}

async function exists(email){
    const rows = await mysql.query(`SELECT * FROM FITAPP_ContactMethods WHERE Value=?`, [email]);
    console.log ( { rows })
    return rows.length;
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM FITAPP_Types WHERE Type_id = 4`);
}

async function add(Type, Value, IsPrimary = 0, CanSpam = 1, User_id){
    const sql = `INSERT INTO FITAPP_ContactMethods (created_at, Type, Value, IsPrimary, CanSpam, User_id) VALUES ? ;`;
    const params = [[new Date(), Type, Value, IsPrimary, CanSpam, User_id]];
    return await mysql.query(sql, [params]);
}

async function update(id, Type, Value, IsPrimary, CanSpam, User_id){
    const sql = `UPDATE FITAPP_ContactMethods SET ? WHERE id = ?;`;
    const params = { Type, Value, IsPrimary, CanSpam, User_id };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM FITAPP_ContactMethods WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Value FROM FITAPP_ContactMethods WHERE Value LIKE ?; `, [`%${q}%`]);

module.exports = { getAll, get, exists, add, update, remove, getTypes, search, Types }