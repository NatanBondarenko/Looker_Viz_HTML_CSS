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
    element.innerHTML = config.html_code;
  },

  update: function(data, element, config, queryResponse) {
    const jsCode1 = config.js_code_1;
    const jsCode2 = config.js_code_2;

    // Execute JavaScript code 1
    eval(jsCode1);

    // Execute JavaScript code 2 if provided
    if (jsCode2) {
      eval(jsCode2);
    }
  }
});
