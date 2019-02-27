masterList = {

};
let addList = function (name) {
    masterList[name] = [];
    saveCache();
    loadCache();
    document.getElementById('SelectBar').value = name;
    loadList();
    document.getElementById('ListName').value = '';
};
addTaskToList = function () {
    let task = document.getElementById('NewTask').value;
    let name = document.getElementById('SelectBar').value || 'unassigned';
    masterList[name].push(task);
    loadList();
    saveCache();
    document.getElementById('NewTask').value = '';
};
function loadList(){
    let name = document.getElementById('SelectBar').value;
    document.getElementById('CurrentList').innerHTML = "";
    if (typeof masterList[name] !== 'undefined'){
        for (let i = 0; i < masterList[name].length; i++) {
            if (masterList[name].length > 0) {
                document.getElementById('CurrentList').innerHTML += "<div class='FakeDiv fadeIn' style='display: flex; width: 100%;'>" +
                    "<button onclick='deleteTask(this.id)' id='"+ masterList[name][i].toString() +"' style='margin-right: 3px; padding-top: 1.5px; padding-left: 3.5px; padding-right: 3.5px; background-color: red; color: white; border-radius: 5px;'>" +
                    "<i class='fas fa-times'></i></button>" +
                    "<label><input onchange='updateList(this.id);' class='task' id='x" + masterList[name][i] + "' value='" + masterList[name][i] + "' /></label>" +
                    "<button class='white' id='z" + masterList[name][i] + "' onclick='completeTask(this.id)' style='border: solid dodgerblue 1px; margin-left: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: dodgerblue; border-radius: 5px;'>" +
                    "<i class='fas fa-check'></i></button></div>"
            }
        }
        saveCache();
    }
}
function deleteTask(clicked_id){
    let task = clicked_id;
    let name = document.getElementById('SelectBar').value;
    if (masterList[name].indexOf(task) > 0) {
        masterList[name].splice(masterList[name].indexOf(task), 1);
        masterList[name].unshift(task);
    }
    masterList[name].shift();
    saveCache();
    loadList();
}
function deleteList(){
    clearList();
    let name = document.getElementById('SelectBar').value;
    delete masterList[name];
    saveCache();
    loadCache();
}
function clearList(){
    let name = document.getElementById('SelectBar').value;
    for (let i = 0; i < masterList[name].length; i++) {
        let task = masterList[name][i];
        masterList[name].splice(task);
    }
    loadList();
}
function completeTask(selectedButton){
    document.getElementById(selectedButton).classList.toggle('white');
    document.getElementById(selectedButton).classList.toggle('completed');
}
function saveCache(){
    let masterList_serialized = JSON.stringify(masterList);
    localStorage.setItem('Cache', masterList_serialized);
}
function loadCache() {
    if (localStorage.getItem('Cache')) {
        document.getElementById('SelectBar').innerHTML = "";
        masterList = JSON.parse(localStorage.getItem("Cache"));
        for (List in masterList) {
            document.getElementById('SelectBar').innerHTML += '<option onclick="loadList(this.id)" id="' + List + '">' + List + '</option>';
        }
    }
}
function updateList(thistle) {
    let task = document.getElementById(thistle).value;
    for (name in masterList){
        masterList[name].push(task);
    }
    deleteTask(thistle.slice(1));
}

