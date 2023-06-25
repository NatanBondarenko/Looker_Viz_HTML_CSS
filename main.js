looker.plugins.visualizations.add({
  options: {
    html_code: {
      type: 'string',
      label: 'HTML Code',
      default: '<html>\n<head>\n<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>\n</head>\n<body>\n  <div id="piechart" style="width: 900px; height: 500px;"></div>\n</body>\n</html>',
    },
    js_code: {
      type: 'string',
      label: 'JavaScript Code',
      default: 'google.charts.load(\'current\', {\'packages\':[\'corechart\']});\ngoogle.charts.setOnLoadCallback(drawChart);\n\nfunction drawChart() {\n  var data = google.visualization.arrayToDataTable([\n    [\'Task\', \'Hours per Day\'],\n    [\'Work\',     11],\n    [\'Eat\',      2],\n    [\'Commute\',  2],\n    [\'Watch TV\', 2],\n    [\'Sleep\',    7]\n  ]);\n\n  var options = {\n    title: \'My Daily Activities\'\n  };\n\n  var chart = new google.visualization.PieChart(document.getElementById(\'piechart\'));\n\n  chart.draw(data, options);\n}',
    },
  },

  create: function(element, config) {
    element.innerHTML = '';
  },

  update: function(data, element, config, queryResponse) {
    const htmlCode = config.html_code;
    const jsCode = config.js_code;

    // Create a new iframe element
    const iframe = document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    // Append the iframe to the element
    element.innerHTML = '';
    element.appendChild(iframe);

    // Create a new document object inside the iframe
    const doc = iframe.contentWindow.document;

    // Write the HTML code into the document
    doc.open();
    doc.write(htmlCode);
    doc.close();

    // Append JavaScript code as a script element to the document
    const script = doc.createElement('script');
    script.textContent = jsCode;
    doc.head.appendChild(script);
  }
});
