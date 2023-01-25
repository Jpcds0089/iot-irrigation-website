

/* Init ----------------------------------------------------------------- */


const express = require("express");

const app = express();

app.use(express.static("public"));


/* Home page ------------------------------------------------------------ */


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/pages/index.html");
});


/* Listening the ports -------------------------------------------------- */


app.listen(5000, function() {
    console.log("Server in running. Port: 5000.");
});
