var currentWebsite = window.location.href

function isArticle(currentWebsite){
    var nameLen = currentWebsite.length
    var pageBottom = false
    
    if (currentWebsite.startsWith("https://www.bbc.com/news")){
        if (typeof currentWebsite[nameLen - 1] == Number){
            window.onscroll = function(ev) {
                if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
                    alert("you're at the bottom of the page");
                    pageBottom = true;
                }
            };
        }
    }

    if (currentWebsite.startsWith("https://www.cnn.com")){
        if (currentWebsite.endsWith("/index.html")){
            window.onscroll = function(ev) {
                if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
                    alert("you're at the bottom of the page");
                    pageBottom = true;
                }
            };
        }
    }

    if (currentWebsite.startsWith("https://www.nbcnews.com")){
        if (typeof currentWebsite[nameLen - 1] == Number){
            window.onscroll = function(ev) {
                if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
                    alert("you're at the bottom of the page");
                    pageBottom = true;
                }
            };
        }
    }
}
