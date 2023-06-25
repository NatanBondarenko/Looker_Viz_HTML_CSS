looker.plugins.visualizations.add({
  options: {
    html_code: {
      type: 'string',
      label: 'HTML Code',
      default: '<div>Hello, World!</div>',
    },
    css_code: {
      type: 'string',
      label: 'CSS Code',
      default: 'div { color: red; }',
    },
    js_code1: {
      type: 'string',
      label: 'JavaScript Code 1',
      default: '<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>',
    },
    js_code2: {
      type: 'string',
      label: 'JavaScript Code 2',
      default: '<script type="text/javascript">google.charts.load(\'current\', {\'packages\':[\'corechart\']}); google.charts.setOnLoadCallback(drawChart); function drawChart() { var data = google.visualization.arrayToDataTable([ [\'Task\', \'Hours per Day\'], [\'Work\', 11], [\'Eat\', 2], [\'Commute\', 2], [\'Watch TV\', 2], [\'Sleep\', 7] ]); var options = { title: \'My Daily Activities\' }; var chart = new google.visualization.PieChart(document.getElementById(\'piechart\')); chart.draw(data, options); }</script>',
    },
  },

  create: function(element, config) {
    element.innerHTML = '<div id="visualization-container"></div>';
  },

  update: function(data, element, config, queryResponse) {
    const container = element.querySelector('#visualization-container');
    const htmlCode = config.html_code;
    const cssCode = config.css_code;
    const jsCode1 = config.js_code1;
    const jsCode2 = config.js_code2;

    container.innerHTML = htmlCode;
    const styleElement = document.createElement('style');
    styleElement.textContent = cssCode;
    container.appendChild(styleElement);

    const jsElement1 = document.createElement('script');
    jsElement1.innerHTML = jsCode1;
    container.appendChild(jsElement1);

    const jsElement2 = document.createElement('script');
    jsElement2.innerHTML = jsCode2;
    container.appendChild(jsElement2);
  }
});
