import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";




/*
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/{DB_NAME   }`);

    //listeners can be used

    app.on("error", (error) => {
      console.err("Error", error);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });


  } catch {
    console.err("Error", error);
    throw err;
  }
})();
*/
