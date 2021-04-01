import defaultAxios from 'axios'

// https://api.collegefootballdata.com/stats/season/advanced


const axios = defaultAxios.create({
    baseURL: 'https://api.collegefootballdata.com/',
    headers: { 'Content-Type': 'application/json', 'Authorization': process.env.REACT_APP_API_KEY }
});

export const getAllTeams = async () => {
    const response = await axios.get('teams/fbs');
    try {
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getYearDetails = async (params) => {
    const response = await axios.get(`stats/game/advanced?year=${params.year}&team=${params.team}`);
    try {
        return response.data;
    } catch (error) {
        console.log(error);
    }
}


// Get All Todos
export const getAllStats = async (team) => {
    var stats = [];
    var teamData = {};
    try {
        const statResponse = await axios.get(`stats/season/advanced?excludeGarbageTime=false&team=${team}`);
        const teamResponse = await axios.get('teams/fbs')
        stats = statResponse.data;
        teamData = teamResponse.data.find(e => e.school.toLowerCase() === team.toLowerCase())
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

    return combinedObject

}