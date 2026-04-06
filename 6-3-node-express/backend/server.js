// TODO 1: Import and Create express app instance
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

// TODO 1: Define server port
const app = express();
const PORT = process.env.PORT || 3000;


// TODO 4: Import and Apply CORS middleware
app.use(cors());


// TODO 5: Import and apply Morgan middleware
app.use(morgan("dev"));


// TODO 6.1: Create root route "/"
app.get("/", (req, res) => {
  res.send("Welcome to the Random Quote API");
});


// TODO 6.2: Create "/api/quote" route
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});


// TODO 7: Start server using app.listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
