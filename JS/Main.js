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
let addArrayToObject = (object, propertyName, ...strings) => {
    object[propertyName] = strings;
};
lists = {};
function CreateList(){
    let listName = document.getElementById('ListName').value;
    let tasks = document.getElementsByClassName('Task').values;
    addArrayToObject(lists, listName, tasks)
}
function CreateTaskBox(){
    document.getElementById('CurrentList').innerHTML += '<div class="FakeDiv"><input type="text" class="Task"></div>'
}
function Log(){
    console.log(lists)
}
