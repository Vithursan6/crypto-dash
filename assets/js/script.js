var newsContainerEl = document.querySelector("#news-container");
var tokenIdEl = document.querySelector("#tokenId")
var userFormEl = document.querySelector("#user-form")
var coinSearch = document.querySelector("#coin-search")


var formSubmitHandler = function(event){

    //prevent page from refreshing
    event.preventDefault();
    
    var tokenId = tokenIdEl.value.toUpperCase();
    
    if(tokenId) {
        getTokenInfo(tokenId);

    }
    console.log(tokenId);

};


//debugger;

var getTokenInfo = function(tokenId) {

    console.log(tokenId);

    var url = 'https://newsapi.org/v2/everything?q=' + tokenId + '&from=2021-12-27&sortBy=popularity&apiKey=3c69c294543448eb99adc9b1cf4d8e3b';

    var req = new Request(url);



    // make get request to url 
    fetch(req).then(function (response) {
        // request successful
        if (response.ok) {
            response.json().then(function (data) {
                displayNews(data, tokenId);
                //console.log(data);
            });
        } else {
            // if not successful, return to homepage
            document.location.replace("./index.html");
        }

  
        

      

    });

   


};



var displayNews = function(news) {
    if (news.length === 0) {
        newsContainerEl.textContent = "There are no news items related to this currency."
        return;

        console.log(news);
    }

   
debugger;
// loop over news items
for (var i=0; i < news.length; i++) {

    //var newsName =
    var newsEl = document.createElement("a");
    newsEl.classList = "list-item flex-row justify-space-between align-center";

    // create span to hold news title
var titleEl = document.createElement("span");
titleEl.textContent = news[i].title;

// append to container
newsEl.appendChild(titleEl);
console.log(newsEl);

// append to DOM
newsContainerEl.appendChild(newsEl);
}


};

//add event listeners to form and button container
userFormEl.addEventListener("submit", formSubmitHandler);