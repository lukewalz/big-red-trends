const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const defaultAxios = require('axios');
const dotenv = require('dotenv');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const axios = defaultAxios.create({
    baseURL: 'https://api.collegefootballdata.com/',
    headers: { Authorization: `Bearer ${process.env.API_KEY}` },
});


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(bodyParser.json());
app.use(cors());

app.get('/.netlify/functions/server/teams', async (req, res) => {
    const response = await axios.get('teams/fbs');
    try {
        res.send(response.data)
    } catch (error) {
        console.log(error);
    }
});

app.get('/.netlify/functions/server/year', async (req, res) => {
    const response = await axios.get(`stats/game/advanced?year=${req.query.year}&team=${req.query.team}`);
    try {
        res.send(response.data);
    } catch (error) {
        console.log(error);
    }
});

app.get('/.netlify/functions/server/stats', async (req, res) => {
    var stats = [];
    var teamData = {};
    try {
        const statResponse = await axios.get(`stats/season/advanced?excludeGarbageTime=false&team=${req.query.team}`);
        const teamResponse = await axios.get('teams/fbs')
        stats = statResponse.data;
        teamData = teamResponse.data.find(e => e.school.toLowerCase() === req.query.team.toLowerCase())
    } catch (err) {
        return console.error(err)
    }

    var combinedObject = stats.map(e => {
        var t = Object.assign({}, e);
        t.color = teamData.color;
        t.secondary = teamData.alt_color;
        t.logo = teamData.logos[0];
        return t;
    })

    res.send(combinedObject);
});


module.exports = app;
module.exports.handler = serverless(app);