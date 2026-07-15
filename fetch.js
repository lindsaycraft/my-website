window.onload = function() {
     fetch('wineries.json')
 
 .then(function(response) {
 
return response.json();
 
 })
 
 .then(function(json) {
 
var tableCode = '<table><caption>Livermore Valley Wineries</caption><thead><tr><th>Winery Name</th><th>Location</th><th>Year Established</th><th>Signature Wine</th></tr></thead><tbody>';
 
for (var i = 0; i < json.length; i++) {
 
 tableCode += '<tr><td>' + json[i].name + '</td><td>' + json[i].location + '</td><td>' + json[i].yearEstablished + '</td><td>' + json[i].signatureWine + '</td></tr>';
 
 }
 
 tableCode += '</tbody><tfoot><tr><td colspan="4">Source: Livermore Valley Winegrowers Association</td></tr></tfoot></table>';
 
 document.getElementById('wineries').innerHTML = tableCode;
 
 })
 
 }
