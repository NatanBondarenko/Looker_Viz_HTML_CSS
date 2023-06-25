looker.plugins.visualizations.add({
  options: {
    html_code: {
      type: 'string',
      label: 'HTML Code',
      default: '<html>\n<head>\n\n</head>\n<body style="font-family: Arial;border: 0 none;">\n  <div id="vis_div" style="width: 600px; height: 400px;"></div>\n</body>\n</html>',
    },
    js_code_1: {
      type: 'string',
      label: 'JavaScript Code 1',
      default: 'google.charts.load(\'current\');\ngoogle.charts.setOnLoadCallback(drawVisualization);\n\nfunction drawVisualization() {\n  var wrapper = new google.visualization.ChartWrapper({\n    chartType: \'LineChart\',\n    dataSourceUrl: \'http://spreadsheets.google.com/tq?key=pCQbetd-CptGXxxQIG7VFIQ&pub=1\',\n    query: \'SELECT A,D WHERE D > 100 ORDER BY D\',\n    options: {\'title\': \'Countries\'},\n    containerId: \'vis_div\'\n  });\n  wrapper.draw()\n\n  // No query callback handler needed!\n}',
    },
    js_code_2: {
      type: 'string',
      label: 'JavaScript Code 2',
      default: '',
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

    // Retrieve the body element from the new document
    const bodyElement = doc.querySelector('body');

    // Clear the element and append the body content
    const container = element.firstChild;
    container.innerHTML = '';
    container.appendChild(bodyElement);

    // Create a new script element for JavaScript code 1
    const script1 = document.createElement('script');
    script1.textContent = jsCode1;

    // Append the script element to the body
    bodyElement.appendChild(script1);

    // Execute JavaScript code 2 if provided
    if (jsCode2) {
      // Create a new script element for JavaScript code 2
      const script2 = document.createElement('script');
      script2.textContent = jsCode2;

      // Append the script element to the body
      bodyElement.appendChild(script2);
    }
  }
});
