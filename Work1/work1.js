$(document).ready(function () {
    $('#example').DataTable({
        order: [[3, 'desc']],
    });
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


  google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7]
            ]);

            var options = {
                title: 'My Daily Activities',
                is3D: true,
            };

            var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
            chart.draw(data, options);
        }
        google.charts.setOnLoadCallback(drawSeriesChart);

        function drawSeriesChart() {

            var data = google.visualization.arrayToDataTable([
                ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
                ['CAN', 80.66, 1.67, 'North America', 33739900],
                ['DEU', 79.84, 1.36, 'Europe', 81902307],
                ['DNK', 78.6, 1.84, 'Europe', 5523095],
                ['EGY', 72.73, 2.78, 'Middle East', 79716203],
                ['GBR', 80.05, 2, 'Europe', 61801570],
                ['IRN', 72.49, 1.7, 'Middle East', 73137148],
                ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
                ['ISR', 81.55, 2.96, 'Middle East', 7485600],
                ['RUS', 68.6, 1.54, 'Europe', 141850000],
                ['USA', 78.09, 2.05, 'North America', 307007000]
            ]);

            var options = {
                title: 'Fertility rate vs life expectancy in selected countries (2010).' +
                    ' X=Life Expectancy, Y=Fertility, Bubble size=Population, Bubble color=Region',
                hAxis: { title: 'Life Expectancy' },
                vAxis: { title: 'Fertility Rate' },
                bubble: { textStyle: { fontSize: 11 } }
            };

            var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
            chart.draw(data, options);
        }

        
        google.charts.setOnLoadCallback(drawChartt);

        function drawChartt() {
            var data = new google.visualization.DataTable();
            data.addColumn('number', 'x');
            data.addColumn('number', 'values');
            data.addColumn({ id: 'i0', type: 'number', role: 'interval' });
            data.addColumn({ id: 'i1', type: 'number', role: 'interval' });
            data.addColumn({ id: 'i2', type: 'number', role: 'interval' });
            data.addColumn({ id: 'i2', type: 'number', role: 'interval' });
            data.addColumn({ id: 'i2', type: 'number', role: 'interval' });
            data.addColumn({ id: 'i2', type: 'number', role: 'interval' });

            data.addRows([
                [1, 100, 90, 110, 85, 96, 104, 120],
                [2, 120, 95, 130, 90, 113, 124, 140],
                [3, 130, 105, 140, 100, 117, 133, 139],
                [4, 90, 85, 95, 85, 88, 92, 95],
                [5, 70, 74, 63, 67, 69, 70, 72],
                [6, 30, 39, 22, 21, 28, 34, 40],
                [7, 80, 77, 83, 70, 77, 85, 90],
                [8, 100, 90, 110, 85, 95, 102, 110]]);

            // The intervals data as narrow lines (useful for showing raw source data)
            var options_lines = {
                title: 'Line intervals, default',
                curveType: 'function',
                lineWidth: 4,
                intervals: { 'style': 'line' },
                legend: 'none'
            };

            var chart_lines = new google.visualization.LineChart(document.getElementById('chart_lines'));
            chart_lines.draw(data, options_lines);
        }