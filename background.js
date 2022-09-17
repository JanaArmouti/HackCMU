var currentWebsite = window.location.href

function isArticle(currentWebsite){
    var nameLen = currentWebsite.length
    
    if (currentWebsite.startsWith("https://www.bbc.com/news")){
        if (typeof currentWebsite[nameLen - 1] == Number){
            //return check if reached end of site
        }
    }

    if (currentWebsite.startsWith("https://www.cnn.com")){
        if (currentWebsite.endsWith("/index.html")){
            //return check if reached end of site
        }
    }

    if (currentWebsite.startsWith("https://www.nbcnews.com")){
        if (typeof currentWebsite[nameLen - 1] == Number){
            //return check if reached end of site
        }
    }
}

window.onscroll = function(ev) {
    if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
        alert("you're at the bottom of the page");
    }
};
