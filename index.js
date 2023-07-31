const express = require("express");
const fs = require("fs");
const getRes = require("./updateWeather.js");
// getRes("kanpur");
PORT = 5000

app = express()
app.use(express.json());
app.use(express.static('other'));
app.use(express.urlencoded({extended:false}));


app.listen(PORT, () => {
    console.log(`server is running at port no ${PORT}... http://localhost:${PORT}`);
})

app.get("/", (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.send(data).status(200);
    });
});

app.get("/info", async (req, res) => {
    // console.log(req.query);
    cty = req.body.cityy;
    cty = req.query.q;
    const s = await getRes(cty);
    res.status(200).json(s);
    // res.send(cty).status(200);
});