var unirest = require("unirest");

var req = unirest("GET", "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total");

req.query({
    "country": "Ireland"
});

req.headers({
    "x-rapidapi-key": "581871c78bmshf97d275e7097bcep155c53jsn7df413a3ce76",
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    "useQueryString": true
});


req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);

});