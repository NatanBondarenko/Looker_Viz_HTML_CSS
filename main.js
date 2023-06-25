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
    js_code: {
      type: 'string',
      label: 'JavaScript Code',
      default: 'console.log("Hello, JavaScript!");',
    },
  },

  create: function(element, config) {
    element.innerHTML = '<div id="visualization-container"></div>';
  },

  update: function(data, element, config, queryResponse) {
    const container = element.querySelector('#visualization-container');
    const htmlCode = config.html_code;
    const cssCode = config.css_code;
    const jsCode = config.js_code;

    container.innerHTML = htmlCode;
    const styleElement = document.createElement('style');
    styleElement.textContent = cssCode;
    container.appendChild(styleElement);

    // Execute the JavaScript code
    eval(jsCode);
  }
});
