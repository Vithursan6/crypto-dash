/*!
* Start Bootstrap - Small Business v5.0.4 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var newsContainerEl = document.querySelector("#news-container");
// var tokenIdEl = document.querySelector("#tokenId");
var userFormEl = document.querySelector("#user-form");
var coinSearch = document.querySelector("#coin-search");


// var formSubmitHandler = function(event){

//     //prevent page from refreshing
//     event.preventDefault();
    
//     var tokenId = tokenIdEl.value.toUpperCase();
    
//     if(tokenId) {
//         getTokenInfo(tokenId);

//     }
//     console.log(tokenId);

// };


// //debugger;

// var getTokenInfo = function(tokenId) {

//     console.log(tokenId);

//     var url = 'https://newsapi.org/v2/everything?q=' + tokenId + '&from=2021-12-27&sortBy=popularity&apiKey=3c69c294543448eb99adc9b1cf4d8e3b';

//     var req = new Request(url);



//     // make get request to url 
//     fetch(req).then(function (response) {
//         // request successful
//         if (response.ok) {
//             response.json().then(function (data) {
//                 displayNews(data, tokenId);
//                 console.log(data);
//             });
//         } else {
//             // if not successful, return to homepage
//             document.location.replace("./index.html");
//         }

  
        

      

//     });

   


// };



// var displayNews = function(newsApi) {
//     if (newsApi.length === 0) {
//         newsContainerEl.textContent = "There are no news items related to this currency."
//         return;

//     }

//     //coinSearch.textContent = title;



// debugger;
// // loop over news items
// for (var i=0; i < newsApi.length; i++) {

//     var newsName = newsApi[i].articles({title});
//     var newsEl = document.createElement("a");
//     newsEl.classList = "list-item flex-row justify-space-between align-center";
//     //console.log(news[i]);

//     // create span to hold news title
// var titleEl = document.createElement("span");
// titleEl.textContent = newsName;

// // append to container
// newsEl.appendChild(titleEl);
// console.log(newsEl);

// // append to DOM
// newsContainerEl.appendChild(newsEl);
// }


// };




// DOM variables
var mrktContainerEl = document.querySelector("#news-container1");
//var mrktEl = document.querySelector("#news-container");
var tokenId2El = document.querySelector("#tokenId");


var formSubmitHandler = function(event){

    //prevent page from refreshing
    event.preventDefault();
    
    var user = tokenId2El.value.trim();
    
    if(user) {
        getTokenInfo(user);

    }
    console.log(user);

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


var displayData = function(dataArr) {
    debugger;
    if (dataArr.length === 0) {
        mrktContainerEl.textContent = "This is not a cryptocurrency."
        return;
    }
    
    
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
        //mrktContainerEl = mrktEl.textContent;
        //console.log(mrktContainerEl);
    
    }


};


//add event listeners to form and button container
userFormEl.addEventListener("submit", formSubmitHandler);
