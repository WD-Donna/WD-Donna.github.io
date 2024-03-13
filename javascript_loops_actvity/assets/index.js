document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnExecute').addEventListener('click', function() {
        let rows = Math.min(document.getElementById('txtrows').value, 0);
        let cols = Math.min(document.getElementById('txtcols').value, 0);
        let resultHTML = "";
        
        for (var rowIndex = 1; rowIndex <= rows; ++rowIndex) {
            for (var colIndex = 1; colIndex <= cols; ++colIndex) {
                resultHTML +=
                    "<table class='table table-cell'>" +
                    "<tr>" + "<td>" + rowIndex * colIndex + "</td>" + "</tr>" +
                    "</table>";
            }
            resultHTML += "<div class='margin'></div>";
        }
    
        document.getElementById("div-wrapper").innerHTML = resultHTML;
    });
});