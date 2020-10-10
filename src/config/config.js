// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-1e902954d5588c29189bea3a35415ab318d56d1a.ceefo25bexkd.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'g.UhB{l_).8n.e&7ZyAXWPT+`:6p|OWT'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}