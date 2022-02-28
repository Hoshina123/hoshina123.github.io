'use strict'

function tryOnline(name){
    let link = window.location.toString();
    link.replace("https://","");
    window.open(link.split("/")[0]+name);
}

function download(name){
    let link = window.location.toString();
    link.replace("https://","");
    window.open(link.split("/")[0]+"download/index.html?product="+name);
}
