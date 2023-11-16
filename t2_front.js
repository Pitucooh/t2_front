const axios = require("axios");

const appid = "3773a92b669f9e349ae70807bde613aa";
const q = "Sao Paulo";
const units = "metric";
const lang = "pt_br";
const cnt = "10";

const url1 = `http://api.openweathermap.org/geo/1.0/direct?q=${q}&appid=${appid}`

axios
    .get(url1)
    .then(res => {
        console.log(res)
        return res.data
    })
    .then(res => {
        console.log('count: ' + res.cnt)
        return res.list
    })
    .then(res => {
        for (let prev of res){
            console.log(`
                ${new Date(prev.dt * 1000).toLocaleString()},
                ${'latitude: ' + lat},
                ${'longitude: ' + lon},
            `)
        }
    })