const express = require("express");
const app = express();

// الصفحة الرئيسية
app.get("/", (req, res) => {
    res.send("Yasser Trading is running!");
});

// Render بيستخدم PORT من البيئة
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
