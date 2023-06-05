import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { startDB } from "./database";
const PORT = process.env.PORT;
const URI_CONN = process.env.URI_CONN;

app.listen(PORT, async () => {
  try {
    if (URI_CONN) {
      const sequelize = startDB(URI_CONN);
      await sequelize.authenticate();
      console.log(`App is listening at port ${PORT}`);
    }
  } catch (error) {
    console.error(error);
    process.abort();
  }
});
