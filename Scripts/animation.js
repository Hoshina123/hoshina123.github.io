'use strict'

function changeFocus(index){
    var tabs = document.body.getElementsByClassName("product-btn");
    for (let i=0;i<tabs.length;i++){
        if (i == index){
            tabs[i].setAttribute("id","product-btn-focus");
        }
        else{
            tabs[i].setAttribute("id","");
        }
    }
    window.location = window.location.toString().split("#")[0]+"#"+tabs[index].getAttribute("location");
    document.getElementById("sh").setAttribute("slided",-600);
}

function wheelHandler(){
    var slided = document.documentElement.scrollTop;
    if (slided >= 50){
        $("#sh").fadeIn(300);
    }
    else{
        $("#sh").fadeOut(300);
    }
    setTimeout("wheelHandler()",1);
}
wheelHandler();
