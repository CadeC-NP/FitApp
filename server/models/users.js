const bcrypt = require('bcrypt');
const mysql = require('./mysql');
const cm = require('./contactMethods');

const SALT_ROUNDS = process.env.SALT_ROUNDS || 8;
const Types = { ADMIN:5, USER:6 };

async function getAll(){
    console.log("Called Get All")
    return await mysql.query(`SELECT * FROM FITAPP_Users`);
}

async function get(id){
    const sql = `SELECT *, (SELECT Value FROM FITAPP_ContactMethods Where User_id = FITAPP_Users.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = true) as PrimaryEmail FROM FITAPP_Users WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user" };
    return rows[0];
}

async function getNames(){
    console.log("Called Get First Names")
    return await mysql.query(`SELECT FirstName FROM FITAPP_Users`);
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM FITAPP_Types WHERE Type_id = 2`);
}

async function login(email, password){
    const sql = `SELECT *
    FROM FITAPP_Users U Join FITAPP_ContactMethods CM ON U.id=CM.User_id WHERE CM.Value=?`;
    const rows = await mysql.query(sql, [email]);
    if(!rows.length) throw { status: 404, message: "EMAIL IS NOT REGISTERED" };
    console.log({password, Password: rows[0].Password});

    const hash = await bcrypt.hash(password, rows[0].Password)
    const res = await bcrypt.compare(password, rows[0].Password)
    console.log ({res, hash})
    if(! res ) throw { status: 403, message: "WRONG PASSWORD" };
    return get(rows[0].User_id);
}

async function register(FirstName, LastName, DOB, Password, User_Type, email) {
    if(await cm.exists(email)){
        throw { status: 409, message: 'EMAIL ALREADY USED, LOGIN ?' }
    }
    const hash = await bcrypt.hash(Password, SALT_ROUNDS);
    const res = await add(FirstName, LastName, DOB, hash, User_Type);
    const emailRes = await cm.add(cm.Types.EMAIL, email, true, true, res.insertId);
    const user = await get(res.insertId);
    return user;
}

async function add(FirstName, LastName, DOB, Password, User_Type){
    const sql = 'INSERT INTO `FITAPP_Users` (`created_at`, `FirstName`, `LastName`, `DOB`, `Password`, `User_Type`) VALUES ? ;';
    const params = [[new Date(), FirstName, LastName, new Date(DOB), Password, User_Type]];
    return await mysql.query(sql, [params]);
}

async function update(id, FirstName, LastName, DOB, Password, User_Type){
    const sql = 'UPDATE `FITAPP_Users` SET ? WHERE `id` = ?;';
    const params = { created_at: new Date(), FirstName, LastName, DOB: new Date(DOB), Password, User_Type };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = 'DELETE FROM `FITAPP_Users` WHERE `FITAPP_Users`.`id` = ?';
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName FROM FITAPP_Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = { getAll, get, add, update, remove, getTypes, search, login, register,getNames, Types}