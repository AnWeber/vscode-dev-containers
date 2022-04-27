const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const config = {
  user: "HWK93_DUMMY",
  password: "staging93",
  connectionString: "10.1.1.183:1521/ora5gt",
  useRemoteDb: true,
};

async function run() {

  let connection;

  try {
    connection = await oracledb.getConnection(config);

    const result = await connection.execute(
      `SELECT sysdate FROM dual`,
      [],
    );
    console.log(result.rows);

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();