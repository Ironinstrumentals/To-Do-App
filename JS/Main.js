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
