const mysqldump = require("mysqldump");
require("dotenv").config();


//funcion de exportacion
exports.copia = async () => {

  console.log("procesando..");
  await mysqldump({
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    },
    dumpToFile: `./BACKUPS/${Date.now()}.dump.sql`,
  });
};
