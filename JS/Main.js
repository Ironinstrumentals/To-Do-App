function CreateList(){
    document.getElementById("SelectBar").innerHTML = document.getElementById("SelectBar").innerHTML + "<option>" + document.getElementById("ListName").value + "</option>";
}

function CreateTask(){
    document.getElementById('CurrentList').innerHTML = document.getElementById('CurrentList').innerHTML + "<label><input readonly value='" + document.getElementById("NewTask").value + "' /></label>";
}

//function DisplayList(){
  //  if document.getElementById('SelectBar').value = '' {

    //}
    //document.getElementById('Datalist'+document.getElementById('ListName').value).innerHTML = document.getElementById('Datalist'+document.getElementById('ListName').value).innerHTML + '';
//}

console.log(CreateList());
console.log(CreateTask());