masterList = {
    unassigned: []

};

let addList = function (name) {
    masterList[name] = [];
    document.getElementById('SelectBar').innerHTML += '<option id="' + name + '">' + name + '</option>'
};


addTaskToList = function (task) {
    let name = document.getElementById('SelectBar').value || 'unassigned';
    masterList[name].push(task);
    loadList();
};
function loadList(){
    let name = document.getElementById('SelectBar').value;
    document.getElementById('CurrentList').innerHTML = "";
    for (let i = 0; i < masterList[name].length; i++) {
        document.getElementById('CurrentList').innerHTML += "<div class='FakeDiv'><button onclick='deleteTask()' id='btn"+ masterList[name][i] +"' style='margin-right: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: red; color: white; border-radius: 5px;'><i class='fas fa-times'></i></button><label><input value='" + masterList[name][i] + "' /></label><button onclick='' style='margin-left: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: white; color: green; border-radius: 5px;'><i class='fas fa-check'></i></button></div>"
    }
    console.log(masterList);
}

function deleteTask(){
    let name = document.getElementById('SelectBar').value;
    for (let i = 0; i < masterList[name].length; i++) {
        let task = masterList[name][i];
        masterList[name].splice(task)
    }
    loadList();
}

function clearList(){

    let name = document.getElementById('SelectBar').value;
    for (let i = 0; i < masterList[name].length; i++) {
        let task = masterList[name][i];
        masterList[name].splice(task)
    }
    loadList();
}