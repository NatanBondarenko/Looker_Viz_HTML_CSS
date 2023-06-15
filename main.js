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
  },

  create: function(element, config) {
    element.innerHTML = '<div id="visualization-container"></div>';
  },

  update: function(data, element, config, queryResponse) {
    const container = element.querySelector('#visualization-container');
    const htmlCode = config.html_code;
    const cssCode = config.css_code;

    container.innerHTML = htmlCode;
    const styleElement = document.createElement('style');
    styleElement.textContent = cssCode;
    container.appendChild(styleElement);
  }
});
