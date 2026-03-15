import app from './src/app.js';
import connectDB from './src/config/database.js';
import {generateResponse} from "./src/services/ai.service.js"
const PORT = 3000;



connectDB()

generateResponse("what are you")

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
