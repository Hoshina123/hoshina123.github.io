window.onload = function(){
    let weekIndex = 1;
    let weekX = 0;
    let contributions = document.getElementById("contributionsCalendar");
    let lastDays = 2;
    for (let w=0;w<51;w++){
        weekIndex++;
        weekX += 15;
        let week = document.getElementById("week1");
        let weekClone = week.cloneNode(true);
        weekClone.setAttribute("id","week"+weekIndex);
        weekClone.setAttribute("transform","translate("+weekX+",0)");
        contributions.appendChild(weekClone);
    }
    
    let lastWeek = document.createElement("g");
    lastWeek.setAttribute("id","week53");
    lastWeek.setAttribute("transform","translate("+(weekX+15)+",0)");
    contributions.appendChild(lastWeek)
    for (let i=0;i<lastDays;i++){
        let day = document.createElement("rect");
    }
}