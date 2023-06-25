looker.plugins.visualizations.add({
  options: {
    html_code: {
      type: 'string',
      label: 'HTML Code',
      default: '<div id="curve_chart" style="width: 900px; height: 500px"></div>',
    },
    js_code: {
      type: 'string',
      label: 'JavaScript Code',
      default: `
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          var data = google.visualization.arrayToDataTable([
            ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540]
          ]);

          var options = {
            title: 'Company Performance',
            curveType: 'function',
            legend: { position: 'bottom' }
          };

          var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

          chart.draw(data, options);
        }
      `,
    },
  },

  create: function(element, config) {
    element.innerHTML = config.html_code;
  },

  update: function(data, element, config, queryResponse) {
    const jsCode = config.js_code;
    eval(jsCode);
  }
});
