import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/getData", (req, res) => {
  res.send("Hello from backend");
});

app.listen(3000, () => console.log(`App is running at port 3000`));
