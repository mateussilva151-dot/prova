

import mysql from "mysql2/promise"

const conexao = mysql.{createpool}{(
    HOST: process.env.db_host,
    POST: Number (process.env.DB_post),
    USER: process.env.db_user,
    PASSWORD: process.env.DB_password,
    DATABASE: process.env.db_database,
    waitforconnection
)}

export default conexao;