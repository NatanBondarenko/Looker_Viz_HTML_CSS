looker.plugins.visualizations.add({
  options: {
    html_code: {
      type: 'string',
      label: 'HTML Code',
      default: '<html>\n<head>\n\n</head>\n<body>\n  <div id="piechart" style="width: 900px; height: 500px;"></div>\n</body>\n</html>',
    },
    js_code_1: {
      type: 'string',
      label: 'JavaScript Code 1',
      default: '<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>',
    },
    js_code_2: {
      type: 'string',
      label: 'JavaScript Code 2',
      default: '<script type="text/javascript">\n  google.charts.load(\'current\', {\'packages\':[\'corechart\']});\n  google.charts.setOnLoadCallback(drawChart);\n\n  function drawChart() {\n\n    var data = google.visualization.arrayToDataTable([\n      [\'Task\', \'Hours per Day\'],\n      [\'Work\',     11],\n      [\'Eat\',      2],\n      [\'Commute\',  2],\n      [\'Watch TV\', 2],\n      [\'Sleep\',    7]\n    ]);\n\n    var options = {\n      title: \'My Daily Activities\'\n    };\n\n    var chart = new google.visualization.PieChart(document.getElementById(\'piechart\'));\n\n    chart.draw(data, options);\n  }\n</script>',
    },
  },

  create: function(element, config) {
    element.innerHTML = '';
  },

  update: function(data, element, config, queryResponse) {
    const htmlCode = config.html_code;
    const jsCode1 = config.js_code_1;
    const jsCode2 = config.js_code_2;

    // Create a new document object
    const doc = new DOMParser().parseFromString(htmlCode, 'text/html');

    // Retrieve the head and body elements from the new document
    const headElement = doc.querySelector('head');
    const bodyElement = doc.querySelector('body');

    // Clear the element and append the head and body content
    const container = element.firstChild;
    container.innerHTML = '';
    container.appendChild(headElement);
    container.appendChild(bodyElement);

    // Create a new script element for JavaScript code 1
    const script1 = document.createElement('script');
    script1.innerHTML = jsCode1;

    // Append the script element to the head
    headElement.appendChild(script1);

    // Create a new script element for JavaScript code 2
    const script2 = document.createElement('script');
    script2.innerHTML = jsCode2;

    // Append the script element to the body
    bodyElement.appendChild(script2);
  }
});
