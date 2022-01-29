
function DisplayDetails(){
    var r=1;
    var name=document.getElementById("name").value;
    var email=document.getElementById("Email").value;
    var website=document.getElementById("website").value;
    var image_link =document.getElementById("image link").value;
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var html =document.getElementById("html");
    var css=document.getElementById("css");
    var java=document.getElementById("java");
    var elem = document.createElement("img");
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var checks=document.getElementsByClassName("checks");
    const arr=[name,email,website];
    var str='';
   elem.src="9.png";
   if(male.checked){
     arr.splice(1,0,"male");}
   else if(female.checked==true){
      arr.splice(1,0,"female");}       
   for(i=0;i<3;i++){
      if(checks[i].checked===true){
         str+= checks[i].value+" ";
      }
   }
   arr.push(str);
   

    
    if(!name || !email ||!website || !image_link){
     alert("Please fill all the boxes");
      return;
   }
   var table=document.getElementById("tab");
   var row=table.insertRow(r);//<tr>
   var cell1 = row.insertCell(0);//<td>
   var cell2 = row.insertCell(1);
   cell1.innerHTML = arr;
   cell2.innerHTML = cell2.appendChild(elem);
   row++;
}