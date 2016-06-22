var data7_1 = [
    [1354586000000, 30],
    [1354587000000, 21],
    [1354588000000, 36],
    [1354589000000, 50],
    [1354590000000, 11],
    [1354591000000, 87],
    [1354592000000, 28],
    [1354593000000, 38],
    [1354594000000, 43],
    [1354595000000, 32],
    [1354596000000, 21],
    [1354597000000, 56],
    [1354596000000, 1],
    [1354597000000, 1]
];
var data7_2 = [
    [1354586000000, 56],
    [1354587000000, 61],
    [1354588000000, 78],
    [1354589000000, 86],
    [1354590000000, 45],
    [1354591000000, 55],
    [1354592000000, 64],
    [1354593000000, 36],
    [1354594000000, 48],
    [1354595000000, 67],
    [1354596000000, 78],
    [1354597000000, 88],
    [1354596000000, 1],
    [1354597000000, 1]
];
$(function() {
    $.plot($("#visitors-chart #visitors-container"), [{
        data: data7_1,
        label: "三月",
        lines: {
            fill: true
        }
    }, {
        data: data7_2,
        label: "四月",

        points: {
            show: true
        },
        lines: {
            show: true
        },
        yaxis: 2
    }
    ],
        {
            series: {
                lines: {
                    show: true,
                    fill: false
                },
                points: {
                    show: true,
                    lineWidth: 2,
                    fill: true,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: ["#65CEA7", "#424F63"],
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time",
                timeformat: "%m/%d"


            },
            yaxes: [{
                /* First y axis */
            }, {
                /* Second y axis */
                position: "right" /* left or right */
            }]
        }
    );
});
