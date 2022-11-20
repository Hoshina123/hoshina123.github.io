'use strict'

var contents = [
    {
        length: 3,
        lines: [
            "制作中作品: 该类作品功能正在完善中, 会不定期在GitHub发布新版本, 但稳定性较低", 
            "已完成作品: 该类作品功能已经完成, 只会进行优化类更新, 稳定性较高", 
            "实验性作品: 该类作品可能随时停止维护或长期暂停更新, 且稳定性较低"
        ]
    }
];

function popupShow(title, index){
    let pop = document.getElementById("popmask");
    let ptitle = document.getElementById("popupTitle");
    let ptext = document.getElementById("popupText");
    
    ptitle.innerText = title;
    let txt = "", txtbody = contents[index];
    for (let i=0;i<txtbody.length;i++){
        txt += txtbody.lines[i];
        txt += "\n";
    }
    ptext.innerHTML = txt;

    pop.style.display = 'inline';
}

function popupHide(){
    let pop = document.getElementById("popmask");
    pop.style.display = 'none';
}
