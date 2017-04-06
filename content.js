$('body').append('<a id="downloadAnchorElem" onclick="download1()">Download</a>');

chrome.runtime.onMessage.addListener(function(a,b,c){
var tweets = [];

for (item=0; item<$('#timeline ol.stream-items li[data-item-type="tweet"]').length; item++){
    var tweetObj = {};
    var dateObj= new Date(parseInt($($('#timeline ol.stream-items li[data-item-type="tweet"]')[item]).find('.js-short-timestamp').attr('data-time-ms')));
    tweetObj["uname"] = $($('#timeline ol.stream-items li[data-item-type="tweet"]')[item]).find('.username:first').text();
    tweetObj["timeUTC"]=dateObj.toUTCString();
    tweetObj["tweet"] = $($('#timeline ol.stream-items li[data-item-type="tweet"]')[item]).find('.tweet-text:first').text();
    tweets.push(tweetObj);
}

var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tweets));
var dlAnchorElem = document.getElementById('downloadAnchorElem');
dlAnchorElem.setAttribute("href",dataStr);
dlAnchorElem.setAttribute("download", "tweets.json");
dlAnchorElem.click();
})