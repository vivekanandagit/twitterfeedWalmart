
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = new URL(tabs[0].url);
     
    if(url.hostname.indexOf("twitter" )>= 0){
         function download(){
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "download"}, function(response) {
            });
        }
        document.getElementById('download').addEventListener('click', download);
    }
  
   
});