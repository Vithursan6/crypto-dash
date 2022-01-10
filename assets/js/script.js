/*!
* Start Bootstrap - Small Business v5.0.4 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// DOM variables

var mrktContainerEl = document.querySelector("#news-container1");
var newsContainerEl = document.querySelector("#news-container2");
var tokenIdEl = document.querySelector("#tokenId");
var tokenIdEl2 = document.querySelector("#newsId");
var userFormEl = document.querySelector("#user-form");
var userFormEl2 = document.querySelector("#user-form2");
var coinSearch = document.querySelector("#coin-search");
var coinSearch2 = document.querySelector("#coin-search2");

var formSubmitHandler2 = function(event){

    //prevent page from refreshing
    event.preventDefault();
    
    var newsId = tokenIdEl2.value.toUpperCase();
    
    if(newsId) {
        getTokenInfo2(newsId);

    }
    console.log(newsId);

};


var formSubmitHandler = function(event){

    //prevent page from refreshing
    event.preventDefault();
    
    var tokenId = tokenIdEl.value.trim();
    
    if(tokenId) {
        getTokenInfo(tokenId);

    }
    console.log(tokenId);

};



var getTokenInfo2 = function(newsId) {

    console.log(newsId);

    var url = 'https://newsapi.org/v2/everything?q=' + newsId + '&from=2021-12-27&sortBy=popularity&apiKey=3c69c294543448eb99adc9b1cf4d8e3b';

    var req = new Request(url);



    // make get request to url 
    fetch(req).then(function (response) {
        // request successful
        if (response.ok) {
            response.json().then(function (news) {

                console.log(news);

                var newsArr = Object.values(news);

                var artArr = Object.keys(news.articles).reduce(function (p, c){
                    return p.concat([news.articles[c].title]);}, []);

                var urlArr = Object.keys(news.articles).reduce(function (p, c){
                    return p.concat([news.articles[c].url]);}, []);
    
                    console.log(urlArr);

                    console.log(artArr);

                displayNews(artArr, newsId);

                displayData(urlArr, newsId);
                console.log(newsArr);



            });
        } else {
            // if not successful, return to homepage
            document.location.replace("./index.html");
        }

  
        

      

    });

   


};


var getTokenInfo = function(tokenId) {


    // url variables
    var urlMrkt = "https://api.coingecko.com/api/v3/simple/price?ids=" + tokenId + "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true"
    //"https://api.github.com/users/" + user + "/repos";
    //var urlMrkt = "https://api.coingecko.com/api/v3/coins/" + tokenId + "?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false";
    var reqA = new Request(urlMrkt);

    //make get request to market api

    fetch(reqA).then(function(response) {
        // request successful
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                
                //console.log(data);
           var dataArr = Object.entries(data[tokenId]);
           console.log(dataArr);  
           displayData(dataArr, tokenId);

            });

         }else {
        // if not successful, return to homepage
        document.location.replace("./index.html");
        }
        
    });
    
};


var displayNews= function(artArr) {
    debugger;
    if (artArr.length === 0) {
        newsContainerEl.textContent = "This is not a cryptocurrency."
        return;

        
    }
  
    
    // loop over market objects
    // var newDatArr =  Object.entries(newsArr[3]);
    // console.log(newDatArr);

    for (var i=0; i < artArr.length; i++) {

    
        var newsEl = document.createElement("h2");
        newsEl.classList = "list-group2";
    
         //create span to hold object title
         var objEl = document.createElement("span")
         objEl.classList = "list-group2"

        console.log(artArr[i]);
        newsEl.textContent = artArr[i];

        // objEl.textContent = urlArr[i];

        // console.log(newsArr[i][5]);
  
        console.log(newsEl);

    

        // append to container
        //mrktEl.appendChild(objEl);

        //console.log(mrktEl.value);

        // append to DOM
        //mrktEl.appendChild = objEl.textContent;
        //console.log(mrktEl);
        newsContainerEl = newsEl.textContent;
        console.log(newsContainerEl);
    
    }


};

var displayUrl= function(urlArr) {
    debugger;
    if (urlArr.length === 0) {
        newsContainerEl.textContent = "This is not a cryptocurrency."
        return;

        
    }
  
    
    // loop over market objects
    // var newDatArr =  Object.entries(newsArr[3]);
    // console.log(newDatArr);

    for (var i=0; i < urlArr.length; i++) {

    
         //create span to hold object title
         var objEl = document.createElement("a")
         objEl.classList = "list-group2"

        console.log(artArr[i]);
        objEl.textContent = urlArr[i];

        // objEl.textContent = urlArr[i];

        // console.log(newsArr[i][5]);
  
        console.log(objEl);

    

        // append to container
        //mrktEl.appendChild(objEl);

        //console.log(mrktEl.value);

        // append to DOM
        //mrktEl.appendChild = objEl.textContent;
        //console.log(mrktEl);
        newsContainerEl = newsEl.textContent;
        console.log(newsContainerEl);
    
    }


};










var displayData = function(dataArr) {
    debugger;
    if (dataArr.length === 0) {
        mrktContainerEl.textContent = "This is not a cryptocurrency."
        return;

        
    }
  
    console.log(dataArr);
    
    // loop over market objects
    for (var i=0; i < dataArr.length; i++) {

    
        var mrktEl = document.createElement("h2");
        mrktEl.classList = "list-group";
    
        // create span to hold object title
        //var objEl = document.createElement("span")

        console.log(dataArr[i]);
        mrktEl.textContent = dataArr[i][0] + ": " + dataArr[i][1];
  
        console.log(mrktEl);

    

        // append to container
        //mrktEl.appendChild(objEl);

        //console.log(mrktEl.value);

        // append to DOM
        //mrktEl.appendChild = objEl.textContent;
        //console.log(mrktEl);
        mrktContainerEl.appendChild(mrktEl);
        console.log(mrktContainerEl);
    
    }


};


//add event listeners to form and button container
userFormEl.addEventListener("submit", formSubmitHandler);
userFormEl2.addEventListener("submit", formSubmitHandler2);

