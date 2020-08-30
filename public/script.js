var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['', '', '', '', ''],
        datasets: [{
            label: 'Laptop',
            backgroundColor: '#777',
            borderColor: '#777',
            data: [0, 1.5, 3, 1.5, 0],
            fill: "origin"
        }, {
            label: 'Headsets',
            backgroundColor: '#aaa',
            borderColor: '#aaa',
            data: [2, 5, 4, 6, 2],
            fill: "origin"
        },
        {
            label: 'Laptops',
            backgroundColor: '#bbb',
            borderColor: '#bbb',
            data: [4, 10, 5, 11.5, 2],
            fill: "origin"
        },
        {
            label: 'Phones',
            backgroundColor: '#ccc',
            borderColor: '#ccc',
            data: [6, 15, 6.6, 17, 2],
            fill: "origin"
        }],

    },

    options: {

        legend: {
            display: true,
            position: "top",
            align: "top"
        },

        layout: {
            padding: {
                left: 15,
                right: 30,
                top: 15,
                bottom: 1
            }
        },

        elements: {
            line: {
                tension: 0
            }
        }

    }
});


var ctx2 = document.getElementById('myChartPie').getContext('2d');

var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ["Eletronics", "Furniture", "Toys"],
        datasets: [{
            label: "Dataset",
            data: [10, 6, 4],
            backgroundColor: ["#888", "#777", "#aaa"],
            borderWidth: 5,
            fontSize: 10
        }]
    },
    options: {

        
        responsive: false,
        cutoutPercentage: 30,
 }
});
