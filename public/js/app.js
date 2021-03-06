$(document).ready(function() {
    const timeformat = "YYYY-MM-DD HH:mm:ss"
    let emptyContentDiv = function () {
        $(".contentDiv").empty()
    };

    $(".clockin").on("click", function () {
        emptyContentDiv();
        $.post("/api/hours", function (res) {
            $(".contentDiv").append("<h2>" + res + Date() + "</h2>")
        })
    });


    $.ajax({url: "/api/currentuser", method: "GET"}).then(response => {
        $("#userName").append("<h3>Welcome " + response.name + "</h3>")
    });

    $(".hoursInfo").on("click", function () {
        emptyContentDiv();
        let newContent = $("<div class= 'row'>");
        let newContentCol = $("<div class = 'col-sm-6'>");
        let datePicker1 = $("<input class = 'startdate' id='datepicker1' width='276' />");
        let datePicker2 = $("<input class = 'enddate' id='datepicker2' width='276' />");
        let dateSubmit = $("<button class='btn btn-primary dateSubmit'>");
        let newContentCol1 = $("<div class = 'col-sm-6'>");
        let dropdown = $("<select class='payPeriodMenu' >");
        let startDay = moment().subtract(3, "months").day("Friday").format("MM-DD-YYYY");
        while (moment('"' + startDay + '"').isBefore(moment())) {
            dropdown.append("<option value='" + startDay + "'>Week of : " + startDay + "</option>");
            startDay = moment('"' + startDay + '"').add(7, "d").format("MM-DD-YYYY")
        }
        dateSubmit.append("Get hours for selected dates");
        newContentCol.append(datePicker1);
        newContentCol.append("<h4>Start Date</h4>");
        newContentCol.append(datePicker2);
        newContentCol.append("<h4>End Date</h4>");
        newContentCol.append(dateSubmit);
        newContent.append(newContentCol);
        newContentCol1.append(dropdown);
        newContent.append(newContentCol1);
        $(".contentDiv").append(newContent);


        $('#datepicker1').datepicker({
            uiLibrary: 'bootstrap4'
        });
        $('#datepicker2').datepicker({
            uiLibrary: 'bootstrap4'
        });
    });

    $(document).on("change", ".payPeriodMenu", function () {
        let day = $(".payPeriodMenu").val();
        $("#datepicker1").val(day);
        $("#datepicker2").val(moment(day).add(7, "d").format("MM-DD-YYYY"))
    });
    $(document).on("click", ".dateSubmit", function () {
        let date1 = $("#datepicker1").val();
        let date2 = $("#datepicker2").val();
        let objToSend = {date1: date1, date2: date2};
        $.post("/api/gethours", objToSend, function (response) {
            emptyContentDiv()
            if (response[0].id === undefined) {
                let alert = $("<div class='alert alert-warning'>");
                alert.append("<strong>Warning!</strong>" + response);
                $(".contentDiv").prepend(alert);
            }
            else {
                let newContent = $("<div class='row'>");
                let newContentCol = $("<div class='col-sm-12'>");
                let table = $("<table class='hoursTable'>");
                let tableRow = $("<tr>");
                tableRow.append("<th>Date of Punch</th>");
                tableRow.append("<th>Time In</th>");
                tableRow.append("<th>Time Out</th>");
                tableRow.append("<th>Total Hours</th>");
                table.append(tableRow);
                newContentCol.append(table);
                newContent.append(newContentCol);
                $(".contentDiv").append(newContent);
                let durations = [];
                console.log(response)
                for (let i in response) {
                    let tableRow = $("<tr>");
                    tableRow.append("<td>"+moment(response[i].timein, timeformat).format('MM-DD-YYYY')+"</td>");
                    tableRow.append("<td>"+moment(response[i].timein, timeformat).format('hh:mm A')+"</td>");
                    tableRow.append("<td>"+moment(response[i].timeout, timeformat).format('hh:mm A')+"</td>");
                    tableRow.append("<td>"+moment.utc(moment(response[i].timeout,'YYYY-MM-DD HH:mm:ss').diff(moment(response[i].timein,'YYYY-MM-DD HH:mm:ss'))).format('HH:mm')+"</td>");
                    $(".hoursTable").append(tableRow);
                    durations.push(moment.utc(moment(response[i].timeout,'YYYY-MM-DD HH:mm:ss').diff(moment(response[i].timein,'YYYY-MM-DD HH:mm:ss'))).format('HH:mm:ss'))
                }
                const totalDurations = durations.slice(1)
                    .reduce((prev, cur) => moment.duration(cur).add(prev),
                        moment.duration(durations[0]))
                    console.log(moment.utc(totalDurations.asMilliseconds()))
                $(".contentDiv").append("<h2> Total Hours for this time selection : "+(((moment.utc(totalDurations.asMilliseconds())/1000)/60)/60).toFixed(2)+"</h2>")
            }
        })

    });

    $(".timeoff").on("click", function(){
        emptyContentDiv()
        let newContent = $("<div class= 'row'>");
        let newContentCol = $("<div class = 'col-sm-6'>");
        let datePicker1 = $("<input class = 'startdate' id='datepicker1' width='276' />");
        let datePicker2 = $("<input class = 'enddate' id='datepicker2' width='276' />");
        let dateSubmit = $("<button class='btn btn-primary vacationSubmit'>");
        dateSubmit.append("Submit date range for vacation");
        newContentCol.append(datePicker1);
        newContentCol.append("<h4>Start Date</h4>");
        newContentCol.append(datePicker2);
        newContentCol.append("<h4>End Date</h4>");
        newContentCol.append(dateSubmit);
        newContent.append(newContentCol);
        $(".contentDiv").append(newContent);

        $('#datepicker1').datepicker({
            uiLibrary: 'bootstrap4'
        });
        $('#datepicker2').datepicker({
            uiLibrary: 'bootstrap4'
        });
    })

    $(document).on("click",".vacationSubmit", function(){
        let date1 = $("#datepicker1").val();
        let date2 = $("#datepicker2").val();
        let objToSend = {date1: date1, date2: date2};
        $.post("/api/timeoff", objToSend, function(response){
            $(".contentDiv").empty()
            $(".contentDiv").append("<h2>Your request for "+moment(response.start_date, "YYYY-MM-DD").format("MM-DD-YYYY")+" through "+moment(response.end_date, "YYYY-MM-DD").format("MM-DD-YYYY")+" had been submitted, you will be emailed when the manager has reviewed your request.")
            console.log(response)
        })
    })

    $.get("/managercheck", function(response){
        console.log(response)
        if(response == 1){
            $("#makeButton").append("<a href ='/manager' class='btn btn-warning' id='switchToManagerView'>Manager View</a>")

            }
        })


});
