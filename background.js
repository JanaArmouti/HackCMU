var currentWebsite = window.location.href

window.onscroll = function(ev) {
    if ((window.innerHeight + Math.ceil(window.pageYOffset + 1)) >= document.body.offsetHeight) {
        alert("you're at the bottom of the page");
    }
};
