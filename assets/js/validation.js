function validation() {
    let $regexName = /[a-zA-Z]/;
    let $regexPostalCode = /\d{6}/;
    let $regexEmail = /^[a-zA-Z0-9._]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let $regexMobileNo = /^[0]?[6789]\d{9}$/;
    $('input[type="text"]').on('keyup', function () {
        if (!$(this).val().match($regexName)) {
            $(this).closest('div').addClass('invalid');
            $(this).closest('div').removeClass('valid');
        } else {
            $(this).closest('div').addClass('valid');
        }
    });
    $('input[type="email"]').on('keyup', function () {
        if (!$(this).val().match($regexEmail)) {
            $(this).closest('div').addClass('invalid');
            $(this).closest('div').removeClass('valid');
        } else {
            $(this).closest('div').addClass('valid');
        }
    });
    $('input[type="number"]').on('keyup', function () {
        if (!$(this).val().match($regexMobileNo)) {
            $(this).closest('div').addClass('invalid');
            $(this).closest('div').removeClass('valid');
        } else {
            $(this).closest('div').addClass('valid');
        }
    });
    $('input[id="postal_code"]').on('keyup', function () {
        if (!$(this).val().match($regexPostalCode)) {
            $(this).closest('div').addClass('invalid');
            $(this).closest('div').removeClass('valid');
        } else {
            $(this).closest('div').addClass('valid');
        }
    });
}
validation();

// Start Select Multiple option in dropDown
$(document).ready(function () {
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
        removeItemButton: true,
    });
});
// End Select Multiple option in dropDown

// Start Chart JS
var pieColors = (function () {
    var colors = [],
      base = Highcharts.getOptions().colors[0],
      i;
  
    for (i = 0; i < 10; i += 1) {
      colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
  }());
  
  // Build the chart
  Highcharts.chart('container', {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: '',
      align: 'left'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        colors: pieColors,
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
          distance: -50,
          filter: {
            property: 'percentage',
            operator: '>',
            value: 4
          }
        }
      }
    },
    series: [{
      name: 'Share',
      data: [
        { name: 'Chrome', y: 74.03 },
        { name: 'Edge', y: 12.66 },
        { name: 'Firefox', y: 4.96 },
        { name: 'Safari', y: 2.49 },
        { name: 'Internet Explorer', y: 2.31 },
        { name: 'Other', y: 3.398 }
      ]
    }]
  });
// End Chart JS