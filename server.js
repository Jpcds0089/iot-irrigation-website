

/* Init ----------------------------------------------------------------- */


const express = require("express");

const app = express();


/* Home page ------------------------------------------------------------ */


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/pages/index.html");
});


/* Listening the ports -------------------------------------------------- */


app.listen(3000, function() {
    console.log("Server in running. Port: 3000.");
});
