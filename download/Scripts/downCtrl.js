'use strict'

window.onload=(function(){
    var url = window.location.toString();
    if (url.includes("?")){
        let kwargs = url.split("?")[1].split("&");
        // console.log(kwargs);
        for (let i=0;i<kwargs.length;i++){
            let argument = kwargs[i].split("=");
            if (argument[0]=="product"){
                document.title = "Download " + argument[1];
                document.getElementById("title").innerText = "Download " + argument[1];
                document.getElementById("down").href = "resources/"+argument[1]+".zip";
                document.getElementById("down").download = "resources/"+argument[1]+".zip";
            }
        }
    }

    // fill gradient
    var order = [[7], [4,8], [1,5,9], [2,6], [3]];
    var colors = ["#28AE46", "#07B295", "#0EAED8", "#0F94FE", "#7E76FE", "#DF2EFF"];
    for (var i=0;i<5;i++){
        let group = order[i];
        for (var j in group){
            let cube = document.getElementById("load-cube-"+group[j]);
            cube.style.background = "linear-gradient(45deg, "+colors[i]+", "+colors[i+1]+")";
        }
    }

    setTimeout("autoDown()", 2500);
})

function autoDown(){
    document.getElementById("down").click();
}
