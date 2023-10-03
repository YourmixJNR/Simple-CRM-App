/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart');

  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
}
)()


// Get a reference to the canvas element where your Chart.js chart is rendered.
const canvas = document.getElementById('myChart');

// Get a reference to the download button.
const downloadButton = document.getElementById('downloadButton');

// Function to trigger the download.
function downloadChart() {
  // Create an "off-screen" canvas element to convert the chart to an image.
  const tempCanvas = document.createElement('canvas');
  const tempContext = tempCanvas.getContext('2d');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  tempContext.drawImage(canvas, 0, 0);

  // Create a data URL for the canvas content (PNG format).
  const dataURL = tempCanvas.toDataURL('image/png');

  // Create a download link.
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = 'chart.png';
  link.click();
}

// Add a click event listener to the download button.
downloadButton.addEventListener('click', downloadChart);