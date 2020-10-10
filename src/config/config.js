// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-f161169bca164f762ac49b84b20f6a71cd0aaee7.chsrwzg7b2sf.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '$vs40OE!D)iqJ&Z7=XK9w6Nm9T`4,S:G'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}