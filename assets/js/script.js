// DOM variables
var mrktContainerEl = document.querySelector("market-container");
var newsContainerEl = document.querySelector("news-container");
var tokenId = document.getElementById("token-id");

var urlNews = 'https://newsapi.org/v2/everything?' +
          'q=&' +
          'from=2021-12-27&' +
          'sortBy=popularity&' +
          'apiKey=8796351310214ee8bc74043e9cc1ab9c';

var reqB = new Request(urlNews);

// make get request to news api  
fetch(reqB).then(function(response) {
    // request successful
    if (response.ok) {
        response.json().then(function(data) {
            displayNews(data);
            // console.log(response.json());
        })

       } else {
        // if not successful, return to homepage
        document.location.replace("./index.html");
    }    
});

var displayNews = function(news) {
    if (news.length === 0) {
        newsContainerEl.textContent = "There are no news items related to this currency."
        return;
    }

// loop over news items
for (var i=0; i < news.length; i++) {
    var newsEl = document.createElement("a");
}

// create span to hold news title
var titleEl = document.createElement("span");
titleEl.textContent = news[i].title;

// append to container
newsEl.appendChild(titleEl);

// append to DOM
newsContainerEl.appendChild(newsEl);
};




























































// url variables
var urlMrkt = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true'

var reqA = new Request(urlMrkt);

// make get request to market api
fetch(reqA).then(function(response) {
    // request successful
    if (response.ok) {
        response.json().then(function(data) {
            displayMrkt(data);
            // console.log(response.json());
        })

       } else {
        // if not successful, return to homepage
        document.location.replace("./index.html");
    }    
});

var displayMrkt = function(data) {
    if (data.length === 0) {
        mrktContainerEl.textContent = "This is not a cryptocurrency."
        return;
    }

// loop over market objects
for (var i=0; i < data.length; i++) {
    var mrktEl = document.createElement("a");
}

// create span to hold object title
var objEl = document.createElement("span");
objEl.textContent = data[i].title;

// append to container
mrktEl.appendChild(objEl);

// append to DOM
mrktContainerEl.appendChild(mrktEl);
};
