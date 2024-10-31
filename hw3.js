function button() {
    var minRow = parseInt(document.getElementById("myText").value);
    var maxRow = parseInt(document.getElementById("myText2").value);
    var minCol = parseInt(document.getElementById("myText3").value);
    var maxCol = parseInt(document.getElementById("myText4").value);
    if (isNaN(minRow) || isNaN(maxRow) || isNaN(minCol) || isNaN(maxCol)) {
        document.getElementById("error").innerHTML = "ERROR: Inputs MUST be integers between -50 and 50 (inclusive)";
        return;
    }
    else if (minRow < -50 || minRow > 50 || maxRow < -50 || maxRow > 50 || minCol < -50 || minCol > 50 || maxCol < -50 || maxCol > 50) {
        document.getElementById("error").innerHTML = "ERROR: Inputs MUST be integers between -50 and 50 (inclusive)";
        return;
    }
    else {
        document.getElementById("error").innerHTML = "";
        var table = document.getElementById("table");
        table.innerHTML = "";
        var row = table.insertRow();
        for(let i = minCol-1; i <= maxCol; i++) {
            if(i == minCol-1) {
                (row.insertCell()).innerHTML = "";
            }
            else {
                (row.insertCell()).innerHTML = i;
            }
        }
        for (let i = minRow; i <= maxRow; i++) {
            row = table.insertRow();
            for (let j = minCol-1; j <= maxCol; j++) {
                if(j == minCol-1) {
                    (row.insertCell()).innerHTML = i;
                }
                else {
                    (row.insertCell()).innerHTML = i * j;
                }
            }
        }
    }
}