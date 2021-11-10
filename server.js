const mongoose = require('mongoose');
const dotenv = require('dotenv'); //// requisita dotenv para ler arquivo config env

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' }); //// define onde esta as variaveis de ambiente
const app = require('./app');

// CONECTANDO AO BANCO
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
// usar processs.env.DATABASE_LOCAL - no lugar de DB para usar local database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindandModify: false,
  })
  .then((con) => {
    // console.log(con.connection);
    console.log('DB connection Successfull'); // pode ser feito apenas com (() => console.log('conectado'));
  });

//console.log(process.env);

// INICIANDO SERVER
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});
