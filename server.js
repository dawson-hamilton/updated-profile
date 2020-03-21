const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes")(app);

app.listen(PORT, function () {
    console.log("Server is listening on: http://localhost:" + PORT);
});