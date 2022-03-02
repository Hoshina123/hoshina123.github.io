'use strict'

function changeFocus(index){
    var tabs = document.body.getElementsByClassName("product-btn");
    for (let i=0;i<tabs.length;i++){
        if (i == index){
            tabs[i].setAttribute("id","product-btn-focus");
            if (i==0){
                $("#focus").fadeIn(100).animate({
                    "margin-left": document.body.offsetWidth*(i+1)*0.25+10
                },500);
                $("#bar-focus").fadeIn(100).animate({
                    "margin-left": document.body.offsetWidth*(i+1)*0.25+160
                },500);
            }
            else{
                $("#focus").fadeIn(100).animate({
                    "margin-left": document.body.offsetWidth*(i+1)*0.3+15
                },500);
                $("#bar-focus").fadeIn(100).animate({
                    "margin-left": document.body.offsetWidth*(i+1)*0.3+123
                },500);
            }
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
