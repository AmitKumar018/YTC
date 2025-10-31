import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";
import app from "./app.js";
import { asyncHandler } from "./utils/asyncHandler.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT} `);
    });
})
.catch((err)=>{
    console.error("MongoDB connection failed",err);
})

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
