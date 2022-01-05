var newsContainerEl = document.querySelector("news-container");

var url = 'https://newsapi.org/v2/everything?' +
          'q=BTC&' +
          'from=2021-12-27&' +
          'sortBy=popularity&' +
          'apiKey=8796351310214ee8bc74043e9cc1ab9c';

var req = new Request(url);

// make get request to url 
fetch(req).then(function(response) {
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