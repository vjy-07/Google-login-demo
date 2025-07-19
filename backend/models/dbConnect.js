const mongoose = require("mongoose");

const DB = process.env.DB_URL;
console.log("DB--", DB);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ DB connection established");
  })
  .catch((err) => {
    console.error("❌ DB CONNECTION FAILED");
    console.error("ERR:", err.message);
  });
