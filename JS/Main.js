masterList = {
    //CacheHolder: []

};

let addList = function (name) {
    masterList[name] = [];
    document.getElementById('SelectBar').innerHTML += '<option id="' + name + '">' + name + '</option>'
};


addTaskToList = function () {
    let task = document.getElementById('NewTask').value;
    let name = document.getElementById('SelectBar').value || 'unassigned';
    masterList[name].push(task);
    loadList();
};
function loadList(){
    let name = document.getElementById('SelectBar').value;
    document.getElementById('CurrentList').innerHTML = "";
    for (let i = 0; i < masterList[name].length; i++) {
        document.getElementById('CurrentList').innerHTML += "<div class='FakeDiv'><button onclick='deleteTask(this.id)' id='"+ masterList[name][i].toString() +"' style='margin-right: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: red; color: white; border-radius: 5px;'><i class='fas fa-times'></i></button><label><input id='[Input]" + masterList[name][i] + "' value='" + masterList[name][i] + "' /></label><button class='white' id='z" + masterList[name][i] + "' onclick='completeTask(this.id)' style='margin-left: 3px; padding-top: 1.5px; padding-left: 3px; padding-right: 3.5px; background-color: white; border-radius: 5px;'><i class='fas fa-check'></i></button></div>"
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
    loadList();
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
    console.log(masterList);
    let masterList_serialized = JSON.stringify(masterList);
    localStorage.setItem('Cache', masterList_serialized);
    console.log(masterList_serialized);
}

function loadCache(){
    let masterList_deserialized = JSON.parse(localStorage.getItem("Cache"));
    masterList = masterList_deserialized;
    console.log(localStorage.getItem('Cache'));
    console.log(masterList);
    let NameList = Object.keys(masterList);
    for (let index = 0; index < NameList.length; index++){
        //console.log(masterList[NameList[index]]);
        addList(NameList[index]);
        //document.getElementById('SelectBar').innerHTML += '<option id="' + NameList[index] + '">' + NameList[index] + '</option>'
    }
    loadList();
}

function clearCache(){
    localStorage.clear();
    
}

// let i = Li
// Write: i
