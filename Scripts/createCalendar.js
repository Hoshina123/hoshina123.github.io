window.onload = function(){
    // create the calendar
    var weekIndex = 1;
    var weekX = 0;
    var contributions = document.getElementById("contributionsCalendar");
    const deletes = 3;

    for (let w=0;w<52;w++){
        weekIndex++;
        weekX += 15;
        let week = document.getElementById("week1");
        let weekClone = week.cloneNode(true);
        weekClone.setAttribute("id","week"+weekIndex);
        weekClone.setAttribute("transform","translate("+weekX+",0)");
        contributions.appendChild(weekClone);
    }
    lastWeek = document.getElementById("week53");
    var dayY = 0;
    var days = lastWeek.children;
    for (let i=deletes-1;i>=0;i--){
        lastWeek.removeChild(days[i]);
    }
    for (let i=0;i<7-deletes;i++){
        lastWeek.children[i].setAttribute("y",dayY);
        dayY += 15;
    }

    // set ID
    days = document.getElementsByClassName("contributions_day");
    for (let i=1;i<=367;i++){
        days[i-1].setAttribute("id",i);
    }

    // set contribution level
    const levels = [0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,1,0,0,0,0,2,2,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,1,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,0,0,2,0,
        2,0,2,1,0,0,1,1,1,1,1,1,1,1,
        1,1,0,0,0,1,1,1,0,1,1,1,1,1,
        1,0,0,0,0,1,0,1,0,1,0,2,1,0,
        1,0,0,0,1,0,0,0,0,0,0,0,0,0,
        0,0,2,0,0,0,0,0,0,0,0,0,2,1,
        2,4,1,2,2,1,0,0,1,1,1,2,0,1,
        1,0,0,1,1,1,0,1,1,1,1,1,1,0,
        1,0,1,2,1,1];
    levelColors = ["#ececec","#86ee97","#49df80","#00c645","#009930"];
    for (let i=1;i<=368;i++){
        let item = document.getElementById(i);
        item.setAttribute("level",levels[i-1]);
        let index = Number(item.getAttribute("level"));
        item.setAttribute("fill",levelColors[index]);
    }
}
