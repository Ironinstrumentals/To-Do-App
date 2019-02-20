/*
let lists = [];
let tasks = [];

function CreateList(){
    lists.push(document.getElementById('ListName').value);
    let result = '';
    for (let i = 0; i < lists.length; i++) {
        result+=`<option>${lists[i]}</option>`
    }
    document.getElementById('SelectBar').innerHTML = result;
}
function CreateTask(){
    tasks.push(document.getElementById('NewTask').value);
    let result = '';
    for (let i = 0; i < tasks.length; i++) {
        result+=`<div class="FakeDiv"><label><input class="" type="text" value="${tasks[i]}"></label></div>`
    }
    document.getElementById('CurrentList').innerHTML = result;
}
*/
/*
function CreateList(){
    let propertyName = document.getElementById('ListName').value;
    let addArrayToObject = (object, ...strings) => {
        object[propertyName] = strings;
    };
    let lists = {};
    addArrayToObject(lists, 'arrayOne', 'happy', 'flower', 'yummy', 'candy');
    console.log(lists);
}
*/




/*
let addArrayToObject = (object, propertyName, ...strings) => {
    object[propertyName] = strings;
};
lists = {};
function CreateList(){
    let listName = document.getElementById('ListName').value;
    let task = document.getElementsByClassName('Task');
    for (let i = 0; i < task.length; i++) {
        let realTask = task[i].value;
        addArrayToObject(lists, listName, realTask);
    }
    document.getElementById('SelectBar').innerHTML += '<option>' + listName + '</option>';
}
function CreateTaskBox(){
    document.getElementById('CurrentList').innerHTML += "<div class='FakeDiv'><label><input  class='Task' value='" + document.getElementById("NewTask").value + "' /></label><button style='margin-left: 3px; padding-top: 1.5px; background-color: red; color: white; border-radius: 5px;'><i class=\"fas fa-times\"></i></button></div>";
}
function logObject(){
    console.log(lists)
}
*/
function logObject(){
    console.log(masterList)
}


masterList = {
    unassigned: []

};

let addList = function (name) {
    masterList[name] = [];
    document.getElementById('SelectBar').innerHTML += '<option id="' + name + '">' + name + '</option>'
    //Need to make an html element for the list.
    // '<option> + name + '></option>' for example
//    so you can target the id to grab the tsk to delete later
};


addTaskToList = function (task) {
    let name = document.getElementById('SelectBar').value || 'unassigned';
    masterList[name].push(task);
    //Need to make an html element for the task.
    // '<li id="' + task + '"></li>' for example
//    so you can target the id to grab the tsk to delete later
};
function loadList(){
    let name = document.getElementById('SelectBar').value;
    document.getElementById('CurrentList').innerHTML = "";
    for (let i = 0; i < masterList[name].length; i++) {
            document.getElementById('CurrentList').innerHTML += "<div class='FakeDiv'><button style='margin-right: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: red; color: white; border-radius: 5px;'><i class='fas fa-times'></i></button><label><input value='" + masterList[name][i] + "' /></label><button onclick='' style='margin-left: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: white; color: green; border-radius: 5px;'><i class='fas fa-check'></i></button></div>"
    }
    console.log(masterList);
}