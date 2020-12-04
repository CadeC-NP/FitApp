const mysql = require('./mysql');
const cm = require('./ContactMethods');
const comments = require('./comments');

const Privacy_Levels = { HIDDEN: 0, ONLY_ME: 1, ONLY_FRIENDS: 2, PUBLIC: 4 };

async function getAll(){
    console.log("called get all");
    const sql = `
        SELECT 
        W.*, FirstName, LastName,
        (SELECT Value FROM FITAPP_ContactMethods Where User_id = U.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = 1) as PrimaryEmail,
        (SELECT COUNT(*) FROM FITAPP_Reactions WHERE Workout_id = W.id) as Reactions
        FROM FITAPP_Workouts W Join FITAPP_Users U ON W.Owner_id = U.id`

    return await mysql.query(sql);
}

async function get(){
    const sql = `SELECT * FROM FITAPP_Workouts WHERE id=?`;
    const rows = await mysql.query(sql, [id]);

    if (!rows.length) 
    throw {status: 404, message: "WORKOUT DOES NOT EXIST"};
    return rows[0];
}

async function getByUser(user_id){
    console.log("Called Get All")
    const sql = `
        SELECT 
            W.*, FirstName, LastName,
            (SELECT Value FROM FITAPP_ContactMethods Where User_id = U.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = 1) as PrimaryEmail,
            (SELECT COUNT(*) FROM FITAPP_Reactions WHERE Workout_id = W.id) as Reactions
            FROM FITAPP_Workouts P Join FITAPP_Users U ON W.Owner_id = U.id
            WHERE W.Owner_id = ?`
        console.log(sql);

        const workouts = await mysql.query(sql, [user_id]);

        for (const p of workouts) {
            p.Comments = await comments.getForWorkout(p.id); 
        }

    return workouts;
}

async function getTypes(){
    return await mysql.query('SELECT id, Name FROM FITAPP_Types WHERE Type_id = 3');
}

async function add(Exercise_Type, Privacy_Setting, Owner_id){
    const sql = `INSERT INTO FITAPP_Workouts (created_at, Workout_Type, Privacy_Setting, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Exercise_Type, Privacy_Setting, Owner_id]];
    const res = await mysql.query(sql, [params]);

    return get(res.insertId);
}

async function update(id, Exercise_Type, Privacy_Setting, Owner_id){
    const sql = 'UPDATE `Workouts` SET ? WHERE `id` = ?;';
    const params = { created_at: new Date(), Exercise_Type, Privacy_Setting, Owner_id};

    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = `DELETE FROM FITAPP_Workouts WHERE id = ?`;
    
    return await mysql.query(sql, [id]);
}

module.exports = {getAll, get, getTypes, add, update, remove, getByUser, Privacy_Levels}