/**
 * Database module (starter stub).
 *
 * Feature branch: feature/database-connection should implement:
 * - connect()
 * - a config pattern using environment variables
 * - a simple query function OR a client getter
 *
 * You may use:
 * - a "fake" in-memory database for the checkpoint, OR
 * - SQLite, OR
 * - MongoDB/Postgres (optional) — keep setup simple
 */

function connect() {
  return {
    connected: true,
    driver: "stub",
    host: "localhost",
    status: "Database connected successfully"
  };
}
function getStatus() {
  return "Database status OK";
}
module.exports = { connect, getStatus };
