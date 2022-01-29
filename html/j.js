function hello()

{
    var row=1;
    var table=document.getElementById("table");
var newRow=table.insertRow(row);
var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);

cell1.innerHTML = "cell1";
cell2.innerHTML = "cell2";
row++;}