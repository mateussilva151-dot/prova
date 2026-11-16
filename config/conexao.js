import mysql from "mysql2/promise"

const conexao = mysql.createPool({
    HOST= process.env.DB_host,
    PORT= Number(process.env.DB_PORT),
    USER= process.env.db_user
    PASSWORD= process.env.db_password,
    database = process.env.db_database
})