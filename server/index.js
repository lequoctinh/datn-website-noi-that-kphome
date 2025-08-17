require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
res.json({ message: "Secure smart home backend API đang hoạt động!" });
});

app.listen(PORT, () => {
console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
