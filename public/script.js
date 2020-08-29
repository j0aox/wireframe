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
                left: 1,
                right: 15,
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