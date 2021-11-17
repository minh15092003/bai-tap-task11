var originaLNumeber = 10.23456;
var msg = '<h2>original numbler</h2><p>' + originaLNumeber + '</p>'

var msg =+ '<h2>3 decimal places</h2><p>' +originaLNumeber.toFixed(3) + '</p>'

var msg =+ '<h2>ditgits</h2><p>' + originaLNumeber.toPrecision(3) + '</p>';

var el = document.getElementById('info');

el.innerHTML = msg;
