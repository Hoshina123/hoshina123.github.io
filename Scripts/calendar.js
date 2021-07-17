window.onload = function(){
    // create the calendar
    var weekIndex = 1;
    var weekX = 0;
    var contributions = document.getElementById("contributionsCalendar");
    const deletes = 0;
    const dayCount = 371;

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
    for (let i=1;i<=dayCount;i++){
        days[i-1].setAttribute("id",i);
    }

    // set contribution level and counts
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
        1,0,1,2,1,2,1,1,1,1];
    const contributionCounts = [0,0,0,0,0,0,0,0,0,0,0,0,
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
        0,0,0,1,0,0,0,0,6,5,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,2,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,1,0,0,9,0,
        6,0,8,2,0,0,1,2,2,2,1,1,1,1,
        1,1,0,0,0,2,1,1,0,1,1,2,1,1,
        2,0,0,0,0,2,0,2,0,1,0,5,1,0,
        1,0,0,0,3,0,0,0,0,0,0,0,0,0,
        0,0,6,0,0,0,0,0,0,0,0,0,7,4,
        6,19,4,5,7,2,0,0,3,1,2,5,0,2,
        1,0,0,1,1,1,0,1,1,2,2,2,2,0,
        2,0,4,5,5,5,1,2,2,2];
    levelColors = ["#ececec","#a9ffc3","#49df80","#00c645","#009930"];
    for (let i=1;i<=dayCount;i++){
        let item = document.getElementById(i);
        item.setAttribute("level",levels[i-1]);
        let levelIndex = Number(item.getAttribute("level"));
        item.setAttribute("fill",levelColors[levelIndex]);
        item.setAttribute("count",contributionCounts[i-1]);
    }

    // set dates
    var year = 2020;
    var month = 7;
    var day = 12;
    var monthDays=[31,28,31,30,31,30,31,31,30,31,30,31];
    for (let i=1;i<=dayCount;i++){
        isLeap = year%100==0 ? year%400==0:year%4==0;
        monthDays[1] = isLeap ? 29:28;

        let item = document.getElementById(i);
        separator_YM = String(month).length==1 ? "/0":"/";
        separator_MD = String(day).length==1 ? "/0":"/";
        item.setAttribute("date",year+separator_YM+month+separator_MD+day);
        day++;
        if (day>monthDays[month-1]){
            day = 1;
            month++;
            if (month>12){
                month = 1;
                year++;
            }
        }
    }
}

function setDayTooltip(element){
    var tooltip = document.getElementById("calendarTooltip");
    var dateLabel = document.getElementById("tooltipDate");
    var countLabel = document.getElementById("tooltipNumber");
    var date = element.getAttribute("date");
    var count = element.getAttribute("count")==0 ? "No":element.getAttribute("count");
    var pharase = count==1 ? " contribution":" contributions";
    dateLabel.innerText = date;
    countLabel.innerText = count+pharase;
}
