var method = 'GET';
var url = 'https://blueoceanlabs.win/hh/v1.0/data?xmpppatient=19679302d537427395ed6b5c52e32e36@sandbox-all-in-one-prod-1.opentouch.cloud&xmppdoctor=DoctorJid';

var xhr = new XMLHttpRequest();

var resultat = [];

var map = {
    0 : "Jan",
    1 : "Feb",
    2 : "Mar",
    3 : "Apr",
    4 : "May",
    5 : "Jun",
    6 : "Jul",
    7 : "Aug",
    8 : "Sep",
    9 : "Oct",
    10 : "Nov",
    11 : "Dec"
};

var meters = {
    1 : "70",
    2 : "180",
    3 : "290",
    4 : "400",
    5 : "420",
    6 : "440",
    7 : "460",
    8 : "480",
    9 : "500",
    10 : "520"
}
var lab = ["11 Feb","12 Feb","13 Feb","14 Feb","15 Feb","16 Feb","17 Feb"];
var data = [4,5,5,6,7,8,8];

xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        
        var data = JSON.parse(xhr.responseText).data;

        for(var i = 0; i < data.length; i++) {
            var temp = {};
            temp.score = data[i].score;
            var date = new Date(data[i].ts_utc);
            var day = date.getDate();
            var month = map[date.getMonth()];
            temp.date = day + " " + month;
            resultat.push(temp);
        };

        createGraph();
    }
}

xhr.open(method, url, true);

xhr.setRequestHeader('Accept', 'application/json');

xhr.send();


function createGraph() {
    console.log("CreateGraph with data:");
    console.log(resultat);

    $('#myChart').remove(); // this is my <canvas> element

    var canvas = document.createElement("canvas");
    canvas.id = "myChart";
    canvas.width = 400;
    canvas.height = 400;

    $(".user-informations").append(canvas);

    var ctx = document.getElementById("myChart");

    
    // for (var i = 0; i < resultat.length; i++) {
    //     lab.push(resultat[i].date);
    //     data.push(resultat[i].score);
    // }

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: lab,
            datasets: [
                {
                    label: "Functional Capacity",
                    fill: false,
                    lineTension: 0.2,
                    borderWidth: 6,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 4,
                    pointHoverRadius: 14,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 8,
                    pointStyle: 'radius',
                    pointHitRadius: 10,
                    data: data,
                    spanGaps: false
                },
                {
                    label: "Warning",
                    type: 'line',
                    data: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
                    borderColor: "rgba(255,0,0,1)",
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        max: 10,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}


function createGraph2() {
    console.log("CreateGraph with data:");
    console.log(resultat);

    $('#myChart').remove(); // this is my <canvas> element

    var canvas = document.createElement("canvas");
    canvas.id = "myChart";
    canvas.width = 400;
    canvas.height = 400;

    $(".user-informations").append(canvas);

    var ctx = document.getElementById("myChart");

    lab = ["11 Feb","12 Feb","13 Feb","14 Feb","15 Feb","16 Feb","17 Feb","18 Feb"];
    data = [4,5,5,6,7,8,8,9];

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: lab,
            datasets: [
                {
                    label: "Functional Capacity",
                    fill: false,
                    lineTension: 0.2,
                    borderWidth: 6,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 4,
                    pointHoverRadius: 14,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 8,
                    pointStyle: 'radius',
                    pointHitRadius: 10,
                    data: data,
                    spanGaps: false
                },
                {
                    label: "Warning",
                    type: 'line',
                    data: [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
                    borderColor: "rgba(255,0,0,1)",
                    pointRadius: 0,
                    fill: false
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        max: 10,
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}