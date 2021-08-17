const path = require("path");
require("dotenv").config();
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

const Importer = require("mysql-import");
const importer = new Importer({ host, user, password, database });

// New onProgress method, added in version 5.0!

exports.Import = (id) => {
  importer.onProgress((progress) => {
    var percent =
      Math.floor((progress.bytes_processed / progress.total_bytes) * 10000) /
      100;
    console.log(`${percent}% Completed`);
  });

  importer
    .import(path.join(__dirname, `../../BACKUPS/${id}.dump.sql`))
    .then(() => {
      console.log("funciona");
      var files_imported = importer.getImported();
      console.log(`${files_imported.length} SQL file(s) imported.`);
    })
    .catch((err) => {
      console.error(err);
    });
};
